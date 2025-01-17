import { PayloadAction } from "@reduxjs/toolkit";
import { ConfigQAStateType, RebuttalSettingsState } from "../configInitialState";


export const rebuttalReducer = (state: ConfigQAStateType, action: PayloadAction<RebuttalSettingsState>) => {
    state.rebuttal = action.payload;
}