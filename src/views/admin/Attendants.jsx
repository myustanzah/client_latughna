import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSession } from "../../api/studentControler";
import Loading from "../../component/Modal/Loading";

// components
import AddFormMurid from "../../component/Tab/AddFormMurid";
import { getDays, handleNewDate } from "../../helper/handleDate";
import { UniversalErrorResponse } from "../../helper/UniversalResponse";
import { fungsiIndexStudent } from "../../store/actionCreator";
import TableAttendance from "../../component/Table/TableAttendance";
import { useReactToPrint } from "react-to-print";

export default function Attendants() {

  const componentRef = useRef()
  const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
  const sessionStudent = useSelector(state => state.StudentReducer.studentData[selectStudent])
  const [fillDate, setFillDate] = useState(null)
  const [att, setAtt] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  useEffect(()=>{
    for (let i = 0; i < sessionStudent.Sessions.length; i++) {
        sessionStudent.Sessions[i]["present"] = false
        sessionStudent.Sessions[i]["absent"] = false
        sessionStudent.Sessions[i]["tardy"] = false
        sessionStudent.Sessions[i]["comment"] = ""
    }
    setAtt(sessionStudent.Sessions)
  }, [sessionStudent]);
  
  function handleChecked(e, id){
    let name = e.target.name
    let value = e.target.checked

    let param = {
        "present": null,
        "absent": null,
        "tardy": null
    }

    const updateAtt = att.map((item)=>{
        if (item.id === id) {
            for (const key in param) {
              if (key === name) {
                item[key] = value;
              } else {
                item[key] = false;
              }
            }
          }
          return item;
    })

    setAtt(updateAtt);
  }

  function handleComment(e, id){

    let name = e.target.name
    let value = e.target.value

    const updateAtt = att.map((item)=>{
        if (item.id === id) {
            item[name] = value
        }
        return item;
    })

    setAtt(updateAtt);    
  }

  function submitAbsen(){
    setLoading(true)
      storeSession(att)
      .then((response)=>{
            if(response.data.status === 200){
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
              window.location.reload()
            }, 5000)
      })
  }


  function handleFilterDate(e){
    e.preventDefault()
    let value = e.target.value
    setFillDate(value)
  }

  useState(()=>{
    setFillDate(handleNewDate())
  })
    

  return (
    <>
      <div className="mb-10 flex flex-wrap mt-4">
          <AddFormMurid />
          <div className="shadow-lg bg-slate-200 rounded">
              <table className="min-w-full">
                        <thead className="border-b">
                            <tr>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Session
                              </th>
                              <th scope="col" className="flex space-x-4 text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {/* <input
                                    defaultChecked={presentAll.present}
                                    name="present"
                                    onChange={handlePresent}
                                    className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="checkbox" />
                                  <label>Present</label>
                                  <input 
                                    defaultChecked={presentAll.absent}
                                    name="absent"
                                    onChange={handlePresent}
                                    className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="checkbox" />
                                  <label>Absent</label>
                                  <input
                                    defaultChecked={presentAll.tardy}
                                    name="tardy" 
                                    onChange={handlePresent}
                                    className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="checkbox" />
                                  <label>Tardy</label> */}
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  <label>Entering updates</label>
                                  <input 
                                   type="date"
                                   onChange={handleFilterDate}
                                   defaultValue={fillDate}/>
                              </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                att.map((e, i) => {
                                    for (const key in e) {
                                        if (getDays(fillDate).toLowerCase() === key) {
                                            if (e[key]) {
                                                return (
                                                    <tr key={i} className="border-b">
                                                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            <label>{e.name}</label>
                                                        </td>
                                                            <td key={e.id} className="flex space-x-4 items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                <input
                                                                    checked={e["present"]}
                                                                    name="present"
                                                                    onChange={(subs)=> handleChecked(subs, e.id)}
                                                                    className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                    type="checkbox" />
                                                                <label>Present</label>
                                                                <input 
                                                                    checked={e["absent"]}
                                                                    name="absent"
                                                                    onChange={(subs)=> handleChecked(subs, e.id)}
                                                                    className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                    type="checkbox" />
                                                                <label>Absent</label>
                                                                <input
                                                                    checked={e["tardy"]}
                                                                    name="tardy"
                                                                    onChange={(subs)=> handleChecked(subs, e.id)}
                                                                    className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                    type="checkbox" />
                                                                <label>Tardy</label>
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                <input
                                                                    defaultValue=""
                                                                    onChange={(subs)=> handleComment(subs, e.id)}
                                                                    name="comment"
                                                                    type="text" />
                                                            </td>
                                                    </tr>
                                                )
                                            }
                                        }
                                    }
                                })
                            }
                              
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center w-full pb-8">
                        <button
                         onClick={submitAbsen}
                         className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                         type="button">Save</button>
                    </div>
          </div>
          {
            loading ? (
                <Loading />
            ) : (
                <></>
            )
          }
      </div>
      <div className="p-10 w-full h-1/2 bg-yellow-100">
          <div className="flex flex-row justify-between">
            <div className="w-1/4 flex justify-between items-center">
                <label htmlFor="">Input Tanggal</label>
                <input type="date" onChange={handleFilterDate} defaultValue={fillDate} />
            </div>
            <div>
                <button
                    onClick={handlePrint}
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">PRINT
                </button>
            </div>
          </div>
          <div>
            <TableAttendance ref={componentRef} data={fillDate} />
          </div>
      </div>
    </>
  );
}
