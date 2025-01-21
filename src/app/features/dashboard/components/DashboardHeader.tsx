import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardComp from "./DashboardComp";
import { cn } from "@/lib/utils";

const tabs = [
  {
    name: "Your Rewards Dashboard",
    element: <DashboardComp />,
  },
];

const DashboardHeader = () => {
  // States for storing the fetched API data
  const [name, setName] = useState<string>("");

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/28886a1b-2e3c-4314-8b76-08627a3d750a"
        );
        const data = await response.json();
        setName(data.agent_name);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <Tabs defaultValue={tabs[0].name}>
        <div className="flex justify-between items-center">
          <TabsList className="h-full border">
            {tabs.map((tab, index) => (
              <TabsTrigger
                value={tab.name}
                key={index}
                className={cn(
                  "first:rounded-l-cs", 
                  "last:rounded-r-cs",
                  "border-fourth border font-medium px-[20px] h-full py-[6px] text-textsecondary text-[12px]"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

        <h1 className="text-2xl font-bold text-center my-6">Your Contribution Matters!</h1>
          <div className="flex items-center">
            <span className="text-[#373C43] flex flex-wrap w-[300px] p-2 bg-fourth text-[14px] font-semibold">
              {/* Dynamically displaying the fetched name and reward */}
              {name ? `${name}, you are just 100 Reward points away from your target` : "Loading..."}
            </span>
            <img
              src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=2048x2048&w=is&k=20&c=WiewZ2pC0tP1-NfjpxTkWYXVCBotqrIzWXc2HkAewkk="
              alt="burger"
              className="w-[65px] h-[65px]"
            />
          </div>
        </div>
        {tabs.map((tab, index) => (
          <TabsContent value={tab.name} key={index}>
            {tab.element}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DashboardHeader;
