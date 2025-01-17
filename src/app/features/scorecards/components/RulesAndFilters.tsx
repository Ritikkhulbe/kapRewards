import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Rules from "./rulesAndFilters/Rules"


const RulesAndFilters = ({ setDidFormChange }: { setDidFormChange: (update: boolean) => void }) => {
    useEffect(() => {
        setDidFormChange(false)
    }, [])
    return (
        <>
            <div className={`border rounded-xl bg-primary px-2`}>
                {/* Render Header */}

                <h1 className={`text-2xl p-3 text-textsecondary pl-5 flex justify-between border-b font-semibold mb-2`}>
                    Rules & Filters
                    <Button className="bg-third text-white rounded-[8px]  hover:text-textsecondary">+ Add Rule</Button>
                </h1>
                <div className={` rounded-xl bg-primary mb-2 w-full`}>
                    {/* Render Header */}
                    <Rules />
                    <Rules/>
                </div>
            </div>
        </>
    )
}

export default RulesAndFilters