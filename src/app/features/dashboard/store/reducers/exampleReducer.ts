import { PayloadAction } from "@reduxjs/toolkit";
import { state } from "../state";



export const exampleReducer = (state : state, action: PayloadAction<string>) => {
  state.dashboardState = action.payload;
};