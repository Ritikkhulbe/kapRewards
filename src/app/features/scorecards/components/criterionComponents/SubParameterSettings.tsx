import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { setEditing } from "../../store/slice/parameterUtilSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import DropdownMenuIcon from "@/app/assets/icons/DropdownMenuIcon";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import LegendsList from "./LegendsList";
import { addSubParameterAction, updateSubParameterAction } from "../../store/actions";
import { LegendDetailsDataList } from "../../types/configurationSave";
// import DeleteIcon from "@/app/assets/icons/DeleteIcon";

const SubParameterSettings = () => {

    const parameterDetailsList = useAppSelector(state => state?.configQA?.parameterDetailsList);
    const dispatch = useAppDispatch();
    const activeParameter = useAppSelector(state => state?.parameterUtil?.activeParameter);
    const editing = useAppSelector(state => state?.parameterUtil?.editing);
    const [subparametertitle, setSubparametertitle] = useState("");
    const [weightage, setWeightage] = useState("Select an option");
    // const [weightageDetails, setWeightageDetails] = useState<{ name: string; value: number }[]>([{ name: "", value: 0 }])
    const [zeroTolerance, setZeroTolerance] = useState(false);
    const [audio, setAudio] = useState(false);
    const [metaData, setMetaData] = useState(false);
    const [legendList, setLegendList] = useState<LegendDetailsDataList[]>([]);

    const [showGeneralSettings, setShowGeneralSettings] = useState(false);
    const [showLegendsSettings, setShowLegendsSettings] = useState(true);

    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setWeightage(option);
        setIsOpen(false);
    };

    useEffect(() => {
        if (parameterDetailsList[activeParameter]?.subParameterDetailsList[editing]) {
            setSubparametertitle(parameterDetailsList[activeParameter].subParameterDetailsList[editing]?.subCategoryName)
            setWeightage(parameterDetailsList[activeParameter].subParameterDetailsList[editing]?.weightageType)
            setZeroTolerance(parameterDetailsList[activeParameter].subParameterDetailsList[editing]?.zt)
            setAudio(parameterDetailsList[activeParameter].subParameterDetailsList[editing]?.audio)
            setMetaData(parameterDetailsList[activeParameter].subParameterDetailsList[editing]?.metaData)
            setLegendList(parameterDetailsList[activeParameter].subParameterDetailsList[editing]?.legendDetailsDataList)
        }
    }, [parameterDetailsList, activeParameter, editing])

    if (editing === -1) return;
    if (activeParameter === -1 || activeParameter === undefined) return;

    return (
        <div className="right w-full bg-primary border rounded-[12px] h-full overflow-hidden">
            <div className="w-full h-[10vh] flex  m-0 border-b justify-between items-center px-3 ">
                <h1 className="text-xl font-semibold text-textsecondary">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem onClick={() => dispatch(setEditing(-1))} className="cursor-pointer font-normal text-textsecondary-light hover:text-textsecondary text-ellipsis whitespace-nowrap">
                                <p className="w-1/3">
                                    {parameterDetailsList[0].parentCategoryName}
                                </p>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {parameterDetailsList[activeParameter]?.subParameterDetailsList[editing]?.name || "Add Sub Parameter"}
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </h1>
            </div>
            <div className="h-[50vh] overflow-y-scroll overflow-x-hidden px-2">
                <div className=" border mt-2 rounded-[8px]">
                    <div
                        className={`w-full py-5 px-3 flex justify-between items-center  cursor-pointer ${showGeneralSettings ? " " : ""}`}
                        onClick={() => setShowGeneralSettings((prev) => !prev)}
                    >
                        General Settings
                        <DropdownMenuIcon isOpen={showGeneralSettings} />
                    </div>
                    {showGeneralSettings && <div className="mx-3"><Separator /></div>}
                    <div
                        className={`w-full flex flex-col px-3  transition-all duration-300 ease-out overflow-hidden ${showGeneralSettings ? "h-auto opacity-100 py-3 px-5" : "h-0 opacity-0"
                            }`}
                    >

                        <div className="flex flex-col justify-between ">
                            <p className="text-textsecondary text-[14px] font-semibold p-1">Subparameter Title</p>
                            <Input type="text" placeholder="Enter Title" className="w-2/5" value={subparametertitle} onChange={(e) => setSubparametertitle(e.currentTarget.value)} />
                        </div>
                        <div className="flex justify-between flex-col mt-2">
                            <p className="text-textsecondary text-[14px] font-semibold p-1">Weightage</p>
                            <div className="inline-block w-1/2 rounded-[8px] relative">
                                {/* Dropdown Toggle */}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-full bg-white border text-textsecondary-light py-2 text-[14px] px-4 rounded-[8px]  flex justify-between items-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <span>{weightage}</span>
                                    <DropdownMenuIcon isOpen={isOpen} />
                                </button>

                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <ul className="absolute w-full bg-white border border-gray-300 rounded-[8px] mt-1 ">
                                        {["Yes/No", "N/A", "Value"].map((option) => (
                                            <li
                                                key={option}
                                                onClick={() => handleOptionClick(option)}
                                                className={`py-2 px-4 hover:bg-indigo-100 text-[14px] text-textsecondary cursor-pointer ${option === weightage ? "bg-indigo-100" : ""}`}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* {weightage === "Value" && (
                                    <>
                                        {weightageDetails.map((item, index) => (
                                            <div className="flex flex-col gap-2 pt-2">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <Input placeholder="Enter Keyword" className="" value={item.name} onChange={(e) => {
                                                            const arr = weightageDetails;
                                                            arr[index].name = e.currentTarget.value
                                                            setWeightageDetails(arr);
                                                        }} />
                                                        <span className="text-[12px] text-textsecondary w-[90px] px-2">Holds value: </span>
                                                        <Input type="number" placeholder=" Enter value" value={item.value} onChange={(e) => {
                                                            const arr = weightageDetails;
                                                            arr[index].value = Number(e.currentTarget.value);
                                                            setWeightageDetails(arr)
                                                        }} />
                                                        <span className="text-[12px] text-textsecondary ml-3"> pts </span>
                                                    </div>
                                                    <div className="rounded-full p-3 hover:bg-fourth ml-2" onClick={() => {
                                                        const arr = weightageDetails;
                                                        arr.splice(index, 1);
                                                        setWeightageDetails(arr);
                                                    }}>
                                                        <DeleteIcon />
                                                    </div>
                                                </div>
                                            </div>))}
                                        <Button className="pt-2 mt-2 rounded-[8px] text-white bg-third" onClick={() => setWeightageDetails(prev => [...prev, { name: "", value: 0 }])}>Add Keyword</Button>
                                    </>
                                )
                                } */}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-3">

                            <p className="flex flex-col text-textsecondary text-[14px] font-semibold p-2 w-1/3
                            </p> gap-1">
                                Zero Tolerance
                                <p className="text-textsecondary-light text-[10px] font-normal">
                                    Enabling this will auto-fail the scorecard on detection
                                </p>
                            </p>
                            <Switch checked={zeroTolerance} onCheckedChange={() => setZeroTolerance(prev => !prev)} className="mr-10" />
                        </div>
                        <div className="flex justify-between items-center mt-1">

                            <p className="flex flex-col text-textsecondary text-[14px] font-semibold p-2 w-1/3
                            </p> gap-1">
                                Audio
                                <p className="text-textsecondary-light text-[10px] font-normal">
                                    Enabling this will send audio for the scorecard
                                </p>
                            </p>
                            <Switch checked={audio} onCheckedChange={() => {
                                if (!audio) {
                                    setMetaData(false)
                                }
                                setAudio(prev => !prev);
                            }} className="mr-10" />
                        </div>
                        <div className="flex justify-between items-center mt-1 mb">

                            <p className="flex flex-col text-textsecondary text-[14px] font-semibold p-2 w-1/3
                            </p> gap-1">
                                Meta data
                                <p className="text-textsecondary-light text-[10px] font-normal">
                                    Enabling this will send meta data for the scorecard
                                </p>
                            </p>
                            <Switch checked={metaData} onCheckedChange={() => {
                                if (!metaData) {
                                    setAudio(false)
                                }
                                setMetaData(prev => !prev);
                            }}
                                className="mr-10" />
                        </div>
                    </div>
                </div>
                <div className=" border my-2 rounded-[8px] ">
                    <div
                        className={`w-full py-5 px-3 flex justify-between items-center  cursor-pointer ${showGeneralSettings ? " " : ""}`}
                        onClick={() => setShowLegendsSettings((prev) => !prev)}
                    >
                        Legends
                        <DropdownMenuIcon isOpen={showLegendsSettings} />
                    </div>
                    {showLegendsSettings && <div className="mx-3"><Separator /></div>}
                    <div
                        className={`w-full flex flex-col transition-all duration-300 ease-out overflow-hidden ${showLegendsSettings ? "h-auto opacity-100 px-5 py-3" : "h-0 opacity-0"
                            }`}
                    >
                        <LegendsList list={legendList} setList={setLegendList} />
                    </div>
                </div>
            </div>
            <div className="h-[10vh] border-t ">
                <div className="flex justify-end items-center h-full px-5">
                    {editing === parameterDetailsList[activeParameter].subParameterDetailsList.length ?
                        (
                            <Button className="w-1/6 bg-third hover:bg-fourth text-white  rounded-[8px] hover:text-textsecondary"
                                onClick={() => {
                                    dispatch(addSubParameterAction({
                                        index: activeParameter,
                                        subCategoryName: subparametertitle,
                                        weightageType: weightage,
                                        weightageDetails: "",
                                        zt: zeroTolerance,
                                        audio,
                                        metaData,
                                        hybridQa: false,
                                        legendDetailsDataList: legendList,
                                        enable: true
                                    }));
                                    dispatch(setEditing(-1))
                                }}
                            >
                                Add
                            </Button>
                        ) :
                        (<Button className="w-1/6 bg-third hover:bg-fourth text-white  rounded-[8px] hover:text-textsecondary"
                            onClick={() => {
                                dispatch(updateSubParameterAction({
                                    parameterIndex: activeParameter,
                                    subParameterIndex: editing,
                                    subCategoryName: subparametertitle,
                                    weightageType: weightage,
                                    weightageDetails: "",
                                    zt: zeroTolerance,
                                    audio,
                                    metaData,
                                    hybridQa: false,
                                    legendDetailsDataList: legendList,
                                    enable: true
                                }));
                                dispatch(setEditing(-1))
                            }
                            }
                        >
                            Save
                        </Button>)}
                </div>
            </div>
        </div>
    )
}

export default SubParameterSettings