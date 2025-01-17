import { createSlice } from "@reduxjs/toolkit";


const rootSlice = createSlice({
    name: "Root",
    initialState: {
        text: "hello world",
    },
    reducers: {
        changeExampleText: (state, action) => {
            state.text = action.payload
        },
    },
})

export default rootSlice.reducer;