import { SET_IS_EDIT_CONTACT } from "./actionType";

const initialState = {
    isEdit: false,
}

function utilReducer(state = initialState, action){
    switch (action.type) {
        case SET_IS_EDIT_CONTACT:
            return {...state, isEdit: action.payload};
        default:
            break;
    }

    return state
}

export default utilReducer

