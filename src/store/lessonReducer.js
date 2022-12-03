import { SET_DATA_LESSON } from "./actionType";

const initialState = {
    lessonData: [],
    selectLesson: "STUDENT"
}

function lessonReducer(state = initialState, action){
    switch (action.type) {
        case SET_DATA_LESSON:
            return {...state, lessonData: action.payload};
        default:
            break;
    }

    return state
}

export default lessonReducer

