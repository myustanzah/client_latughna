import { 
    SET_LOGIN, 
    SET_DATA_USER, 
    SET_LOG_OUT, 
    SET_STUDENT,
    SET_AREA,
    SET_PAGE_STUDENT_OR_OBJ,
    SET_OBJECTIVE_AREA
} from "./actionType";


export function fungsiLogin (input){
    return {
        type: SET_LOGIN,
        payload: input
    }
}

export function fungsiLogOut (input) {
    return {
        type: SET_LOG_OUT,
        payload: input
    }
}

export function fungsiDataUser (input) {
    return {
        type: SET_DATA_USER,
        payload: input
    }
}

export function fungsiShowDataStudentOrObjective (input) {
    return {
        type: SET_PAGE_STUDENT_OR_OBJ,
        payload: input
    }
}

export function fungsiStoreStudent (input){
    return {
        type: SET_STUDENT,
        payload: input
    }
}

export function fungsiStoreArea (input){
    return {
        type: SET_AREA,
        payload: input
    }
}

export function fungsiShowObjective(input){
    return {
        type: SET_OBJECTIVE_AREA,
        payload: input
    }
}

