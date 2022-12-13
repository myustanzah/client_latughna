import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateSessionStudent } from "../../../api/studentControler"
import { UniversalErrorResponse } from "../../../helper/UniversalResponse"
import { fungsiAddContact, fungsiIndexStudent } from "../../../store/actionCreator"

export default function SetEnrollment(){

    const studentsData = useSelector(state => state.StudentReducer.studentData)
    const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
    const isEdit = useSelector(state => state.UtilReducer.isEdit)
    const dispatch = useDispatch()
    const [sessionStudent, setSessionStudent] = useState([
        {
            sesi: 1,
            name: "AM Care",
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true
        },
        {
            sesi: 2,
            name: "AM Session",
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true
        },
        {
            sesi: 3,
            name: "Lunch",
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true
        },
        {
            sesi: 4,
            name: "PM Session",
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true
        },
        {
            sesi: 5,
            name: "PM Care",
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true
        }
    ])
    

    function enableEdit(){
        dispatch(fungsiAddContact(true))
    }
    
    function disableEdit(){
        dispatch(fungsiAddContact(false))
        window.location.reload()
    }

    useEffect(()=>{
        if(!isEdit){
            setSessionStudent(studentsData[selectStudent].Sessions)
        }
    }, [studentsData[selectStudent].Sessions])

    const handleSessionStudent = (e) => {
        const name = e.target.name
        const newName = name.split(name[name.length - 1])[0];
        const index = +name[name.length - 1]
        const newValue = e.target.checked;
        
    
        setSessionStudent([...sessionStudent].map((object) => {
          
          if(object.sesi === index) {
            return {
              ...object,
              [newName]: newValue
            }
          }
          else return object;
        }))
    
    }

      function submitEditSessionStudent(){
        
        let payload = {
            id: studentsData[selectStudent].id,
            data: sessionStudent
        }
        updateSessionStudent(payload)
        .then((response) => {
            if (response.data.status === 200 || response.data.status === 201) {
                dispatch(fungsiIndexStudent())
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
            window.location.reload()
        })
      }

    return (
        <div className="w-full flex flex-col">
           <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="w-11/12">
                            <thead className="border-b border-x-gray-500">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Session
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Mon
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Tue
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Wed
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Thu
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Fri
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                sessionStudent.map((e, i) => {
                                  return (
                                          <tr key={i} className="border-b">
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{e.name}</td>
                                              
                                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"monday" + e.sesi} checked={e.monday} />
                                              </td>
                                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"tuesday" + e.sesi} checked={e.tuesday} />
                                              </td>
                                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"wednesday" + e.sesi} checked={e.wednesday} />
                                              </td>
                                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"thursday" + e.sesi} checked={e.thursday} />
                                              </td>
                                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"friday" + e.sesi} checked={e.friday} />
                                              </td>
                                          </tr>
                                  )
                                })
                              }
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                  </div>
            <div className="w-full flex justify-end">
                {
                    !isEdit ? (
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={()=> {
                            enableEdit()
                        }}
                        >Edit</button>
                    ) : (
                        <>
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={()=> {
                                        disableEdit()
                                    }}
                            >Cancel</button>
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={()=>{
                                        // disableEdit()
                                        submitEditSessionStudent()
                                    }}
                            >Save</button>
                        </>

                    )
                }
            </div>

        </div>
    )
}