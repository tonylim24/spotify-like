// Declaration of using React Context API
import React, { createContext, useContext, useReducer } from 'react'

// Initialize the State Context API (DataLayer)
export const DataLayerContext = createContext();

// Initialize DataLayer with initialState and reducer
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(
        reducer, initialState
    )}>
        {children}
    </DataLayerContext.Provider>
);

// State Provider
export const useDataLayerValue = () => useContext(DataLayerContext);