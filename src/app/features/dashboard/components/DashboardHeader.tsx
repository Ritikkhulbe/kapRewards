import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardComp from "./DashboardComp";
import { cn } from "@/lib/utils";

const DashboardHeader = ({ data }: { data: any }) => {
  return (
    <div>
      <Tabs defaultValue="Overview">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger
              value="Overview"
              className={cn(
                "first:rounded-l-cs", // Rounded left for the first tab
                "last:rounded-r-cs", // Rounded right for the last tab
                "border-fourth border font-medium px-[20px] py-[6px] text-textsecondary text-[12px]"
              )}
            >
              Overview
            </TabsTrigger>
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
        <TabsContent value="Overview">
          <DashboardComp data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardHeader;
