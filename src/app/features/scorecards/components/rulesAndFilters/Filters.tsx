
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Condition } from "../../types/configurationSave";
import Filter from "./Filter";



interface BlockManagerProps {
  list: Condition[];
  setList: React.Dispatch<React.SetStateAction<Condition[]>>;
}

const Filters: React.FC<BlockManagerProps> = ({ list, setList }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const addBlock = () => {
    if (list.length < 10) {
      setList([...list, {
        attribute: "",
        field: "",
        operator: "",
        value: "",
        conditionType: ""
      }]);
    } else {
      setErrorMessage("Maximum 10 filters are allowed");
    }
  };

  if (list.length === 0) {
    setList([
      {
        attribute: "",
        field: "",
        operator: "",
        value: "",
        conditionType: "",
      },
    ]);
  }

  const deleteBlock = (index: number) => {
    if (list.length > 1) {
      setList(list.filter((_, i) => i !== index));
    } else {
      setErrorMessage("Minimum 1 filter is required");
    }
  };


  useEffect(() => {
    setErrorMessage("");
  }, [list]);

  return (
    <div className="flex flex-col justify-end items-end">
      {list.map((item, index) => (
          <Filter deleteBlock={deleteBlock} filter={item} index={index}/>
      ))}
      <div className="flex justify-end items-center gap-5">
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <Button
          onClick={addBlock}
          className="p-2 px-3 bg-third rounded-[8px] text-white hover:bg-fourth hover:text-black"
        >
          Add Filter
        </Button>
      </div>
    </div>
  );
};

export default Filters;
