import { Button } from "@/components/ui/button"
import ParameterDetails from "./ParameterDetails";
import withReducer from "@/app/utils/withReducer";
import parameterUtilSlice, { setActiveParameter, setEditing, setEditParameterName } from "../../store/slice/parameterUtilSlice";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import EmptyParameterIcon from "@/app/assets/icons/EmptyParameterIcon";
import { addParameterAction, deleteParameterAction, updateParameterAction } from "../../store/actions";
import DeleteIcon from "@/app/assets/icons/DeleteIcon";
import EditIcon from "@/app/assets/icons/EditIcon";
import DangerIcon from "@/app/assets/icons/DangerIcon";
import { ParameterDetailsList } from "../../types/configurationSave";

const ParametersSettings = () => {
  const parameterDetailsListRedux = useAppSelector(state => state?.configQA?.parameterDetailsList);
  const [parameterDetailsList, setParameterDetailsList] = useState(parameterDetailsListRedux || []);
  const dispatch = useAppDispatch();

  const [addNewParameter, setAddNewParameter] = useState(false);
  const [newParameterName, setNewParameterName] = useState("");
  const [editParameterLabel, setEditParameterLabel] = useState("");
  const editParameterName = useAppSelector(state => state?.parameterUtil?.editParameterName);
  const activeParameter = useAppSelector(state => state?.parameterUtil?.activeParameter);

  useEffect(() => {
    setParameterDetailsList(parameterDetailsListRedux);
  }, [parameterDetailsListRedux])


  const handleAddParameter = (e: any) => {
    e.preventDefault();
    dispatch(addParameterAction(newParameterName))
    setAddNewParameter(false);
    setNewParameterName("");
    dispatch(setActiveParameter(parameterDetailsList.length));
  }


  const handleEditParameter = (index: number) => {
    dispatch(updateParameterAction({
      index,
      name: editParameterLabel
    }));
    dispatch(setEditParameterName(-1))
  }


  return (
    <div className="flex w-full gap-3">
      <div className="left w-1/3 max-w-[25vw] bg-primary border rounded-[12px] h-[70vh] ">
        <div className="w-full h-[10vh] flex  m-0 border-b justify-between items-center px-3">
          <h1 className="text-xl font-semibold text-textsecondary flex items-center">
            Parameters
            {parameterDetailsList.length > 0 &&
              <span className={"bg-third text-xs text-white rounded-2xl py-[2px] px-3 mx-1 font-semibold "}>{parameterDetailsList.length}</span>}
          </h1>
          <Button
            onClick={(e) => { e.preventDefault(); setAddNewParameter(true) }}
            className="text-white px-5 bg-third-light border rounded-[8px] py-2 hover:bg-blue-50 font-bold hover:border-third hover:text-third flex items-center justify-center" >
            <span className="text-xl pb-1 flex items-center">+</span>
            Add
          </Button>
        </div>
        <div className="flex flex-col items-center px-2">
          {addNewParameter && <>
            <Card className="w-full gap-2 mt-2 flex justify-evenly px-3 py-2 border flex-col ">
              <h1>Parameter title</h1>
              <Input placeholder="Enter parameter title" value={newParameterName} onChange={(e) => setNewParameterName(e.currentTarget.value)} />
              <div className="gap-2 flex justify-end">
                <Button onClick={(e) => { e.preventDefault(); setAddNewParameter(false); setNewParameterName("") }}
                  className="border text-textsecondary px-5 py-2 rounded-[8px]">
                  Cancel</Button>
                <Button className="bg-third-light text-white px-5 py-2 rounded-[8px]" onClick={handleAddParameter}>Add</Button>
              </div>
            </Card>
          </>}
          {/* <ParameterList /> */}
          {parameterDetailsList.length > 0 ? parameterDetailsList.map((parameter: ParameterDetailsList, index: number) => (
            <>
              {editParameterName === index ? (
                <Card className="w-full gap-2 mt-2 flex justify-evenly px-3 py-2 border flex-col ">
                  <h1>Parameter title</h1>
                  <Input placeholder="Enter parameter title" value={editParameterLabel} onChange={(e) => setEditParameterLabel(e.currentTarget.value)} />
                  <div className="gap-2 flex justify-end">
                    <Button onClick={(e) => { e.preventDefault(); dispatch(setEditParameterName(-1)) }}
                      className="border text-textsecondary px-5 py-2 rounded-[8px]">
                      Cancel</Button>
                    <Button className="bg-third-light text-white px-5 py-2 rounded-[8px]" onClick={() => handleEditParameter(index)}>Add</Button>
                  </div>
                </Card>
              ) :
                <Card key={index} className={`w-full flex justify-evenly px-3 gap-2 py-2 mt-2 border-b flex-col hover:bg-blue-50 cursor-pointer ${activeParameter === index ? " border-third-light " : ""} group`}
                  onClick={(e) => { e.preventDefault(); console.log("click"); dispatch(setActiveParameter(index)); dispatch(setEditing(-1)) }}>
                  <div className="flex gap-1 items-center">
                    <p className="text-textsecondary text-[14px] font-semibold flex whitespace-nowrap text-ellipsis gap-1 items-center w-4/5">
                      <p className="text-ellipsis whitespace-nowrap  overflow-hidden w-/5">
                        {parameter?.parentCategoryName}
                        </p>
                      {parameter.subParameterDetailsList?.length > 0 &&
                        <span className={"bg-third text-[8px] text-white rounded-2xl py-[2px] px-3 mx-1 font-semibold "}>{parameter.subParameterDetailsList.length}</span>}
                    </p>
                    <div id="parameter-options" className="flex opacity-0 group-hover:opacity-100 w-1/5">
                      <div onClick={(e) => {
                        e.preventDefault();
                        setEditParameterLabel(parameter.parentCategoryName);
                        dispatch(setEditParameterName(index));
                      }} className="p-1 rounded-full transition-all hover:bg-fourth"><EditIcon /></div>
                      <div className="p-1 rounded-full transition-all hover:bg-fourth"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          dispatch(setActiveParameter(-1));
                          dispatch(setEditing(-1));
                          dispatch(deleteParameterAction(index));
                        }}
                      ><DeleteIcon /></div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center justify-between pb-1">
                    <p className="text-textsecondary font-normal text-[12px]"><span className="font-semibold mr-1">Weightage:</span>{parameter?.subParameterDetailsList?.reduce((sum: number, item: any) => sum + Number(item.weightageDetails), 0) || parameter?.subParameterDetailsList[0]?.weightageType || 0}</p>
                    {parameter?.subParameterDetailsList?.length &&
                      parameter.subParameterDetailsList.map((subParam: any) => subParam.zt === true).filter((zt: any) => zt === true).length > 0 ?
                      <p className="text-textsecondary font-semibold text-[12px] flex gap-1"><DangerIcon />ZT</p> : ""}
                  </div>
                </Card>
              }
            </>
          )) : <>
            {!addNewParameter &&
              <div className="flex flex-col justify-center items-center h-[60vh]">
                <EmptyParameterIcon />
                <h1 className="text-textsecondary text-[18px] pt-2"> No Parameters Added </h1>
                <p className="text-textsecondary-light text-[12px] text-center px-5">Create a new parameter and start building your criteria.</p>
              </div>
            }
          </>}
        </div>
      </div>
      <div className="bg-fourth  rounded-[12px] h-[70vh] w-full ">
        <ParameterDetails />
      </div>
    </div>
  )
}

export default withReducer("parameterUtil", parameterUtilSlice)(ParametersSettings)