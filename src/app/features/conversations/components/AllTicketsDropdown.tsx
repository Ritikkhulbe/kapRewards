import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { TicketsIcon } from "lucide-react";

interface DropdownItem {
  label: string;
  onClick: () => void;
}

const AllTicketsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const dropdownItems: DropdownItem[] = [
    { label: "Open Tickets", onClick: () => alert("Open Tickets clicked") },
    { label: "Closed Tickets", onClick: () => alert("Closed Tickets clicked") },
    {
      label: "Pending Tickets",
      onClick: () => alert("Pending Tickets clicked"),
    },
  ];

  return (
    <div className="relative w-full">
      <div
        onClick={toggleDropdown}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-cs border border-gray-300 bg-white px-4 py-2 shadow-sm hover:bg-gray-100"
      >
        <TicketsIcon className="h-4 w-4 text-gray-500" />

        <div className="flex items-center justify-center px-0.5">
          <span className="text-sm font-semibold text-gray-700">
            All Tickets
          </span>
        </div>

        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg z-10">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTicketsDropdown;
