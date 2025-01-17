import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
import FolderCardDropdown from "./FolderCardDropdown";
import AllTicketsDropdown from "./AllTicketsDropdown";

export function Header({
  onTabChange,
  role,
}: {
  onTabChange: (tab: string) => void;
  role: string;
}) {
  console.log(role, "role");
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center p-4 border-b">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <Tabs
            defaultValue="inbox"
            onValueChange={(value) => onTabChange(value)}
            className="bg-white border border-gray-200 rounded-[6px] shadow-sm overflow-hidden flex"
          >
            <TabsList className="flex">
              <TabsTrigger
                value="inbox"
                className="px-4 py-2 flex items-center gap-2 border-r border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:bg-gray-50"
              >
                Inbox
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="px-4 py-2 flex items-center text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200"
              >
                History
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {/* Search Input */}
        <div className="flex justify-between gap-2">
          <div className="flex items-center">
            <Input
              placeholder="Search..."
              className="h-9 py-2 px-4 border border-gray-300 rounded-[6px] shadow-sm text-sm text-gray-500"
            />
          </div>

          {/* {Date section} */}
          <div className="flex items-center">
            <DatePickerWithRange className="px-4 bg-white border border-gray-200 rounded-[6px] shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50" />
          </div>

          {(role === "L1Agent" || role === "L2Agent") && (
            <div className="flex items-center">
              <FolderCardDropdown />
            </div>
          )}

          {(role === "L1Agent" || role === "L2Agent") && (
            <div className="flex items-center">
              <AllTicketsDropdown />
            </div>
          )}

          {/* Filters Button */}
          <div className="flex items-center">
            <Button className="px-4 py-2 bg-white border border-gray-200 rounded-[6px] shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
