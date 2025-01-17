import DropdownMenuIcon from "@/app/assets/icons/DropdownMenuIcon"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

const FilterValuesDropdown = ({ type, setValue }: { type: string, setValue: (update: any) => void }) => {
    if (type === "NAME") {
        return (
            <>

            </>
        )
    }
    if (type === "STATUS") {
        const [status, setStatus] = useState("Select Status")
        return (
            <>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className={`rounded-[8px] text-[12px] text-textsecondary`}>{status}<DropdownMenuIcon isOpen={false} /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <Button className="w-full text-textsecondary text-[12px]" onClick={()=>{setStatus("Active"); setValue("ACTIVE")}}>Active</Button>
                        <Button className="w-full text-textsecondary text-[12px]" onClick={()=>{setStatus("Pending"); setValue("PENDING")}}>Pending</Button>
                        <Button className="w-full text-textsecondary text-[12px]" onClick={()=>{setStatus("Completed"); setValue("COMPLETED")}}>Completed</Button>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
        )
    }
    if (type === "SUB_STATUS") {
        const [status, setStatus] = useState("Select Status")
        return (
            <>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className={`rounded-[8px] text-[12px] text-textsecondary`}>{status}<DropdownMenuIcon isOpen={false} /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <Button className="w-full text-textsecondary text-[12px]" onClick={()=>{setStatus("Active over 2 hours"); setValue("ACTIVE")}}>Active</Button>
                        <Button className="w-full text-textsecondary text-[12px]" onClick={()=>{setStatus("Pending"); setValue("PENDING")}}>Pending</Button>
                        <Button className="w-full text-textsecondary text-[12px]" onClick={()=>{setStatus("Completed"); setValue("COMPLETED")}}>Completed</Button>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
        )
    }
    if (type === "PRIORITY") {
        return (
            <>

            </>
        )
    }

    if (type === "FOLDER") {
        return (
            <>

            </>
        )
    }

    return (
        <div>FilterValuesDropdown</div>
    )
}

export default FilterValuesDropdown