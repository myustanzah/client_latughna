import { forwardRef, useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteLessonPlan } from "../../../api/lessonPlanController"
import { dateFormat } from "../../../helper/handleDate"
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../../helper/UniversalResponse"
import { fungsiIndexLesson } from "../../../store/actionCreator"
import Loading from "../../Modal/Loading"
import style from "./style.css"

function Table1(props, ref){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const seeSelectData = useSelector(state => state.LessonReducer.selectLesson)


    useEffect(()=>{
        dispatch(fungsiIndexLesson(seeSelectData))
    }, [])

    const submitDeleteLessonArea = (studentId, objectiveId) => {
        let payload = {
          studentId: studentId,
          objectiveId: objectiveId
        }
        setLoading(true)
        deleteLessonPlan(payload)
        .then((response)=>{
          if (loading === false) {
            if(response.data.status === 200){
              dispatch(fungsiIndexLesson(seeSelectData))
            } else {
              UniversalErrorResponse("Error", JSON.stringify(response.data))
            }
          }
        })
        .catch((error)=>{
          if (error.response === undefined) {
            UniversalErrorResponse(503, "Your interner or server has offline")
          }
          UniversalErrorResponse(error.response.data.status, error.response.data.messages)
        })
        .finally(()=>{
          setTimeout(()=>{
            setLoading(false)
          }, 5000)
        })
      }


    return (
        <>
            <div ref={ref} className="tab-pane show active w-full h-auto bg-white p-10" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table id="headerByStudent" className="min-w-full">
                                        <thead className="border-b">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Student
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Objective
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Progress
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Last Update
                                                </th>
                                                <th scope="col" className="notIncludePrint text-sm font-medium text-gray-900">
                                                    Remove
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                    {
                                        props.data.length < 1 ? (
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Data Not Found</td>
                                                    </tr>
                                                </tbody>    
                                            </table>
                                        ) : (
                                            props.data.map((e, i)=>{
                                                return (
                                                    <table className="min-w-full">
                                                        <tbody className="border-b">
                                                            <tr key={e.id}>
                                                                <td scope="col" className="">
                                                                    <table className="w-full">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="w-2/12 px-6 py-4 whitespace-nowrap text-sm font-medium">{e.firstName}</td>
                                                                                <td className="w-2/3 px-6 py-4 whitespace-nowrap text-lg font-medium bg-gray-400">area</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    {
                                                                        e.Objectives.map((l , i) => {
                                                                            return (
                                                                                <table className="w-full">
                                                                                    <tbody>
                                                                                        <tr key={l.id}>
                                                                                            <td className="w-2/12 px-6 py-4 whitespace-nowrap text-sm font-medium"></td>
                                                                                            <td className="w-2/3 px-6 py-4 whitespace-nowrap text-sm font-medium bg-gray-200">
                                                                                                <table className="w-full">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td className="w-80 whitespace-nowrap text-sm font-medium">{l.name}</td>
                                                                                                            <td className="w-72 whitespace-nowrap text-sm font-medium">Progress</td>
                                                                                                            <td className="whitespace-nowrap text-sm font-medium">{dateFormat(e.updatedAt)}</td>
                                                                                                            <td  
                                                                                                                onClick={(c) => {
                                                                                                                    c.preventDefault()
                                                                                                                    submitDeleteLessonArea(e.id , l.id)
                                                                                                                    }
                                                                                                                }
                                                                                                                className="notIncludePrint whitespace-nowrap text-sm font-medium pointer-events-auto">
                                                                                                                <a href="#">X</a>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            )
                                                                        })
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                )
                                            })
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <></>
                    )
                }
        </>
    )
}

export default forwardRef(Table1)