import { useEffect, useState } from "react";
import { ReactECharts, ReactEChartsProps } from "@/app/components/ReactEchart";
import { SmallCard } from "@/app/genericComponents/GenericCards";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { API_URL_GET } from "@/constants";

type WeeklyRecord = { reward: number };
type LeaderBoardItem = { agent_name: string; total_points: number };
type ApiResponse = {
  agent_name: string;
  reward_point: number;
  passed_tickets: number;
  failed_tickets: number;
  weekly_records: Record<string, WeeklyRecord>;
  leader_board_details: {
    leader_board_live: LeaderBoardItem[];
    leader_board_past: LeaderBoardItem[];
  };
};

const DashboardComp = () => {
  const [currentUser, setCurrentUser] = useState<string>("Ritik");
  const [leaderboardLive, setLeaderboardLive] = useState<LeaderBoardItem[]>([]);
  const [leaderboardPast, setLeaderboardPast] = useState<LeaderBoardItem[]>([]);
  const [rewardPoint, setRewardPoint] = useState<number>(0);
  const [passedTickets, setPassedTickets] = useState<number>(0);
  const [tickets, setTickets] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL_GET, {
          method: "POST",
        });
        const data: ApiResponse = await response.json();

        setRewardPoint(data.reward_point);
        setPassedTickets(data.passed_tickets);
        setTickets(data.passed_tickets + data.failed_tickets);

        setCurrentUser(data.agent_name);

        setLeaderboardLive(data?.leader_board_details.leader_board_live);
        setLeaderboardPast(data?.leader_board_details.leader_board_past);

        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  const option: ReactEChartsProps["option"] | any = {
    dataset: {
      source: [
        ["Week", "Current Week", "Last Week"],
        ["Monday", 42, 14],
        ["Tuesday", 23, 21],
        ["Wednesday", 23, 46],
        ["Thursday", 45, 21],
        ["Friday", 33, 25],
        ["Saturday", 32, 16],
      ],
    },
    title: {
      text: "Current Week vs Last Week",
      show: true,
      textStyle: {
        fontSize: "14px",
        color: "#68717f",
        fontWeight: "300",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Current Week", "Last Week"],
      bottom: 0,
      lineStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "20%",
      bottom: "20%",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value",
      splitLine: {
        onZero: false,
        lineStyle: {
          width: 2,
          type: "dashed",
          opacity: 0.3,
        },
      },
    },
    series: [
      {
        type: "line",
        label: {
          show: false,
        },
        smooth: true,
        symbol: "none",
      },
      {
        type: "line",
        label: {
          show: false,
        },
        smooth: true,
        symbol: "none",
      },
    ],
  };

  const SingleBar = ({
    title,
    points,
    percentage,
  }: {
    title: string;
    points: number;
    percentage: number;
  }) => {
    // Determine the progress color based on percentage ranges of 50
    const progressColor =
      percentage > 90
        ? "bg-blue-500" // Above 100%
        : percentage > 75
        ? "bg-green-500" // Between 76% and 100%
        : percentage > 50
        ? "bg-yellow-500" // Between 51% and 75%
        : percentage > 25
        ? "bg-orange-400" // Between 26% and 50%
        : "bg-red-500"; // 25% or less

    const progressBGColor =
      percentage > 90
        ? "bg-blue-50" // Above 100%
        : percentage > 75
        ? "bg-green-50" // Between 76% and 100%
        : percentage > 50
        ? "bg-yellow-50" // Between 51% and 75%
        : percentage > 25
        ? "bg-orange-50" // Between 26% and 50%
        : "bg-red-50"; // 25% or less

    return (
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <span className="text-sm font-medium text-gray-700">{points}</span>
        </div>
        <div className={`w-full rounded-full h-4 ${progressBGColor}`}>
          <div
            className={`h-4 rounded-full ${progressColor}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const calculatePercentage = (points: number, maxPoints: number) => {
    return (points / maxPoints) * 100;
  };

  return (
    <div className="bg-gradient-to-r flex flex-col justify-between">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="flex justify-between mb-4">
              <SmallCard title="Tickets Handled" number={`${tickets}`} />
              <SmallCard
                title="Tickets Resolved"
                number={` ${passedTickets}`}
                subtitle="Every resolved ticket is a step closer to delighting our customers. Keep up the great work!"
              />
              <SmallCard
                title="Points Earned So Far"
                number={`🏆 ${rewardPoint}`}
                subtitle="Your dedication has earned you these reward points. Amazing effort!"
              />
            </div>

            <Card className="font-light text-[14px] text-textsecondary-light h-[50vh] p-3 w-full bg-primary border-2 border-gray-400">
              {loading ? (
                <p>Loading chart...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <ReactECharts option={option} />
              )}
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="w-full h-full bg-white p-4 border-2 border-gray-400">
              <h2 className="font-bold text-2xl mb-4">Leaderboard</h2>
              <Tabs defaultValue="Live" className="w-full">
                <TabsList>
                  <TabsTrigger value="Live" className="font-semibold px-4">
                    Live
                  </TabsTrigger>
                  <TabsTrigger value="Last" className="font-semibold px-4">
                    Last
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Live">
                  <div className="flex flex-col gap-2  h-[50vh] overflow-y-scroll">
                    {leaderboardLive.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center w-full px-2 pb-1 border rounded-md border-gray-300",
                          item.agent_name === currentUser
                            ? "rounded-[6px] border-textsecondary-light border-2"
                            : ""
                        )}
                      >
                        <SingleBar
                          title={item.agent_name}
                          points={item.total_points}
                          percentage={calculatePercentage(
                            item.total_points,
                            Math.max(
                              ...leaderboardLive.map(
                                (leader) => leader.total_points
                              )
                            )
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="Last">
                  <div className="flex flex-col gap-2 h-[50vh] overflow-y-scroll">
                    {leaderboardPast.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center w-full px-2 pb-1",
                          item.agent_name === currentUser
                            ? "rounded-[6px] border border-textsecondary-light"
                            : ""
                        )}
                      >
                        <SingleBar
                          title={item.agent_name}
                          points={item.total_points}
                          percentage={calculatePercentage(
                            item.total_points,
                            Math.max(
                              ...leaderboardPast.map(
                                (leader) => leader.total_points
                              )
                            )
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-6 bg-gradient-to-r from-indigo-500 text-white text-center py-4">
        <p className="text-lg font-semibold">
          Great achievements are never accomplished alone.
          <span className="font-bold">
            {" "}
            Thank you for being the spark that ignites success!
          </span>
        </p>
      </footer>
    </div>
  );
};

export default DashboardComp;
