import React, 
    { 
        createContext, 
        useReducer, 
        useContext 
    } from 'react';

import {
    UPDATE_EXCISE,
    REMOVE_EXCISE,
    SET_RECENT_EXCISE,
    ADD_EXCISE,
    LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

function reducer(state, action) {
    switch (action.type) {
        case UPDATE_EXCISE:
            return {
                ...state,
                excises: [...action.excises],
                loading: false
            };

        case REMOVE_EXCISE:
            return {
                ...state,
                excises: state.excises.filter((excise) => {
                    return excise.id !== action._id;
                })
            };

        case SET_RECENT_EXCISE:
            return {
                ...state,
                recentExcise: action.excise,
                loading: false
            };

        case ADD_EXCISE:
            return {
                ...state,
                excises: [action.excise, ...state.excises],
                loading: false
            };

        case LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    };
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        excises: [],
        currentExcise: {
            _id: 0,
            product: '',
            vessel_id: '',
            volume: ''
        },
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };