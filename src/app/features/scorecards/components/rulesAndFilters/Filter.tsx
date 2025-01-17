
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import DropdownMenuIcon from "@/app/assets/icons/DropdownMenuIcon";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import DeleteIcon from "@/app/assets/icons/DeleteIcon";
import { Input } from "@/components/ui/input";
const Filter = ({ deleteBlock, filter, index }: { deleteBlock: (update: number) => void, filter: any, index: number }) => {


    const [condition, setCondition] = useState<string>(filter.condition || "Condition");
    const [attribute, setAttribute] = useState<string>("Select Attribute");
    const [field, setField] = useState<string>("")
    const [operator, setOperator] = useState("")
    const [value, setValue] = useState<any>("")


    const [attributeName, setAttributeName] = useState<string>("Select Attribute")
    const [operatorName, setOperatorName] = useState("Select Operator")

    useEffect(() => {
        setOperator("")
        setValue("")
    }, [attributeName])
    return (
        <>
            <div className={`flex justify-between items-center w-[90%] first:w-full border mb-2 rounded-[8px] p-1 ${condition==="OR" && "w-[89%]"}`}>
                <div className="flex items-center gap-2">
                    <div className="flex items-center px-2 border-r">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className={`rounded-[8px] ${condition === "AND" && "border-orange-400"} ${condition === "OR" && "border-green-400"}`}>{condition}<DropdownMenuIcon isOpen={false} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="rounded-[8px]">
                                <DropdownMenuItem onClick={() => setCondition("AND")} className="flex justify-center">AND</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setCondition("OR")} className="flex justify-center">OR</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-textsecondary text-xl first-line:items-baseline">If</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className={`rounded-[8px] text-[12px] text-textsecondary`}>{attributeName}<DropdownMenuIcon isOpen={false} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="rounded-[8px]" >
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="w-full" >
                                        <span>Ticket</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("CREATOR_ID");
                                            setAttributeName("Ticket > Creator ID")
                                        }}>
                                            <span>Creator ID</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("ASSIGNEE_ID");
                                            setAttributeName("Ticket > Assignee ID")
                                        }}>
                                            <span>Assignee ID</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("PRIORITY");
                                            setAttributeName("Ticket > Priority")
                                        }}>
                                            <span>Priority</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("REOPENED_COUNT");
                                            setAttributeName("Ticket > Reopened Count")
                                        }}>
                                            <span>Reopened Count</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("CREATED_IN_MINUTES");
                                            setAttributeName("Ticket > Created in min")
                                        }}>
                                            <span>Created in min</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("STATUS");
                                            setAttributeName("Ticket > Status")
                                        }}>
                                            <span>Status</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("SUB_STATUS");
                                            setAttributeName("Ticket > Sub Status")
                                        }}>
                                            <span>Sub Status</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("TICKET");
                                            setField("FOLDER");
                                            setAttributeName("Ticket > Folder")
                                        }}>
                                            <span>Folder</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="w-full" onClick={() => setAttribute("AGENT")}>
                                        <span>Agent</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("AGENT");
                                            setField("NAME");
                                            setAttributeName("Agent > Name")
                                        }}>
                                            <span>Agent Name</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("AGENT");
                                            setField("ID");
                                            setAttributeName("Agent > ID")
                                        }}>
                                            <span>Agent ID</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setAttribute("AGENT");
                                            setField("TENURE");
                                            setAttributeName("Agent > Tenure")
                                        }}>
                                            <span>Tenure</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        {(attribute === "TICKET" || attribute === "AGENT") &&
                            (field === "CREATOR_ID" || field === "ASSIGNEE_ID" || field === "STATUS" || field === "SUB_STATUS" || field === "PRIORITY" || field === "NAME" || field === "ID") && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className={`rounded-[8px] text-[12px] text-textsecondary`}>{operatorName}<DropdownMenuIcon isOpen={false} /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => {
                                            setOperator("EQUAL");
                                            setOperatorName("Equal to")
                                        }}>is Equal to</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setOperator("NOT_EQUAL");
                                            setOperatorName("Not Equal to")
                                        }}>is Not Equal to</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        {(attribute === "TICKET" || attribute === "AGENT") &&
                            (field === "REOPENED_COUNT" || field === "CREATED_IN_MINUTES" || field === "TENURE") && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className={`rounded-[8px] text-[12px] text-textsecondary`}>{operatorName}<DropdownMenuIcon isOpen={false} /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => {
                                            setOperator("EQUAL");
                                            setOperatorName("Equal to")
                                        }}>is Equal to</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setOperator("NOT_EQUAL");
                                            setOperatorName("Not Equal to")
                                        }}>is Not Equal to</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setOperator("GREATER");
                                            setOperatorName("Greater than")
                                        }}>is Greater than</DropdownMenuItem>

                                        <DropdownMenuItem onClick={() => {
                                            setOperator("LESS");
                                            setOperatorName("Less than")
                                        }}>is Less than</DropdownMenuItem>


                                        <DropdownMenuItem onClick={() => {
                                            setOperator("GREATER_OR_EQUAL");
                                            setOperatorName("Greater/Equal")
                                        }}>is Greater or Equal</DropdownMenuItem>

                                        <DropdownMenuItem onClick={() => {
                                            setOperator("LESS_OR_EQUAL");
                                            setOperatorName("Less/Equal")
                                        }}>is Less or Equal</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                    </div>
                    <div>
                        {attribute === "TICKET" && field === "CREATOR_ID" && operator && (
                            <><Input className="w-full" placeholder="Enter Creator ID" value={value} onChange={(e) => setValue(e.currentTarget.value)} /></>
                        )}
                        {attribute === "TICKET" && field === "ASSIGNEE_ID" && operator && (
                            <><Input className="w-full" placeholder="Enter Assignee ID" value={value} onChange={(e) => setValue(e.currentTarget.value)} /></>
                        )}
                        {attribute === "AGENT" && field === "ID" && operator && (
                            <><Input className="w-full" placeholder="Enter Agent ID" value={value} onChange={(e) => setValue(e.currentTarget.value)} /></>
                        )}

                        {attribute === "AGENT" && field === "NAME" && operator && (
                            <>
                            {/* FETCH API HERE */}
                            </>
                        )}

                        {attribute === "AGENT" && field === "TENURE" && operator && (
                            <><Input type="number" className="w-full" placeholder="Enter time in Months..." value={value} onChange={(e) => setValue(e.currentTarget.value)} /></>
                        )}
                    </div>
                </div>

                {/* Delete Icon logic */}
                <div className="border-l pl-2 ">
                    <div className={`flex items-center justify-center hover:bg-fourth mr-2 p-3 rounded-full `} onClick={() => deleteBlock(index)} >
                        <DeleteIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter