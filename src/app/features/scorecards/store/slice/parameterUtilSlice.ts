import { createSlice } from "@reduxjs/toolkit";


const parameterUtilSlice = createSlice({
    name: "parameterUtil",
    initialState: {
        activeParameter: -1,
        editing: -1,
        editParameterName: -1,
    },
    reducers: {
        setActiveParameter: (state, action) => {
            state.activeParameter = action.payload;
        },
        setEditing: (state, action) => {
            state.editing = action.payload;
        },
        setEditParameterName: (state, action) => {
            state.editParameterName = action.payload;
        },
    },
});

export const { setActiveParameter, setEditing, setEditParameterName } = parameterUtilSlice.actions;

export default parameterUtilSlice.reducer;