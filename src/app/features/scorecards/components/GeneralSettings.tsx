import AutoQAIcon from "@/app/assets/icons/AutoQAIcon"
import HybridQAIcon from "@/app/assets/icons/HybridQAIcon"
import SmallChatIcon from "@/app/assets/icons/SmallChatIcon"
import SmallEmailIcon from "@/app/assets/icons/SmallEmailIcon"
import SmallPhoneIcon from "@/app/assets/icons/SmallPhoneIcon"
import SmartManualIcon from "@/app/assets/icons/SmartManualIcon"
import { CheckboxButton, CheckboxForm } from "@/app/genericComponents/forms/CheckboxForm"
import FormLayout, { FormHeader } from "@/app/genericComponents/forms/FormLayout"
import FormList, { FormTab, TabDescription, TabTitle } from "@/app/genericComponents/forms/FormList"
import { RadioButton, RadioForm } from "@/app/genericComponents/forms/RadioForm"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
import SearchableDropdown from "../../../genericComponents/forms/SearchableDropdown"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { areArraysEqual, ArrayToSearchMapper, searchToArrayMapper } from "../util"
import { generalAction } from "../store/actions"
import { useDesignation } from "../hooks/useDesignations"


const GeneralSettings = ({ setDidFormChange, onSave, setOnSave }: { setDidFormChange: (update: boolean) => void, onSave: boolean, setOnSave: (update: boolean) => void }) => {

    const { designations } = useDesignation();
    const [formRequired, setFormRequired] = useState<boolean>(false);
    // const dispatch = useAppDispatch();

    const title = useAppSelector(state => state?.configQA?.general?.title);
    const description = useAppSelector(state => state?.configQA?.general?.description);
    const type = useAppSelector(state => state?.configQA?.general?.type);
    const QAType = useAppSelector(state => state?.configQA?.general?.QAType);
    const ManualQAAuditor = useAppSelector(state => state?.configQA?.general?.ManualQAAuditor);
    const AISuggestResponse = useAppSelector(state => state?.configQA?.general?.AISuggestResponse);
    const AutoQAReviewer = useAppSelector(state => state?.configQA?.general?.AutoQAReviewer);
    const isRebuttalEnable = useAppSelector(state => state?.configQA?.general?.isRebuttal);

    const [scorecardTitle, setScorecardTitle] = useState<string>(title || "");

    const [scorecardDescription, setScorecardDescription] = useState<string>(description || "");

    const [sourceType, setSourceType] = useState<string>(type || "");

    const [qaType, setQaType] = useState<string[]>(QAType || []);

    const [manualQAReviewer, setManualQAReviewer] = useState<any[]>(ManualQAAuditor || []);

    const [AIOption, setAIOption] = useState<string>(AISuggestResponse || "");

    const [autoQAReviewer, setAutoQAReviewer] = useState<any[]>(AutoQAReviewer || []);

    const [isRebuttal, setIsRebuttal] = useState<boolean>(isRebuttalEnable || false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleSaveGeneral = () => {


            dispatch(generalAction({
                title: scorecardTitle,
                description: scorecardDescription,
                type: sourceType,
                QAType: qaType,
                ManualQAAuditor: searchToArrayMapper(manualQAReviewer),
                AISuggestResponse: AIOption,
                AutoQAReviewer: searchToArrayMapper(autoQAReviewer),
                isRebuttal
            }))
        }
        if (onSave) {
            handleSaveGeneral();
                setOnSave(false);
                setDidFormChange(false);
        }
    }, [onSave])

    useEffect(() => {
        if (ManualQAAuditor) setManualQAReviewer(ArrayToSearchMapper(ManualQAAuditor));
        if (AutoQAReviewer) setAutoQAReviewer(ArrayToSearchMapper(AutoQAReviewer));
        setQaType(QAType);
        setAIOption(AISuggestResponse);
        setSourceType(type);
        setScorecardTitle(title);
        setScorecardDescription(description);
        setIsRebuttal(isRebuttalEnable);
    }, [ManualQAAuditor, AutoQAReviewer, QAType, AISuggestResponse, type, title, description, isRebuttalEnable]);

    useEffect(() => {
        if (ManualQAAuditor && AutoQAReviewer) {
            if (scorecardTitle !== title || scorecardDescription !== description || sourceType !== type || qaType !== QAType || !areArraysEqual(manualQAReviewer, ArrayToSearchMapper(ManualQAAuditor)) || AIOption !== AISuggestResponse || !areArraysEqual(autoQAReviewer, ArrayToSearchMapper(AutoQAReviewer)) || isRebuttal !== isRebuttalEnable) {

                setDidFormChange(true);
            } else {
                setDidFormChange(false);
            }
        }
        setFormRequired(false);
    }, [scorecardTitle, scorecardDescription, sourceType, qaType, manualQAReviewer, AIOption, autoQAReviewer, isRebuttal])





    return (
        <>
            <FormLayout>
                <FormHeader>General Settings</FormHeader>
                <FormList>
                    <FormTab>
                        <TabTitle>Scorecard Title</TabTitle>
                        <TabDescription>The title or label for this scorecard</TabDescription>
                        <Input placeholder="Enter Scorecard Title" value={scorecardTitle} onChange={(e) => setScorecardTitle(e.currentTarget.value)} className={`w-1/2  ${formRequired ? "border-red-500" : ""}`} />
                    </FormTab>
                    <FormTab>
                        <TabTitle>Scorecard Description</TabTitle>
                        <TabDescription>The description for this scorecard</TabDescription>
                        <textarea placeholder="Enter Scorecard Description" value={scorecardDescription} onChange={(e) => setScorecardDescription(e.currentTarget.value)} className={`w-1/2 h-24 border px-4 py-3 text-[14px] rounded-[8px] placeholder:text-textsecondary-light focus:outline-none focus:ring-2 focus:ring-third-light ${formRequired ? "border-red-500" : ""}`} />
                    </FormTab>
                    <FormTab className="w-full">
                        <TabTitle>Source Type</TabTitle>
                        <TabDescription>The source type for this scorecard</TabDescription>
                        <RadioForm value={sourceType} setValue={setSourceType}>
                            <RadioButton value={"I"}><SmallChatIcon /> Chat</RadioButton>
                            <RadioButton value={"E"}><SmallEmailIcon /> Email</RadioButton>
                            <RadioButton value={"P"}><SmallPhoneIcon /> Phone</RadioButton>
                        </RadioForm>
                    </FormTab>
                    <FormTab>
                        <TabTitle>QA Type</TabTitle>
                        <TabDescription>The type for QA evaluation being performed</TabDescription>

                        <CheckboxForm values={qaType} setValues={setQaType}>
                            <CheckboxButton value={"AUTO_QA"}>
                                <div className="flex gap-2">
                                    <AutoQAIcon />
                                    <div className="h-16">
                                        <h1 className="text-[14px] font-semibold text-textsecondary">Auto QA</h1>
                                        <p className="font-normal text-[10px] text-textsecondary-light">Automated quality assessment based on pre-set rules</p>
                                    </div>
                                </div>
                            </CheckboxButton>
                            <CheckboxButton value={"SMART_MANUAL_QA"}>
                                <div className="flex gap-2">
                                    <SmartManualIcon />
                                    <div className="h-16">
                                        <h1 className="text-[14px] font-semibold text-textsecondary">Smart Manual QA</h1>
                                        <p className="font-normal text-[10px] text-textsecondary-light">Manual quality assessment and review</p>
                                    </div>
                                </div>
                            </CheckboxButton>
                            <CheckboxButton value={"HYBRID_QA"}>
                                <div className="flex gap-2">
                                    <HybridQAIcon />
                                    <div className="h-16">
                                        <h1 className="text-[14px] font-semibold  text-textsecondary">Hybrid QA</h1>
                                        <p className="font-normal text-[10px] text-textsecondary-light">Combines automated evaluation with manual review</p>
                                    </div>
                                </div>
                            </CheckboxButton>
                        </CheckboxForm>
                    </FormTab>
                    <FormTab>
                        <TabTitle>Manual QA Auditor</TabTitle>
                        <TabDescription>These users can manually audit conversations</TabDescription>
                        <SearchableDropdown
                            data={designations}
                            selectedArray={manualQAReviewer}
                            setArray={setManualQAReviewer}
                            labelKey="groupName"
                            idKey="id"
                            placeholder="Search Manual QA Auditor..."
                        />
                    </FormTab>
                    <FormTab>
                        <TabTitle>AI Suggest Response</TabTitle>
                        <TabDescription>Choose how AI suggests responses for Smart Manual QA</TabDescription>
                        <RadioForm value={AIOption} setValue={setAIOption}>
                            <RadioButton value={"AUTOMATIC"}>Automatic</RadioButton>
                            <RadioButton value={"ON_DEMAND"}>On-Demand</RadioButton>
                        </RadioForm>
                    </FormTab>

                    <FormTab>
                        <TabTitle>Auto QA Reviewer</TabTitle>
                        <TabDescription>These users can review and edit automatically exaluated conversations</TabDescription>
                        <SearchableDropdown
                            data={designations}
                            selectedArray={autoQAReviewer}
                            setArray={setAutoQAReviewer}
                            labelKey="groupName"
                            idKey="id"
                            placeholder="Search Auto QA Reviewer..."
                        />
                    </FormTab>

                    <FormTab>
                        <TabTitle>Rebuttal</TabTitle>
                        <TabDescription>Enable this to allow the process of challenging a QA evalutaion</TabDescription>
                        <Switch checked={isRebuttal} onCheckedChange={() => setIsRebuttal(prev => !prev)} />
                    </FormTab>

                </FormList>
            </FormLayout>
        </>
    )
}

export default GeneralSettings