// types.ts
import { Reducer } from "@reduxjs/toolkit"
import { EnhancedStore } from "@reduxjs/toolkit"

export interface ReducerManager {
    getReducerMap: () => { [key: string]: Reducer }
    reduce: (state: any, action: any) => any
    add: (key: string, reducer: Reducer) => void
    remove: (key: string) => void
}

export interface StoreWithManager extends EnhancedStore {
    reducerManager: ReducerManager
}
