import { getArea } from "../api/areaController";
import { getIndexLessonPlan } from "../api/lessonPlanController";
import { getObservation } from "../api/observationController";
import { getStudent } from "../api/studentControler";
import { getUser } from "../api/userController";
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
    SET_LOADING,
    SET_USER_LIST,
    SET_DATA_LESSON,
    SET_IS_EDIT_CONTACT,
    SET_SHOW_REPORT
} from "./actionType";



export function fungsiLogin (input){
    return {
        type: SET_LOGIN,
        payload: input
    }
}

export function setLogOut(){
    return (dispatch, getState) => {
        dispatch(fungsiLogOut(false))
        dispatch(fungsiDataUser(null))
        dispatch(fungsiUserList([]))
        dispatch(fungsiShowDataStudentOrObjective(1))
        dispatch(fungsiStoreStudent([]))
        dispatch(fungsiSelectStudent(0))
        dispatch(fungsiStoreArea([]))
        dispatch(fungsiShowObjective(0))
        dispatch(fungsiSelectObjective(0))
        dispatch(fungsiSetDataObservation([]))
        dispatch(fungsiStoreLesson([]))
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

export function fungsiIndexUser (){
    return ( dispatch, getState ) => {
        getUser()
        .then((response)=>{
          if(response.data.status === 200){
            dispatch(fungsiUserList(response.data.content))
          } else {
            console.log("Error", JSON.stringify(response.data))
          }
        })
        .catch((error)=>{
          if (!error.response) {
            console.log(503, "Your interner or server has offline")
          }
          console.log(error.response.data.status, error.response.data.messages)
        })
    }
}

export function fungsiSetLoading(input){
    return {
        type: SET_LOADING,
        payload: input
    }
}

export function fungsiUserList(input){
    return {
        type: SET_USER_LIST,
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

export function fungsiAddContact (input){
    return {
        type: SET_IS_EDIT_CONTACT,
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

export function fungsiIndexLesson(payload){
    return (dispatch, getState) => {
        getIndexLessonPlan(payload)
        .then((response)=>{
            dispatch(fungsiStoreLesson(response.data.content))
        })
        .catch((error)=> {
            console.log(error)
        })
    }
}

export function fungsiStoreLesson(input){
    return {
        type: SET_DATA_LESSON,
        payload: input
    }
}

