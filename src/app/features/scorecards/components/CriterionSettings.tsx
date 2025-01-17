import AddIcon from "@/app/assets/icons/AddIcon";
import FolderIcon from "@/app/assets/icons/FolderIcon";
import PresetIcon from "@/app/assets/icons/PresetIcon";
import UploadIcon from "@/app/assets/icons/UploadIcon";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import ParametersSettings from "./criterionComponents/ParametersSettings";
import { useAppSelector } from "@/store/hooks";



const CriterionSettings = ({ setDidFormChange }: { setDidFormChange: (update: boolean) => void }) => {
    useEffect(() => {
        console.log(setDidFormChange)
    },[])
    
    const parameterDetailsList = useAppSelector(state => state?.configQA?.parameterDetailsList);
    const [criterionType, setCriterionType] = useState<"scratch" | "preset" | "file" | null>(null);
    if (parameterDetailsList.length === 0 && criterionType === null) {
        return (
            <div className="h-[69vh] border rounded-[12px] p-6 bg-primary w-full flex flex-col  justify-center items-center">
                <FolderIcon />
                <h1 className="text-2xl text-textsecondary font-semibold pt-4">Begin creating your criterion for QA Assessment</h1>
                <p className="text-sm py-2 text-textsecondary">Choose from the options below to start:</p>
                <div className="flex justify-center items-center w-full gap-4 pt-3">
                    <Card onClick={()=>setCriterionType("scratch")} className="w-1/5 h-24 cursor-pointer hover:bg-secondary flex flex-col justify-center items-center text-textsecondary text-sm gap-2">
                        <AddIcon />
                        Create from scratch
                    </Card>
                    <Card onClick={()=>setCriterionType("preset")} className="w-1/5 h-24 cursor-pointer hover:bg-secondary flex flex-col justify-center items-center text-textsecondary text-sm gap-2">
                        <PresetIcon />
                        Use presets
                    </Card>
                    <Card className="w-1/5 h-24 cursor-pointer hover:bg-secondary flex flex-col justify-center items-center text-textsecondary text-sm gap-2">
                        <UploadIcon />
                        Upload from file
                    </Card>
                </div>
            </div>
        )
    }
    if (criterionType === "preset") {
        return (
            <div>
                <h1>Preset</h1>
            </div>
        )
    }
    return (<ParametersSettings />)
}

export default CriterionSettings