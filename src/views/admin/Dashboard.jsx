import React from "react";

// Components

import CardPageVisits from "../../component/Cards/CardPageVisits";
import TabMurid from "../../component/Tab/TabMurid";
import CardAreaLessonPlans from "../../component/Cards/CardAreaLessonPlan";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fungsiIndexArea, fungsiIndexStudent } from "../../store/actionCreator";

export default function Dashboard(){
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fungsiIndexStudent())
        dispatch(fungsiIndexArea())
    }, [])
    
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
                    <TabMurid />
                </div>
                
                <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
                    <CardPageVisits />
                </div>
                <div className="w-full xl:w-3/12 mb-12 xl:mb-0 px-4">
                    <CardAreaLessonPlans />
                </div>
            </div>
        </>
    )
}