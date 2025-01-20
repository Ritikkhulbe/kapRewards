import { ReactECharts, ReactEChartsProps } from "@/app/components/ReactEchart";
import { SmallCard } from "@/app/genericComponents/GenericCards";
import SingleBar from "@/app/genericComponents/smallerComponents/SingleBar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

//auto vs manual qa graph
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

// const Leaderboard = [
//   {
//     name: "Ritik",
//     value: 76,
//   },
//   {
//     name: "Mohit",
//     value: 56,
//   },
//   {
//     name: "Dhananjay",
//     value: 45,
//   },
//   {
//     name: "Rahul",
//     value: 34,
//   },
//   {
//     name: "Raj",
//     value: 23,
//   },
//   {
//     name: "Kavya",
//     value: 12,
//   },
//   {
//     name: "Rajat",
//     value: 1,
//   },
// ];

// const Leaderboard2 = [
//   {
//     name: "Mohit",
//     value: 76,
//   },
//   {
//     name: "Ritik",
//     value: 45,
//   },
//   {
//     name: "Dhananjay",
//     value: 43,
//   },
//   {
//     name: "Rahul",
//     value: 34,
//   },
//   {
//     name: "Raj",
//     value: 33,
//   },
//   {
//     name: "Kavya",
//     value: 30,
//   },
//   {
//     name: "Rajat",
//     value: 12,
//   },
// ];

//channel breakdown graph

const DashboardComp = ({ data }: { data: any }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (data.agent_name) {
      setCurrentUser(data.agent_name);
    }
  }, [data]);

  if (data && data.agent_id) {
    return (
      <>
        <div className="grid grid-cols-3">
          <div className="w-full mt-1 col-span-2">
            <div className="w-full flex justify-between mb-2">
              <SmallCard
                title="Total tickets handled"
                number={data.passed_tickets + data.failed_tickets + ""}
                variant="up"
                percentage={10}
              />
              <SmallCard
                title="Total Successful tickets"
                number={data.passed_tickets + ""}
                variant="up"
                percentage={14}
              />
              <SmallCard
                title="Total Failed tickets"
                number={data.failed_tickets + ""}
                variant="down"
                percentage={7}
              />
            </div>
            <Card className=" font-light text-[14px] text-textsecondary-light h-[50vh] p-3 w-full mr-[1%] bg-primary">
              <ReactECharts option={option} />
            </Card>
          </div>
          <div className="w-full ml-2 mt-1 col-span-1 ">
            <Card className="w-full h-[100%] bg-white p-4">
              <span className=" font-bold text-[25px] w-[220%] mb-2">
                Leaderboard
              </span>
              <Tabs defaultValue="Live" className="w-full mt-2">
                <TabsList>
                  <TabsTrigger
                    value="Live"
                    className={
                      "rounded-l-cs border-fourth border font-semibold text-textsecondary-light px-4text-[16px]"
                    }
                  >
                    Live
                  </TabsTrigger>
                  <TabsTrigger
                    value="Last"
                    className={
                      "rounded-r-cs border-fourth border font-semibold text-textsecondary-light px-4  text-[16px]"
                    }
                  >
                    Last
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Live" className="w-full">
                  <div className="flex flex-col w-full overflow-y-scroll justify-between">
                    {data?.leader_board_details?.leader_board_live?.map(
                      (item: any, index: any) => (
                        <div
                          key={index}
                          className={cn(
                            "flex items-center w-full px-2 pb-1 ",
                            item.agent_id === data.agent_id
                              ? "rounded-[6px] border-textsecondary-light border"
                              : ""
                          )}
                        >
                          <SingleBar
                            title={item.agent_name}
                            percentage={item.total_points}
                            data={data?.leader_board_details?.leader_board_live}
                          />
                        </div>
                      )
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="Last">
                  <div className="flex flex-col w-full overflow-y-scroll justify-between ">
                    {data?.leader_board_details?.leader_board_past?.map(
                      (item: any, index: any) => (
                        <div
                          key={index}
                          className={cn(
                            "flex items-center w-full  px-2  pb-1",
                            item.agent_name === currentUser
                              ? "rounded-[6px] border border-textsecondary-light"
                              : ""
                          )}
                        >
                          <SingleBar
                            title={item.name}
                            percentage={item.value}
                            data={data?.leader_board_details?.leader_board_past}
                          />
                        </div>
                      )
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default DashboardComp;
