import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLessonPlan } from "../../api/lessonPlanController";
import { UniversalErrorResponse } from "../../helper/UniversalResponse";
import { fungsiIndexArea } from "../../store/actionCreator";
import Loading from "../Modal/Loading";

// components

export default function CardAreaLessonPlans() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const shoTypeTable = useSelector(state => state.UserReducer.cardPageVisit)
  const selectIndexStudent = useSelector(state => state.StudentReducer.selectStudent)
  const selectStudentData = useSelector(state => state.StudentReducer.studentData[selectIndexStudent])
  const selectObjective = useSelector(state => state.AreaReducer.selectObjective)
  const areas = useSelector(state => state.AreaReducer)
  
  const submitDeleteLessonArea = (value) => {
    let payload = {
      studentId: selectStudentData.id,
      objectiveId: value
    }
    setLoading(true)
    deleteLessonPlan(payload)
    .then((response)=>{
      if (loading === false) {
        if(response.data.status === 200){
          dispatch(fungsiIndexArea())
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
      <div className="relative flex flex-col min-w-0 break-words bg-sky-50 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex-col items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Area Lesson Plan
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                View By Student
              </button>
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                View By Area
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              
              
              {

                shoTypeTable === 1 ? (
                  selectStudentData.Objectives.length <= 0 ? (
                    <tr className="text-center">
                      Data Not Found
                    </tr>
  
                  ) : (
                    selectStudentData.Objectives.map((data, i) => {
                        return (
                                <tr key={i}>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                    {data.name}
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <button onClick={()=> submitDeleteLessonArea(data.id)} className="bg-sky-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                      x
                                    </button>
                                  </td>
                                </tr>
                            )
                      })
                   )
                ) : (
                  areas.areaData[areas.selectArea].Objectives[selectObjective].Students.length <= 0 ? (
                    <tr className="text-center">
                       Data Not Found
                    </tr>
  
                  ) : (
                    areas.areaData[areas.selectArea].Objectives[selectObjective].Students.map((data, i) => {
                        return (
                                <tr key={i}>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                    {data.firstName}
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  <button className="bg-sky-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    x
                                  </button>
                                  </td>
                                </tr>
                            )
                      })
                   )
                )

              }
            </tbody>
          </table>
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
  );
}
