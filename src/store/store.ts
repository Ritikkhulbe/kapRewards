import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { StoreWithManager, ReducerManager } from "./types";
import Reducers from "./reducers";

// Ensure staticReducers is at least an empty object if no initial reducers are needed
const staticReducers = Reducers;

// Function to create the reducer manager
export const createReducerManager = (initialReducers: any): ReducerManager => {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);

    return {
        getReducerMap: () => reducers,

        // The main reducer function used by Redux
        reduce: (state: any, action: any) => combinedReducer(state, action),

        // Add a new reducer and update combined reducer
        add: (key: string, reducer: any) => {
            if (!reducers[key]) {
                reducers[key] = reducer;
                combinedReducer = combineReducers(reducers);
                store.replaceReducer(combinedReducer);  // Update the store
            }
        },

        // Remove a reducer and update combined reducer
        remove: (key: string) => {
            if (reducers[key]) {
                delete reducers[key];
                combinedReducer = combineReducers(reducers);
                store.replaceReducer(combinedReducer);  // Update the store
            }
        }
    };
};

const reducerManager = createReducerManager(staticReducers);

// Create the store using reducerManager.reduce
const store = configureStore({
    reducer: reducerManager.reduce
}) as StoreWithManager;

// Attach reducerManager to the store instance
store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
