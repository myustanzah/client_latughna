import { useState, useEffect } from "react";
import { getLessonPlanByStudent } from "../api/lessonPlanController";

export default function useFecthLessonPlan(payload){
    const [dataLesson, setDataLesson] = useState({})
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLessonPlanByStudent(payload)
        .then((response)=>{
            setDataLesson(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [getLessonPlanByStudent, setDataLesson]);

    // console.log("ini data lesson", JSON.stringify(dataLesson.content))

    return dataLesson.content

}