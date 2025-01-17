import { createAction } from "@reduxjs/toolkit";
import { LegendDetailsDataList, ParameterDetailsList } from "../../types/configurationSave";

const PARAMETER_SETTINGS_ACTION = "[SCORECARD] CHANGE PARAMETER STATE";
const PARAMETER_ADD_ACTION = "[SCORECARD] ADD PARAMETER";
const PARAMETER_DELETE_ACTION = "[SCORECARD] DELETE PARAMETER";
const PARAMETER_UPDATE_ACTION = "[SCORECARD] UPDATE PARAMETER";
const SUB_PARAMETER_ADD_ACTION = "[SCORECARD] ADD SUB PARAMETER";
const SUB_PARAMETER_DELETE_ACTION = "[SCORECARD] DELETE SUB PARAMETER";
const SUB_PARAMETER_UPDATE_ACTION = "[SCORECARD] UPDATE SUB PARAMETER";

export const parameterAction = createAction<ParameterDetailsList[]>(PARAMETER_SETTINGS_ACTION);

export const addParameterAction = createAction<string>(PARAMETER_ADD_ACTION);

export const deleteParameterAction = createAction<number>(PARAMETER_DELETE_ACTION);

export const updateParameterAction = createAction<{index: number, name: string}>(PARAMETER_UPDATE_ACTION);

export interface  subParameterDetailsListPayload {
    index: number;
    subCategoryName: string;
    weightageType: string;
    weightageDetails: any;
    zt: boolean;
    audio: boolean;
    metaData: boolean;
    hybridQa: boolean;
    enable: boolean;
    legendDetailsDataList: LegendDetailsDataList[];
}
export const addSubParameterAction = createAction<subParameterDetailsListPayload>(SUB_PARAMETER_ADD_ACTION);

export const deleteSubParameterAction = createAction<{parameterIndex: number, subParameterIndex: number}>(SUB_PARAMETER_DELETE_ACTION);

export const updateSubParameterAction = createAction<{parameterIndex: number, subParameterIndex: number, subCategoryName: string, weightageType: string,
    weightageDetails: any,
    zt: boolean,
    audio: boolean,
    metaData: boolean,
    hybridQa: boolean,
    enable: boolean,
    legendDetailsDataList: LegendDetailsDataList[] }>(SUB_PARAMETER_UPDATE_ACTION);


