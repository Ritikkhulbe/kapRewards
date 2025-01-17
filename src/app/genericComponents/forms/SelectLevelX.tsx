import { Button } from "@/components/ui/button";
import SearchableDropdown from "./SearchableDropdown"; // Import your existing component
import DeleteIcon from "@/app/assets/icons/DeleteIcon";
import { useEffect, useState } from "react";

// Define the prop types
interface SelectLevelXProps {
  data: any[]; // Data to be used for the dropdown options
  labelKey: keyof any;
  idKey: keyof any;
  placeholder?: string;
  levels: any[][]; // Array of arrays of selected items
  setLevels: React.Dispatch<React.SetStateAction<any[][]>>; // Setter for the levels
}

const SelectLevelX = <T extends Record<string, any>>({
  data,
  labelKey,
  idKey,
  placeholder,
  levels,
  setLevels,
}: SelectLevelXProps) => { // Initially, we have one level with an empty array of selected items

  const [errorMessages, setErrorMessages] = useState<string>("");

  // Add a new level
  const addLevel = () => {
    if(levels[levels.length-1].length === 0){
      setErrorMessages("Please select at least one designation for the current level");
      return;
    }
    setLevels((prevLevels) => [...prevLevels, []]);
    setErrorMessages("");
  };

  // Remove a specific level
  const removeLevel = (levelIndex: number) => {
    if(levels.length === 1){ 
      setErrorMessages("One level is required to use rebuttal");
      return;
    }
    setLevels((prevLevels) => prevLevels.filter((_, index) => index !== levelIndex));
    setErrorMessages("");
  };

  // Update selected items for a specific level
  const updateLevel = (levelIndex: number, updatedArray: T[]) => {
    setLevels((prevLevels) =>
      prevLevels.map((level, index) =>
        index === levelIndex ? updatedArray : level
      )
    );
  };

  useEffect(() => {
    setErrorMessages("");
  }, [levels]);


  return (
    <div className="flex flex-col w-full">
      {levels.map((level, index) => (
        <div key={index} className="flex items-center justify-evenly gap-4 w-3/4 border rounded-[12px] py-2 mb-2">
          {/* Level Display */}
          <div className="flex items-center w-full justify-evenly border-r">
              {/* Level Label */}
              <span className="text-[12px] text-textsecondary font-sem">{`Level ${index + 1}`}</span>

              {/* Searchable Dropdown */}
              <SearchableDropdown
                data={data}
                selectedArray={level}
                setArray={(updatedArray) => updateLevel(index, updatedArray)}
                labelKey={labelKey}
                idKey={idKey}
                placeholder={placeholder || `Select for Level ${index + 1}`}
              />
          </div>

          {/* Remove Button */}
          <div
            onClick={() => removeLevel(index)}
            className={`p-3 mr-3 flex justify-center  cursor-pointer w-[10vh] h-full hover:bg-fourth rounded-full ${levels.length > 1 ? "bg-primary": " hover:cursor-not-allowed"}`}
          >
            {levels.length > 1 ?  <DeleteIcon /> : <DeleteIcon stroke="gray" />}
            
          </div>
        </div>
      ))}
      <div className="flex items-center p-2 gap-2">
      {/* Add Level Button */}
      {levels.length < 4 && (
        <Button
          onClick={addLevel}
          className=" bg-third-light mx-6 text-white p-2 rounded-[8px] w-1/6"
        >
          + Add Level
        </Button>
      )}
      {errorMessages && <p className="text-red-500 text-sm">{errorMessages}</p>}
      </div>
    </div>
  );
};

export default SelectLevelX;
