import { PayloadAction } from "@reduxjs/toolkit";
import { ConfigQAStateType } from "../configInitialState";
import { LegendDetailsDataList, ParameterDetailsList } from "../../types/configurationSave";


export const parameterReducer = (state: ConfigQAStateType, action: PayloadAction<ParameterDetailsList[]>) => {
    state.parameterDetailsList = action.payload;
}

export const addParameterReducer = (state: ConfigQAStateType, action: PayloadAction<string>) => {
    state.parameterDetailsList.push({parentCategoryName:action.payload, enable: true, subParameterDetailsList: []});
}

export const deleteParameterReducer = (state: ConfigQAStateType, action: PayloadAction<number>) => {
    state.parameterDetailsList.splice(action.payload, 1);
}

export const updateParameterReducer = (state: ConfigQAStateType, action: PayloadAction<{index: number, name: string}>) => {
    state.parameterDetailsList[action.payload.index].parentCategoryName = action.payload.name;
}
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


export const addSubParameterReducer = (state: ConfigQAStateType, action: PayloadAction<subParameterDetailsListPayload>) => {
    state.parameterDetailsList[action.payload.index].subParameterDetailsList.push({subCategoryName: action.payload.subCategoryName, weightageType: action.payload.weightageType, weightageDetails: action.payload.weightageDetails, zt: action.payload.zt, audio: action.payload.audio, metaData: action.payload.metaData, hybridQa: action.payload.hybridQa || false, enable: action.payload.enable, legendDetailsDataList: action.payload.legendDetailsDataList});
}

export const deleteSubParameterReducer = (state: ConfigQAStateType, action: PayloadAction<{parameterIndex: number, subParameterIndex: number}>) => {
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList.splice(action.payload.subParameterIndex, 1);
}

export const updateSubParameterReducer = (state: ConfigQAStateType, action: PayloadAction<{parameterIndex: number, subParameterIndex: number, subCategoryName: string, weightageType: string,
    weightageDetails: any,
    zt: boolean,
    audio: boolean,
    metaData: boolean,
    hybridQa: boolean,
    enable: boolean,
    legendDetailsDataList: LegendDetailsDataList[]}>) => {
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].subCategoryName = action.payload.subCategoryName;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].weightageType = action.payload.weightageType;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].weightageDetails = action.payload.weightageDetails;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].zt = action.payload.zt;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].audio = action.payload.audio;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].metaData = action.payload.metaData;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].hybridQa = action.payload.hybridQa;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].enable = action.payload.enable;
    state.parameterDetailsList[action.payload.parameterIndex].subParameterDetailsList[action.payload.subParameterIndex].legendDetailsDataList = action.payload.legendDetailsDataList;
}