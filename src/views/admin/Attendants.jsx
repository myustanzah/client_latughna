import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// components
import AddFormMurid from "../../component/Tab/AddFormMurid";
import { dateFormatymd, getDays, handleNewDate } from "../../helper/handleDate";

export default function Attendants() {


  const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
  const sessionStudent = useSelector(state => state.StudentReducer.studentData[selectStudent])
  const [fillDate, setFillDate] = useState(null)
  const [presentAll, setPresentAll] = useState({
    "present": false,
    "absent": false,
    "tardy": false
  })
  const [att, setAtt] = useState([])

  function handleSubmit(e, i){
    

    let set = {
        idSession: i,
        [e.target.name]: e.target.checked
    }

    console.log(set)

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
                                                                            defaultChecked={presentAll.present} 
                                                                            name="present"
                                                                            onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                            className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                            type="checkbox" />
                                                                        <label>Present</label>
                                                                        <input 
                                                                            defaultChecked={presentAll.absent}
                                                                            name="absent"
                                                                            onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                            className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                            type="checkbox" />
                                                                        <label>Absent</label>
                                                                        <input
                                                                            defaultChecked={presentAll.tardy}
                                                                            name="tardy"
                                                                            onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                            className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                            type="checkbox" />
                                                                        <label>Tardy</label>
                                                                    </td>
                                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                        <input
                                                                            defaultValue=""
                                                                            onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                            name="comment"
                                                                            type="text" />
                                                                    </td>
                                                                </>
                                                            ) : (

                                                                e.Attendances.map((l, c) => {

                                                                    if (dateFormatymd(l.createdAt) === fillDate) {
                                                                        return (
                                                                            <>
                                                                                <td className="flex space-x-4 items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                    <input
                                                                                        defaultChecked={l.present} 
                                                                                        name="present"
                                                                                        onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Present</label>
                                                                                    <input 
                                                                                        defaultChecked={l.absent}
                                                                                        name="absent"
                                                                                        onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Absent</label>
                                                                                    <input
                                                                                        defaultChecked={l.tardy} 
                                                                                        name="tardy"
                                                                                        onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Tardy</label>
                                                                                </td>
                                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                    <input
                                                                                     defaultValue={l.comment} 
                                                                                     onChange={(subs)=> handleSubmit(subs, e.id)}
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
                                                                                        onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Present</label>
                                                                                    <input 
                                                                                        defaultChecked={presentAll.absent}
                                                                                        name="absent"
                                                                                        onChange={(subs)=> handleSubmit(subs, e.id)}
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Absent</label>
                                                                                    <input
                                                                                        defaultChecked={presentAll.tardy}
                                                                                        name="tardy"
                                                                                        onChange={(subs)=> handleSubmit(subs, e.id)} 
                                                                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                                        type="checkbox" />
                                                                                    <label>Tardy</label>
                                                                                </td>
                                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                    <input
                                                                                     defaultValue=""
                                                                                     onChange={(subs)=> handleSubmit(subs, e.id)}
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
                         onClick={handleSubmit}
                         className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                         type="button">Save</button>
                    </div>
          </div>
      </div>
    </>
  );
}
