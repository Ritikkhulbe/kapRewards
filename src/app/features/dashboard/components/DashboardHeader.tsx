import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardComp from "./DashboardComp";
import { cn } from "@/lib/utils";

const tabs = [
  {
    name: "Overview",
    element: <DashboardComp />,
  },
];

const DashboardHeader = () => {
  return (
    <div>
      <Tabs defaultValue={tabs[0].name}>
        <div className="flex justify-between">
          <TabsList>
            {tabs.map((tab, index) => (
              <TabsTrigger
                value={tab.name}
                key={index}
                className={cn(
                  "first:rounded-l-cs", // Rounded left for the first tab
                  "last:rounded-r-cs", // Rounded right for the last tab
                  "border-fourth border font-medium px-[20px] py-[6px] text-textsecondary text-[12px]"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex">
            <span className="text-[#373C43] flex flex-wrap w-[250px] p-2 bg-fourth text-[14px] font-semibold">
              You are just 75 Reward points away from your target
            </span>
            <img
              src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=2048x2048&w=is&k=20&c=WiewZ2pC0tP1-NfjpxTkWYXVCBotqrIzWXc2HkAewkk="
              alt="burger"
              className="w-[65px] h-[65px]  "
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
