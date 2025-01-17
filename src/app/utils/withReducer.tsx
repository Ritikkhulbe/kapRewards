import React, { useEffect } from "react"
import { Reducer } from "@reduxjs/toolkit"
import { StoreWithManager } from "@/store/types"
import store from "@/store/store"

// Higher-order component to dynamically inject and eject reducers
const withReducer = (key: string, reducer: Reducer) => (WrappedComponent: React.ComponentType) => {
    const ReducerInjector: React.FC = (props) => {
        useEffect(() => {
            const storeWithManager = store as StoreWithManager

            // Add the reducer when the component mounts
            if (!storeWithManager.reducerManager.getReducerMap()[key]) {
                storeWithManager.reducerManager.add(key, reducer)
            }

            // Remove the reducer when the component unmounts
            return () => {
                storeWithManager.reducerManager.remove(key)
            }
        }, [])

        return <WrappedComponent {...props} />
    }

    return ReducerInjector
}

export default withReducer
