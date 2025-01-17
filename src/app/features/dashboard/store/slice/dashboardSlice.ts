import { createSlice } from "@reduxjs/toolkit";
import { dashboardState } from "../state";
import { exampleAction } from "../actions/exampleAction";
import { exampleReducer } from "../reducers/exampleReducer";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: dashboardState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(exampleAction, exampleReducer)
    }
})

export default dashboardSlice.reducer;