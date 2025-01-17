import DeleteIcon from "@/app/assets/icons/DeleteIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { LegendDetailsDataList } from "../../types/configurationSave";

interface BlockManagerProps {
  list: LegendDetailsDataList[];
  setList: React.Dispatch<React.SetStateAction<LegendDetailsDataList[]>>;
}

const LegendsList: React.FC<BlockManagerProps> = ({ list, setList }) => {

  const [errorMessage, setErrorMessage] = useState<string>("");
  const addBlock = () => {
    if (list.length < 6) {
      setList([...list, { legendName: "", enable: true }]);
    }else{
      setErrorMessage("Maximum 6 legends are allowed");
    }
  };

  if(list.length === 0){

    setList([ { legendName: "", enable: true }]);
  }



  const deleteBlock = (index: number) => {
    if (list.length > 1) {
      setList(list.filter((_, i) => i !== index));
    }else{
      setErrorMessage("Minimum 1 legend is required");
    }
  };

  useEffect(()=>{
    setErrorMessage("");
  },[list])

  return (
    <div>
      {list.map((item, index) => (
        
        <div className="flex justify-between items-center w-full border mb-2 rounded-[8px] p-2">
        <div className="flex items-center w-11/12 border-r px-4">
            <p className="text-textsecondary text-[14px] w-1/5 font-semibold p-1">Legend {index+1}</p>
          <Input
            type="text"
            value={item.legendName}
            placeholder="Enter Legend..."
            className="w-4/5"
            onChange={(e) =>
              setList(
                list.map((block, i) => (i === index ? { ...block, legendName: e.target.value } : block))
              )
            }
          />
          </div>

          {/* Delete Icon logic */}
            
            <div className={`flex items-center justify-center hover:bg-fourth mr-2 p-3 w-1/12 rounded-full ${list.length === 1 && "cursor-not-allowed"}`} onClick={() => deleteBlock(index)} >
                {list.length <= 1 ? <DeleteIcon stroke="gray"/> : <DeleteIcon />}
            </div>
        </div>
      ))}
      <div className="flex items-center ml-4 gap-5">
      <Button onClick={addBlock} className="p-2 px-3 bg-third rounded-[8px] text-white hover:bg-fourth hover:text-black">
        Add Block
      </Button>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LegendsList;
