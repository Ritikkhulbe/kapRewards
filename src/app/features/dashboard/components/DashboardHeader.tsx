import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardComp from "./DashboardComp";
import { cn } from "@/lib/utils";

const tabs = [
  {
    name: "Overview",
    element: <DashboardComp />,
  },
  {
    name: "Agent Overview",
    element: <DashboardComp />,
  },
  {
    name: "Auto QA",
    element: <DashboardComp />,
  },
  {
    name: "Manual QA",
    element: <DashboardComp />,
  },
  {
    name: "Skillset",
    element: <DashboardComp />,
  },
  {
    name: "Leadership",
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
          Hello filters
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
