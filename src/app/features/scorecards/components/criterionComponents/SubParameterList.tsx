import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setEditing } from "../../store/slice/parameterUtilSlice";
import { Separator } from "@/components/ui/separator";
import DeleteIcon from "@/app/assets/icons/DeleteIcon";
import EditIcon from "@/app/assets/icons/EditIcon";
import EmptyParameterIcon from "@/app/assets/icons/EmptyParameterIcon";
import type { subParameterDetailsList } from "../../types/configurationSave";


const SubParameterList = () => {

    const dispatch = useAppDispatch();
    const activeParameter = useAppSelector(state => state?.parameterUtil?.activeParameter);

    if (activeParameter === -1 || activeParameter === undefined) return;

    const parameterDetailsList = useAppSelector(state => state?.configQA?.parameterDetailsList);

    let subParameterDetailsList = parameterDetailsList[activeParameter]?.subParameterDetailsList
    

    const headers = ["Sub-Parameter", "Weightage", "Zero Tolerance", "Status"];
    return (
        <>
            <div className="right w-full bg-primary border rounded-[12px] h-full overflow-scroll">
                <div className="w-full h-[10vh] flex  m-0 border-b justify-between items-center px-3 ">
                    <h1 className="text-xl font-semibold text-textsecondary overflow-hidden text-ellipsis whitespace-nowrap w-4/5">{parameterDetailsList[activeParameter]?.parentCategoryName}</h1>
                    <Button
                        onClick={(e) => { e.preventDefault(); dispatch(setEditing(subParameterDetailsList?.length)) }}
                        className="text-white px-5 bg-third-light border rounded-[8px] py-2 hover:bg-blue-50 font-bold hover:border-third hover:text-third flex items-center justify-center" >
                        <span className="text-xl pb-1 flex items-center">+</span>
                        Add
                    </Button>
                </div>

                {subParameterDetailsList?.length ?
                    <div className="flex flex-col px-2 h-[50vh]">
                        <div className="flex w-[90%] px-4">
                            {headers.map((header, index) => (
                                <div
                                    key={index}
                                    className={"flex justify-center first:justify-start w-[18%] first:w-[54%] last:w-[10%] px-4 py-3 text-center last:border-r-0 font-thin text-[12px] text-slate-500 first:text-left"}>
                                    {header}
                                </div>
                            ))}
                        </div>
                        <Separator className="mb-2" />
                        {/* <ParameterDetails /> */}
                        <div className="flex flex-col gap-2">
                            {subParameterDetailsList?.length > 0 && subParameterDetailsList.map((parameter: subParameterDetailsList, index: number) => (
                                <Card key={index} className="flex items-center py-2" >
                                    <div className="w-[90%] flex justify-center  first:justify-start items-center text-center px-4   ">
                                        <div className="flex flex-col w-[54%] items-start border-r">
                                            <p className="text-textsecondary font-semibold">{parameter.subCategoryName}</p>
                                            <div className="text-textsecondary-light text-xs text-left text-ellipsis flex w-full">
                                                <p className="text-ellipsis whitespace-nowrap max-w-3/5 mr-1 overflow-hidden ">
                                                    {parameter.legendDetailsDataList[0].legendName}
                                                </p>
                                                <span
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(setEditing(index))
                                                    }}
                                                    className="text-third underline w-2/5 cursor-pointer ">
                                                    {parameter.legendDetailsDataList.length > 1 ? `view all ${parameter.legendDetailsDataList.length} legends` : " "}
                                                </span>
                                            </div>

                                        </div>
                                        <div className="w-[18%] border-r">
                                            <p className="text-textsecondary">{parameter.weightageType}</p>
                                        </div>
                                        <div className="w-[18%] border-r">
                                            <p className="text-textsecondary">{parameter.zt ? "Yes" : "No"}</p>
                                        </div>

                                        <div className="w-[10%] border-r">
                                            <Switch  checked={parameter.enable}/>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-[10%]">
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(setEditing(index))
                                            }}
                                            className="p-3 rounded-full transition-all duration-300 hover:bg-fourth cursor-pointer"
                                        >
                                            <EditIcon />
                                        </div>
                                        <div className="p-3 rounded-full transition-all duration-300 hover:bg-fourth cursor-pointer"><DeleteIcon /></div>
                                    </div>
                                </Card>
                            )
                            )}
                        </div>
                    </div>
                    :
                    <>
                        <div className="flex flex-col justify-center items-center h-[60vh]">
                            <EmptyParameterIcon />
                            <h1 className="text-textsecondary text-[18px] pt-2"> No Sub-Parameters Added </h1>
                            <p className="text-textsecondary-light text-[12px] text-center px-5">Click on <span className="text-textsecondary">Add</span> button to create a new sub-parameter and start building your criteria.</p>
                        </div>
                    </>}
            </div>
        </>
    )
}

export default SubParameterList