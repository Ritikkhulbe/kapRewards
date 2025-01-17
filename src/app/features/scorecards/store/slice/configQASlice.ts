import { createSlice } from "@reduxjs/toolkit";
import { ConfigQAInitialState } from "../configInitialState";
import { generalAction, generalQaTypeAction, parameterAction, rebuttalAction ,addParameterAction,addSubParameterAction,updateParameterAction,updateSubParameterAction,deleteParameterAction,deleteSubParameterAction,} from "../actions";
import { generalQATypeReducer, generalReducer, parameterReducer, rebuttalReducer ,addParameterReducer,deleteParameterReducer,updateParameterReducer,addSubParameterReducer,deleteSubParameterReducer,updateSubParameterReducer} from "../reducers";

const configQASlice = createSlice({
    name: "configQA",
    initialState: ConfigQAInitialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(generalAction, generalReducer),
        builder.addCase(rebuttalAction, rebuttalReducer),
        builder.addCase(parameterAction, parameterReducer),
        builder.addCase(generalQaTypeAction, generalQATypeReducer),
        builder.addCase(addParameterAction, addParameterReducer),
        builder.addCase(deleteParameterAction, deleteParameterReducer),
        builder.addCase(updateParameterAction, updateParameterReducer),
        builder.addCase(addSubParameterAction, addSubParameterReducer),
        builder.addCase(deleteSubParameterAction, deleteSubParameterReducer),
        builder.addCase(updateSubParameterAction, updateSubParameterReducer)
    }
});

export default configQASlice.reducer;