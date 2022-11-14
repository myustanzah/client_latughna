import { SET_AREA, SET_OBJECTIVE_AREA, SET_SELECT_OBJECTIVE } from "./actionType";

const initialState = {
    areaData: [],
    selectArea: 0,
    selectObjective: 0
}

function areaReducer(state = initialState, action){
    switch (action.type) {
        case SET_AREA:
            return {...state, areaData: action.payload}
        case SET_OBJECTIVE_AREA:
            return {...state, selectArea: action.payload}
        case SET_SELECT_OBJECTIVE:
            return {...state, selectObjective: action.payload}
        default:
            break;
    }
    return state
}

export default areaReducer

