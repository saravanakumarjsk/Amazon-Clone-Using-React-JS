// setup the data layer which is used to provide the
// user info from product and price.

import React, { createContext, useContext, useReducer } from 'react';

// this is data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);