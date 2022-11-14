import { SET_OBSERVATION } from "./actionType";

const initialState = {
    observationData: [],
}

function observationReducer(state = initialState, action){
    switch (action.type) {
        case SET_OBSERVATION:
            return {...state, observationData: action.payload};
        default:
            break;
    }

    return state
}

export default observationReducer

