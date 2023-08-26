import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSession } from "../../api/studentControler";
import Loading from "../../component/Modal/Loading";

// components
import AddFormMurid from "../../component/Tab/AddFormMurid";
import { dateFormatymd, getDays, handleNewDate } from "../../helper/handleDate";
import { UniversalErrorResponse } from "../../helper/UniversalResponse";
import { fungsiIndexStudent } from "../../store/actionCreator";

export default function Attendants() {


  const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
  const sessionStudent = useSelector(state => state.StudentReducer.studentData[selectStudent])
  const [fillDate, setFillDate] = useState(null)
  const [presentAll, setPresentAll] = useState({})
  const [comment, setComment] = useState([])
  const [att, setAtt] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

function handleChecked(e, id){
    for (let i = 0; i < att.length; i++) {
        if (att[i].idSession === id) {
            att[i][e.target.name] = e.target.checked
        } else {

            if (presentAll.present === e.target.name) {
            } else {
                setPresentAll({
                    ...presentAll,
                    idSession: id,
                    [e.target.name]: e.target.checked
                })
            }
        }
    }
    att.push(presentAll)
}
  function handleComment(e, id){

    let inputAbsen = {
        comment: ""
    }

    if (att.length === 0) {
        inputAbsen.idSession = id
        inputAbsen[e.target.name] = e.target.value
        
        comment.push(inputAbsen)
    } else {
        for (let i = 0; i < comment.length; i++) {
           if (comment[i].idSession === id) {
                comment[i][e.target.name] = e.target.value
           } else {
                inputAbsen.idSession = id
                inputAbsen[e.target.name] = e.target.value
                
            }
        }
        comment.push(inputAbsen)
    }
  }

  function submitAbsen(){
    console.log(att)
    // setLoading(true)
    //   storeSession(att)
    //   .then((response)=>{
    //         if(response.data.status === 200){
    //           dispatch(fungsiIndexStudent())
    //         } else {
    //             UniversalErrorResponse("Error", JSON.stringify(response.data))
    //         }
    //   })
    //   .catch((error)=>{
    //       if (error.response === undefined) {
    //           UniversalErrorResponse(503, "Your interner or server has offline")
    //         }
    //         UniversalErrorResponse(error.response.data.status, error.response.data.messages)
    //   })
    //   .finally(()=>{
    //       setTimeout(()=>{
    //           setLoading(false)
    //         }, 5000)
    //   })
  }

    
  

  function handleFilterDate(e){
    e.preventDefault()
    let value = e.target.value
    setFillDate(value)
  }

  function handlePresent(e){
    e.preventDefault()
    let checked = e.target.checked
    let name = e.target.name

    for (const key in presentAll) {
        if (key === name) {
            setPresentAll({
                ...presentAll,
                [key]: checked
            })
        }
    }
  }

  useState(()=>{
    setFillDate(handleNewDate())
  })
    

  return (
    <>
      <div className="flex flex-wrap mt-4">
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
                                sessionStudent.Sessions.map((e, i) => {
                                    for (const key in e) {
                                        if (getDays(fillDate).toLowerCase() === key) {
                                            if (e[key]) {
                                                return (
                                                    <tr key={i} className="border-b">
                                                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            <label>{e.name}</label>
                                                        </td>
                                                        {
                                                            e.Attendances.length === 0 ? (
                                                                <>
                                                                    <td className="flex space-x-4 items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                        <input
                                                                            defaultChecked={presentAll.present ? presentAll.present : false} 
                                                                            name="present"
                                                                            onChange={(subs)=> handleChecked(subs, e.id)}
                                                                            className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                            type="checkbox" />
                                                                        <label>Present</label>
                                                                        <input 
                                                                            defaultChecked={presentAll.absent ? presentAll.absent : false}
                                                                            name="absent"
                                                                            onChange={(subs)=> handleChecked(subs, e.id)}
                                                                            className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                            type="checkbox" />
                                                                        <label>Absent</label>
                                                                        <input
                                                                            defaultChecked={presentAll.tardy ? presentAll.tardy : false}
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
                                                                </>
                                                            ) : (

                                                                e.Attendances.map((l, c) => {

                                                                    if (dateFormatymd(l.createdAt) === fillDate) {
                                                                        return (
                                                                            <>
                                                                                <td key={l.id} className="flex space-x-4 items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                    <input
                                                                                        defaultChecked={l.present} 
                                                                                        name="present"
                                                                                        onChange={(subs)=> handleChecked(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Present</label>
                                                                                    <input 
                                                                                        defaultChecked={l.absent}
                                                                                        name="absent"
                                                                                        onChange={(subs)=> handleChecked(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Absent</label>
                                                                                    <input
                                                                                        defaultChecked={l.tardy} 
                                                                                        name="tardy"
                                                                                        onChange={(subs)=> handleChecked(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Tardy</label>
                                                                                </td>
                                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                    <input
                                                                                     defaultValue={l.comment} 
                                                                                     onChange={(subs)=> handleComment(subs, e.id)}
                                                                                     name="comment"
                                                                                     type="text" />
                                                                                </td>  
                                                                            </>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <>
                                                                                <td className="flex space-x-4 items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                    <input
                                                                                        defaultChecked={presentAll.present} 
                                                                                        name="present"
                                                                                        onChange={(subs)=> handleChecked(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Present</label>
                                                                                    <input 
                                                                                        defaultChecked={presentAll.absent}
                                                                                        name="absent"
                                                                                        onChange={(subs)=> handleChecked(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Absent</label>
                                                                                    <input
                                                                                        defaultChecked={presentAll.tardy}
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
                                                                            </>
                                                                        )
                                                                    }
                                                                })
                                                            )
                                                        }
                                                        

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
    </>
  );
}
