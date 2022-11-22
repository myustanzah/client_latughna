import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLessonPlan } from "../../api/lessonPlanController"
import { hideObjective } from "../../api/objectiveController"
import { UniversalErrorResponse } from "../../helper/UniversalResponse"
import { fungsiIndexArea, fungsiIndexStudent } from "../../store/actionCreator"
import Loading from "../Modal/Loading"

export default function Table(props){
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
  const studentId = useSelector(state => state.StudentReducer.studentData[selectStudent])
  
  function submitHideObjective(value){

    setLoading(true)
    hideObjective(value)
    .then((response)=> {
        if(response.data.status === 200){
          // window.location.reload()
          dispatch(fungsiIndexArea())
        } else {
          UniversalErrorResponse("Error", JSON.stringify(response.data))
        }
    })
    .catch((error)=>{
      if (error.response === undefined) {
        UniversalErrorResponse(503, "Your internet or server has offline")
      }
      UniversalErrorResponse(error.response.data.status, error.response.data.messages)
    })
    .finally(()=>{
      setTimeout(()=>{
        setLoading(false)
      }, 3000)
    })
    
  }

  function submitAddLessonPlan(value){
    setLoading(true)
    let payload = {
      studentId: studentId.id,
      objectiveId: value
    }
    addLessonPlan(payload)
    .then((response)=>{
      if(response.data.status === 200){
        dispatch(fungsiIndexArea())
        dispatch(fungsiIndexStudent())
      } else {
        UniversalErrorResponse("Error", JSON.stringify(response.data))
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
      }, 3000)
    })
  }


    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {
                    props.showTypeTable === 1 ? (
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Hide
                        </th>
                    ) : (
                      <th>
                        <></>
                      </th>
                    )
                }
                {
                    props.showTypeTable === 1 ? (
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Works
                        </th>
                    ) : (
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Student
                        </th>
                    )
                }
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Progress
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Last Update
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Plan
                </th>
              </tr>
            </thead>
            <tbody>
              {
                props.data.length >= 1 ? (
                  <>
                    {
                      props.showTypeTable === 1 ? (
                        props.data.map((e) => {
                          return (
                              e.hide === false ? (
                                <tr key={e.id}>
                                <td>
                                    <button onClick={()=>submitHideObjective(e.id)} className="bg-sky-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-4" type="button">
                                            x
                                    </button>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {e.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  <div className="flex flex-nowrap justify-between">
                                    <input type="checkbox" className="appearance-none checked:bg-blue-500" />
                                    <input type="checkbox" className="appearance-none checked:bg-blue-500" />
                                    <input type="checkbox" className="appearance-none checked:bg-blue-500" />
                                  </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {e.lastUpdate}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <button onClick={()=> submitAddLessonPlan(e.id)} className="bg-sky-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                  +
                                </button>
                                </td>
                              </tr>
                              ) : (
                                <></>
                              ) 
                          )

                        })
                      ) : (
                        props.data.map((e) => {
                      return (

                                <tr key={e.id}>
                                  <td>
                                      <></>                                        
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {e.name}
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex flex-nowrap justify-between">
                                      <input type="checkbox" className="appearance-none checked:bg-blue-500" />
                                      <input type="checkbox" className="appearance-none checked:bg-blue-500" />
                                      <input type="checkbox" className="appearance-none checked:bg-blue-500" />
                                    </div>
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {e.lastUpdate}
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  <button className="bg-sky-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    +
                                  </button>
                                  </td>
                                </tr>
                                )
                              })
                            )
                          }
                      </>

                ) : (
                  <tr>
                    <td>
                      Data not Found
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
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