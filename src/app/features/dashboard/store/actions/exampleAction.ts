import { createAction } from "@reduxjs/toolkit";

// Define actions as separate action creators
export const exampleAction = createAction<string>("[EXAMPLE] CHANGE EXAMPLE TEXT");