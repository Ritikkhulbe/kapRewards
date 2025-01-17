import { RadioButton, RadioForm } from "@/app/genericComponents/forms/RadioForm"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Filters from "./Filters";

const Rules = () => {

    const [ruleName, setRuleName] = useState("");
    const [allocation, setAllocation] = useState("");
    const [allocationValue, setAllocationValue] = useState<number>();
    const [filter, setFilter] = useState<any>([]);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded-[8px] mb-2">
            <div onClick={()=>setIsOpen(prev=>!prev)} className="w-full">
                <h1 className={`text-xl p-3 text-textsecondary-light pl-5  ${isOpen && "border-b"} font-semibold`}>
                    {ruleName || "Untitled Rule"}
                </h1>
            </div>
            {/* Render Form List */}
            <div className={`px-4 transition-all duration-700 ease-out overflow-hidden ${isOpen ? "h-auto opacity-100 py-3 px-5" : "h-0 opacity-0"}`}>
                <div className={"p-4 w-full flex border-b last:border-none gap-5 py-3  "}>
                    <div className="w-1/2">
                        <div className="font-bold text-textsecondary text-[10px]">
                            <h2 className={` font-bold text-textsecondary text-[14px] mt-0 `}>Rule Name</h2>
                        </div>
                        <div className="text-[12px] text-textsecondary-light">

                            <p className={`text-[12px] text-gray-500`}>The title or Label for the rule</p>

                        </div>
                    </div>
                    <div className="flex w-full items-center">
                        <Input placeholder="Enter Rule Name" value={ruleName} onChange={(e) => setRuleName(e.currentTarget.value)} />
                    </div>
                </div>

                <div className={"p-4 w-full flex border-b last:border-none gap-5 py-3  "}>
                    <div className="w-1/2">
                        <div className="font-bold text-textsecondary text-[10px]">
                            <h2 className={` font-bold text-textsecondary text-[14px] mt-0 `}>Allocation</h2>
                        </div>
                        <div className="text-[12px] text-textsecondary-light">

                            <p className={`text-[12px] text-gray-500`}>The amount of tickets assigned for the rule</p>

                        </div>
                    </div>
                    <div className="flex w-full items-center">
                        <RadioForm value={allocation} setValue={setAllocation}>
                            <RadioButton value={"ALL"} >
                                <div className="flex justify-between w-full items-center">
                                    All
                                    <span className="h-9 block"></span>
                                </div>
                            </RadioButton>
                            <RadioButton value={"FIXED"}>
                                <div className="flex justify-between w-full items-center">
                                    Fixed
                                    {allocation === "FIXED" && <Input type="number" className="w-3/5 h-4" value={allocationValue} onChange={(e) => setAllocationValue(Number(e.currentTarget.value))} />}
                                </div>
                            </RadioButton>
                            <RadioButton value={"VARIABLE"}>
                                <div className="flex justify-between w-full items-center">
                                    Variable
                                    <div className="w-2/3 flex items-center justify-end">
                                        {allocation === "VARIABLE" && <><Input type="number" className="w-4/6 h-4 p-0" value={allocationValue} onChange={(e) => setAllocationValue(Number(e.currentTarget.value))} />%</>}
                                    </div>
                                </div>
                            </RadioButton>
                        </RadioForm>
                    </div>
                </div>

                <div className={"p-4 w-full flex border-none gap-5 py-2  "}>
                    <div className="w-1/2">
                        <div className="font-bold text-textsecondary text-[10px]">
                            <h2 className={` font-bold text-textsecondary text-[14px] mt-0 `}>Filters</h2>
                        </div>
                        <div className="text-[12px] text-textsecondary-light">

                            <p className={`text-[12px] text-gray-500`}>Filters for tickets for this rule</p>

                        </div>
                    </div>
                    <div className="flex w-full items-center">
                    </div>

                </div>
                <div className="px-5 mb-2">
                    <Filters list={filter} setList={setFilter} />
                </div>
            </div>
        </div>
    )
}

export default Rules