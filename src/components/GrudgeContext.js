import React, { useReducer, createContext, useCallback } from 'react';

import { v4 as id } from 'uuid';
import initialState from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

export const GrudgeContext = createContext();


const reducer = (state, action) => {
    if(action.type === GRUDGE_ADD) {
        return [ action.payload, ...state ];
    }
    if(action.type === GRUDGE_FORGIVE) {
        return state.map(grudge => {
            if(grudge.id !== action.payload.id) return grudge;
            return { ...grudge, forgiven: !grudge.forgiven };
        })
    }
    return state;
};

export const GrudgeProvider = ({ children }) => {
    const [ grudges, dispatch ] = useReducer(reducer, initialState);

    const addGrudge = useCallback(({ person, reason }) => {
        dispatch({
            type: GRUDGE_ADD,
            payload: {
                id: id(),
                person,
                reason,
                forgiven: false,
            },
        });
    }, [dispatch]);

    const toggleFrogiveness = useCallback(id => {
            dispatch({
                type: GRUDGE_FORGIVE,
                payload: { id },
            });
        }, [dispatch]);

    const value = { grudges, addGrudge, toggleFrogiveness };

    return <GrudgeContext.Provider value={value}>{ children } </GrudgeContext.Provider>
}