
import { useState } from "react"
import { useSelector } from "react-redux"
import Table1 from "./ChiledTabLesson.jsx/Table1"
import Table2 from "./ChiledTabLesson.jsx/Table2"
import Table3 from "./ChiledTabLesson.jsx/Table3"

export default function TabLessonPlan(){

    const dataLesson = useSelector(state => state.LessonReducer.lessonData)
    // const seeSelectData = useSelector(state => state.LessonReducer.selectLesson)
    // const [dataToTable, setDataToTable] = useState([])

    return (
        <>
            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tab"
                role="tablist">
                <li className="nav-item active" role="presentation">
                    <a href="#tabs-home" 
                    className="active block rounded-t-lg font-medium text-xs leading-tight uppercase border-transparent px-6 py-3 text-black hover:border-transparent bg-white focus:border-transparent" 
                    id="tabs-home-tab" 
                    data-bs-toggle="pill" 
                    data-bs-target="#tabs-home" 
                    role="tab" 
                    aria-controls="tabs-home"
                    aria-selected="true">My Plan - Student</a>
                </li>
                {/* <li className="nav-item" role="presentation">
                    <a href="#tabs-profile" 
                    className="block rounded-t-lg font-medium text-xs leading-tight uppercase border-transparent px-6 py-3 text-black hover:border-transparent focus:bg-white focus:border-transparent" 
                    id="tabs-profile-tab" 
                    data-bs-toggle="pill" 
                    data-bs-target="#tabs-profile" 
                    role="tab"
                    aria-controls="tabs-profile" 
                    aria-selected="false">My Plan - Area</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-messages" 
                    className="block rounded-t-lg font-medium text-xs leading-tight uppercase border-transparent px-6 py-3 text-black hover:border-transparent focus:bg-white focus:border-transparent" 
                    id="tabs-messages-tab" 
                    data-bs-toggle="pill" 
                    data-bs-target="#tabs-messages" 
                    role="tab"
                    aria-controls="tabs-messages" aria-selected="false">My Plan - Objective</a>
                </li> */}
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <Table1 data={dataLesson} />
                <Table2 />
                <Table3 />
            </div>
        </>
    )
}