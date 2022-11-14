import { SET_LOGIN, SET_DATA_USER, SET_LOG_OUT, SET_PAGE_STUDENT_OR_OBJ, SET_LOADING } from "./actionType";

const initialState = {
    userData: null,
    isLoggedIn: false,
    isLoading: false,
    cardPageVisit: 1 
}

function dataReducer(state = initialState, action){

    switch (action.type) {
        case SET_LOGIN:
            return {...state, isLoggedIn: action.payload};
        case SET_DATA_USER:
            return {...state, userData: action.payload};
        case SET_LOG_OUT:
            return {...state, isLoggedIn: action.payload};
        case SET_PAGE_STUDENT_OR_OBJ:
            return {...state, cardPageVisit: action.payload};
        case SET_LOADING:
            return {...state, isLoading: action.payload};
        default:
            break;
    }

    return state
}

export default dataReducer