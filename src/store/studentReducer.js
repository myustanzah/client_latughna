import { SET_STUDENT, SET_SELECT_STUDENT, SET_IS_EDIT_CONTACT } from "./actionType";

const initialState = {
    studentData: [],
    selectStudent: 0,
}

function studentReducer(state = initialState, action){
    switch (action.type) {
        case SET_STUDENT:
            return {...state, studentData: action.payload};
        case SET_SELECT_STUDENT:
            return {...state, selectStudent: action.payload};
        case SET_IS_EDIT_CONTACT:
            return {...state, editContact: action.payload};
        default:
            break;
    }

    return state
}

export default studentReducer

