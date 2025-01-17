import ConfigurationIcons from "@/app/assets/icons/ConfigurationIcons"
import CriterionIcon from "@/app/assets/icons/smallIcons/CriterionIcon"
import GeneralSettingsIcon from "@/app/assets/icons/smallIcons/GeneralSettingsIcon"
import RebuttalIcon from "@/app/assets/icons/smallIcons/RebuttalIcon"
import RulesAndFiltersIcon from "@/app/assets/icons/smallIcons/RulesAndFiltersIcon"
import GenericLayout, { GenericLayoutDescription, GenericLayoutHeader } from "@/app/genericComponents/GenericLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralSettings from "./components/GeneralSettings"
import RebuttalSettings from "./components/RebuttalSettings"
import configQASlice from "./store/slice/configQASlice"
import withReducer from "@/app/utils/withReducer"
import CriterionSettings from "./components/CriterionSettings"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RulesAndFilters from "./components/RulesAndFilters"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { generalAction, parameterAction, rebuttalAction } from "./store/actions"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { withPublicUrl } from "@/util"
import { getParameterDetailsList } from "./fetcher/api"
import { fetchConfiguration } from "./fetcher"

const ConfigurationSettings = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const [showDialog, setShowDialog] = useState(false);
    const [didFormChange, setDidFormChange] = useState(false);
    const [onSave, setOnSave] = useState(false);
    const isRebuttal = useAppSelector(state => state?.configQA?.general?.isRebuttal);


    useEffect(() => {

        if (id) {
            const fetchConfigDetails = async (id: string) => {

                const response = await fetchConfiguration(Number(id))

                dispatch(generalAction({
                    title: response.title,
                    description: response.description,
                    type: response.sourceType,
                    QAType: response.qaType,
                    ManualQAAuditor: response.manualQaAuditor,
                    AISuggestResponse: response.aiSuggestResponse,
                    AutoQAReviewer: response.autoQaReviewer,
                    isRebuttal: response.rebuttalEnabled
                }))

                dispatch(rebuttalAction({
                    autoAccept: response.rebuttal.autoAcceptScore,
                    acceptTime: response.rebuttal.autoAcceptAfterHours,
                    rebuttalLevel: response.rebuttal.levelAndEmployees
                }))

                dispatch(parameterAction(getParameterDetailsList()))
            }

            fetchConfigDetails(id);
        }
    }, [id])


    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };


    const changeTabs = () => {
        if (didFormChange)
            setShowDialog(true);
    }
    const tabstriggerstyle = " rounded-[6px] text-textsecondary bg-fourth data-[state=active]:bg-primary text-xs gap-1 font-semibold data-[state=active]:text-black"

    return (
        <div onMouseLeave={changeTabs}>
            <Breadcrumb className="flex pt-4 pl-6">
                <BreadcrumbList>
                    <BreadcrumbItem className="text-textsecondary-light hover:text-textsecondary font-normal">
                        <BreadcrumbLink href={withPublicUrl("/scorecard")}>Scorecards</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem className="font-semibold text-textsecondary">
                        Quality Analysis Configuration
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <GenericLayout className="mt-4">
                <GenericLayoutHeader className="flex items-center gap-2"> <ConfigurationIcons id={2} /> QA Configuration</GenericLayoutHeader>
                <GenericLayoutDescription className="pl-1 m-0 p-0">Your scorecard description goes here</GenericLayoutDescription>
                <Tabs defaultValue={"tab1"} className="mt-3 " onValueChange={handleTabChange} >
                    <div className="flex justify-between items-center">
                        <TabsList className="border rounded-[8px] mb-2" onMouseEnter={changeTabs}>
                            <TabsTrigger value="tab1" className={tabstriggerstyle + " rounded-l-[8px] pl-2 "}>
                                <GeneralSettingsIcon isActive={activeTab === "tab1"} />General Settings
                            </TabsTrigger>
                            <TabsTrigger value="tab2" className={tabstriggerstyle}>
                                <RulesAndFiltersIcon isActive={activeTab === "tab2"} />Rules and Filters
                            </TabsTrigger>
                            <TabsTrigger value="tab3" className={tabstriggerstyle}>
                                <CriterionIcon isActive={activeTab === "tab3"} />Criterion
                            </TabsTrigger>
                            <TabsTrigger value="tab4" className={tabstriggerstyle + ` rounded-r-[8px] ${!isRebuttal ? "cursor-not-allowed" : ""}`} disabled={!isRebuttal} >
                                <RebuttalIcon isActive={activeTab === "tab4"} />Rebuttal
                            </TabsTrigger>
                        </TabsList>
                        <Button className="bg-third text-white rounded-[8px] hover:text-textsecondary" onClick={e => {
                            e.preventDefault();
                            setOnSave(true);
                        }} >Save changes</Button>
                    </div>

                    <TabsContent value="tab1">
                        <GeneralSettings setDidFormChange={setDidFormChange} onSave={onSave} setOnSave={setOnSave} />
                    </TabsContent>

                    <TabsContent value="tab2">
                        <RulesAndFilters setDidFormChange={setDidFormChange} />
                    </TabsContent>

                    <TabsContent value="tab3">
                        <CriterionSettings setDidFormChange={setDidFormChange} />
                    </TabsContent>

                    <TabsContent value="tab4">
                        <RebuttalSettings setDidFormChange={setDidFormChange} onSave={onSave} setOnSave={setOnSave} />
                    </TabsContent>
                </Tabs>
            </GenericLayout>

            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="px-10">
                    <DialogHeader>
                        <DialogTitle>Unsaved Changes</DialogTitle>
                    </DialogHeader>
                    <p>You have unsaved changes. Do you want to save them before switching?</p>
                    <DialogFooter>
                        <Button className="rounded-[8px] hover:bg-fourth"
                            onClick={e => {
                                e.preventDefault();
                                setDidFormChange(false);
                                setShowDialog(false);
                            }}>Discard</Button>
                        <Button className="bg-third text-white rounded-[8px] hover:text-black" onClick={e => {
                            e.preventDefault();
                            setOnSave(true);
                            setShowDialog(false);
                        }} >Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default withReducer("configQA", configQASlice)(ConfigurationSettings)