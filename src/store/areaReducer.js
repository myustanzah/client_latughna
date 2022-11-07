import { SET_AREA, SET_OBJECTIVE_AREA } from "./actionType";

const initialState = {
    areaData: [],
    selectArea: 0
}

function areaReducer(state = initialState, action){
    switch (action.type) {
        case SET_AREA:
            return {...state, areaData: action.payload}
        case SET_OBJECTIVE_AREA:
            return {...state, selectArea: action.payload}
        default:
            break;
    }
    return state
}

export default areaReducer

