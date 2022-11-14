import { getArea } from "../api/areaController";
import { getObservation } from "../api/observationController";
import { getStudent } from "../api/studentControler";
import { 
    SET_LOGIN, 
    SET_DATA_USER, 
    SET_LOG_OUT, 
    SET_STUDENT,
    SET_AREA,
    SET_PAGE_STUDENT_OR_OBJ,
    SET_OBJECTIVE_AREA,
    SET_SELECT_STUDENT,
    SET_SELECT_OBJECTIVE,
    SET_OBSERVATION,
    SET_LOADING
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

export function fungsiSetLoading(input){
    return {
        type: SET_LOADING,
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

export function fungsiSelectStudent (input){
    return {
        type: SET_SELECT_STUDENT,
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

export function fungsiSelectObjective(input) {
    return {
        type: SET_SELECT_OBJECTIVE,
        payload: input
    }
}

export function fungsiSetDataObservation(input){
    return {
        type: SET_OBSERVATION,
        payload: input
    }
}

export function fungsiGetDataObservation(){

    return (dispatch, getState) => {
    
    let selectStudent = getState().StudentReducer.selectStudent
    let student = getState().StudentReducer.studentData[selectStudent]
        getObservation(student.id)
        .then((response) => {
            dispatch(fungsiSetDataObservation(response.data.content))
        })
        .catch((error)=>{
            console.log(error)
        })
        

    }
}

export function fungsiIndexStudent(){
    return (dispatch, getState) => {
        getStudent()
        .then((response)=>{
            
            dispatch(fungsiStoreStudent(response.data.content))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function fungsiIndexArea(){
    return (dispatch, getState) => {
        getArea()
        .then((response)=>{
            dispatch(fungsiStoreArea(response.data.content))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

