import SmallSearchIcon from "@/app/assets/icons/SmallSearchIcon";
import { useState } from "react";

interface SearchableDropdownProps<T> {
  data: any; // Array of items to display in the dropdown
  selectedArray: T[]; // Initially selected array
  setArray: (updatedArray: T[]) => void; // Function to update the selected array
  labelKey: keyof T; // Key to display as the label
  idKey: keyof T; // Key to use as the unique identifier
  className?: string;
  placeholder?: string;
}

const SearchableDropdown = <T extends Record<string, any>>({
  data,
  selectedArray,
  setArray,
  labelKey,
  idKey,
    className,
    placeholder,
}: SearchableDropdownProps<T>) => {
  const [query, setQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSelection = (item: T) => {
    const alreadySelected = selectedArray.some((group) => group[idKey] === item[idKey]);
    if (alreadySelected) {
      setArray(selectedArray.filter((group) => group[idKey] !== item[idKey])); // Remove if already selected
    } else {
      setArray([...selectedArray, item]); // Add if not selected
    }
    setQuery(""); // Clear the search bar after selection
  };

  const handleRemoveGroup = (itemId: T[keyof T]) => {
    setArray(selectedArray.filter((group) => group[idKey] !== itemId));
  };

  const isSelected = (itemId: T[keyof T]) =>
    selectedArray.some((group) => group[idKey] === itemId);

  const filteredData = data.filter((item:any) =>
    String(item[labelKey]).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={"relative w-3/4 flex justify-between border border-gray-300 rounded-xl px-4 py-2 cursor-pointer "+className}
      onClick={() => setIsEditing(true)} // Enable editing on click
    >
      {/* Selected Groups or Search Input */} 
      <div className="flex flex-wrap gap-2">
        {selectedArray.map((group, index) => (
          <span
            key={index}
            className="flex items-center bg-blue-50 text-third-light rounded px-2 py-1 text-[12px]"
          >
            {group[labelKey]}
            <button
              className="ml-2 text-blue-500 hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering dropdown toggle
                handleRemoveGroup(group[idKey]);
              }}
            >
              &times;
            </button>
          </span>
        ))}

        {/* Search Input */}
        {isEditing && (
          <input
            type="text"
            autoFocus
            className="flex-grow bg-transparent outline-none py-1 text-[14px] "
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setIsEditing(false)} // Disable editing when focus is lost
          />
        )}

        {/* Placeholder */}
        {!isEditing && selectedArray.length === 0 && (
          <span className="text-gray-400 text-[14px] flex items-center">{placeholder || "Select..."}</span>
        )}
      </div>

      {/* Dropdown List */}
      {isEditing && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-md max-h-48 overflow-y-auto z-10">
          {filteredData.map((item:any,index:number) => (
            <div
              key={index}
              className={`px-4 py-2 cursor-pointer flex items-center justify-between ${
                isSelected(item[idKey]) ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
              onMouseDown={() => handleSelection(item)} // Use onMouseDown to avoid losing focus
            >
              <span className="text-[12px]">{item[labelKey]}</span>
              {isSelected(item[idKey]) && <span className="text-blue-500 text-sm">✔</span>}
            </div>
          ))}
          {filteredData.length === 0 && (
            <div className="px-4 py-2 text-gray-500 text-sm">No results found.</div>
          )}
        </div>
      )}
      <div>
        <SmallSearchIcon />
      </div>
    </div>
  );
};

export default SearchableDropdown;
