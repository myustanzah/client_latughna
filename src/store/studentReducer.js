import { SET_STUDENT, SET_SELECT_STUDENT } from "./actionType";

const initialState = {
    studentData: [],
    selectStudent: 0
}

function studentReducer(state = initialState, action){
    switch (action.type) {
        case SET_STUDENT:
            return {...state, studentData: action.payload};
        case SET_SELECT_STUDENT:
            return {...state, selectStudent: action.payload}
        default:
            break;
    }

    return state
}

export default studentReducer

