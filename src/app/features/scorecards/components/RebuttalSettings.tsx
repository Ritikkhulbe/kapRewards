import AutoQAIcon from "@/app/assets/icons/AutoQAIcon"
import HybridQAIcon from "@/app/assets/icons/HybridQAIcon"
import SmartManualIcon from "@/app/assets/icons/SmartManualIcon"
import { CheckboxButton, CheckboxForm } from "@/app/genericComponents/forms/CheckboxForm"
import FormLayout, { FormHeader } from "@/app/genericComponents/forms/FormLayout"
import FormList, { FormTab, TabDescription, TabTitle } from "@/app/genericComponents/forms/FormList"
import SelectLevelX from "@/app/genericComponents/forms/SelectLevelX"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { areArraysEqual, ArrayToSearchMapper, mapArrayToLevels } from "../util"
import { generalQaTypeAction, rebuttalAction } from "../store/actions"
import { useDesignation } from "../hooks/useDesignations"

const designationLabelKey = "groupName"

const RebuttalSettings = ({ setDidFormChange, onSave, setOnSave }: { setDidFormChange: (update: boolean) => void, onSave: boolean, setOnSave: (update: boolean) => void }) => {

    const { designations } = useDesignation();

    const [rebuttalQaType, setRebuttalQaType] = useState<string[]>([]);
    const [selectedAutoAccept, setSelectedAutoAccept] = useState<boolean>(false);
    const [autoAcceptScore, setAutoAcceptScore] = useState<number>(1);
    const [levels, setLevels] = useState<any[][]>([[]]);

    const RebuttalQAType = useAppSelector(state => state?.configQA?.general?.QAType);
    const AutoAccept = useAppSelector(state => state?.configQA?.rebuttal?.autoAccept);
    const AcceptTime = useAppSelector(state => state?.configQA?.rebuttal?.acceptTime);
    const RebuttalLevels = useAppSelector(state => state?.configQA?.rebuttal?.rebuttalLevel);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(RebuttalQAType) setRebuttalQaType((RebuttalQAType));
        setSelectedAutoAccept(AutoAccept);
        if(AcceptTime) setAutoAcceptScore(AcceptTime);
        if(RebuttalLevels) setLevels(Object.values(RebuttalLevels).map((level:any)=>ArrayToSearchMapper(level)));
    },[RebuttalQAType,AutoAccept, AcceptTime, RebuttalLevels])


    useEffect(()=>{
        if(levels.length === 0){
            setLevels([[]]);
        }
    },[levels])
    useEffect(()=>{
        console.log(JSON.stringify(mapArrayToLevels(levels.filter(level => level.length > 0))), " : ", JSON.stringify(RebuttalLevels))
        console.log(!areArraysEqual(rebuttalQaType,RebuttalQAType), selectedAutoAccept !== AutoAccept, autoAcceptScore !== AcceptTime, JSON.stringify(mapArrayToLevels(levels.filter(level => level.length > 0))) !== JSON.stringify(RebuttalLevels))
        if(!areArraysEqual(rebuttalQaType,RebuttalQAType) || selectedAutoAccept !== AutoAccept || autoAcceptScore !== AcceptTime || (JSON.stringify(mapArrayToLevels(levels.filter(level => level.length > 0))) !== JSON.stringify(RebuttalLevels)))
            setDidFormChange(true);
        else
            setDidFormChange(false);
    },[rebuttalQaType, selectedAutoAccept, autoAcceptScore, levels])



    useEffect(() => {
        const saveChanges = () => {
            dispatch(rebuttalAction({
                autoAccept: selectedAutoAccept,
                acceptTime: autoAcceptScore,
                rebuttalLevel: mapArrayToLevels(levels.filter(level => level.length > 0))
            }))
            dispatch(generalQaTypeAction(
                rebuttalQaType
            ))
        }

        if(onSave){
            saveChanges();
            setOnSave(false);
        }
    },[onSave])

    return (
        <FormLayout>
            <FormHeader>
                Rebuttal
            </FormHeader>
            <FormList>
                <FormTab>
                    <TabTitle>Evaluation Type</TabTitle>
                    <TabDescription>Choose evaluation type to enable rebuttal processing for:</TabDescription>
                    <CheckboxForm values={rebuttalQaType} setValues={setRebuttalQaType}>
                        <CheckboxButton value={"AUTO_QA"} className="items-center">
                            <div className="flex items-center gap-2 ">
                                <AutoQAIcon />
                                <h1 className="text-[12px] font-semibold text-textsecondary">Auto QA</h1>
                            </div>
                        </CheckboxButton>
                        <CheckboxButton value={"SMART_MANUAL_QA"} className="items-center">
                            <div className="flex items-center gap-2">
                                <SmartManualIcon />
                                <h1 className="text-[14px] font-semibold text-textsecondary">Smart Manual QA</h1>

                            </div>
                        </CheckboxButton>
                        <CheckboxButton value={"HYBRID_QA"} className="items-center">
                            <div className="flex items-center gap-2 ">
                                <HybridQAIcon />
                                <h1 className="text-[14px] font-semibold text-textsecondary">Hybrid QA</h1>

                            </div>
                        </CheckboxButton>
                    </CheckboxForm>
                </FormTab>
                <FormTab>
                    <TabTitle>Auto-Accept Score</TabTitle>
                    <TabDescription>Automatically accept scores after the specified number of hours</TabDescription>
                    <div className="transition-all fade-in-40">
                        <Switch checked={selectedAutoAccept} onCheckedChange={() => 
                            setSelectedAutoAccept(prev => !prev)} />
                        <p
                            className={`gap-2 text-sm text-textsecondary font-semibold items-center transition-all duration-300 ease-in-out ${selectedAutoAccept ? "flex opacity-100 " : "hidden opacity-0 "
                                }`}
                        >
                            Accept score automatically after
                            <Input type="number" value={autoAcceptScore} onChange={(e) => { if (Number(e.currentTarget.value) >= 0) setAutoAcceptScore(Number(e.currentTarget.value)) }} placeholder="" className="w-1/6" /> hours
                        </p>

                    </div>
                </FormTab>
                <FormTab>
                    <TabTitle>Set Rebuttal Levels</TabTitle>
                    <TabDescription>Define how many times a score can be challenged in the rebuttal process</TabDescription>
                    <SelectLevelX
                        data={designations}
                        levels={levels}
                        setLevels={setLevels}
                        labelKey={designationLabelKey}
                        idKey="id"
                        placeholder="Select a designation..."
                    />
                </FormTab>
            </FormList>
        </FormLayout>
    )
}

export default RebuttalSettings