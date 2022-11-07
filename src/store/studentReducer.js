import { SET_STUDENT } from "./actionType";

const initialState = {
    studentData: [],
    selectStudent: 0
}

function studentReducer(state = initialState, action){
    switch (action.type) {
        case SET_STUDENT:
            return {...state, studentData: action.payload};
        default:
            break;
    }

    return state
}

export default studentReducer

