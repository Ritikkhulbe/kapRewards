import { PayloadAction } from "@reduxjs/toolkit";
import { ConfigQAStateType, GeneralSettingsState } from "../configInitialState";


export const generalReducer = (state: ConfigQAStateType, action: PayloadAction<GeneralSettingsState>) => {
    state.general = action.payload;
}

export const generalQATypeReducer = (state: ConfigQAStateType, action: PayloadAction<string[]>) => {
    state.general.QAType = action.payload;
}