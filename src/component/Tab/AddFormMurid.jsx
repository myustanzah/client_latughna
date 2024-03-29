import { useState } from "react";
// modal
import { useDispatch, useSelector } from "react-redux"
import { fungsiGetDataObservation, fungsiSelectStudent, fungsiStoreStudent } from "../../store/actionCreator"
import ModalAddStudent from "../Modal/ModalAddStudent"
import { getStudent } from "../../api/studentControler";
import { UniversalErrorResponse } from "../../helper/UniversalResponse";


export default function AddFormMurid(){

const students = useSelector(state => state.StudentReducer.studentData)
const selectStudents = useSelector(state => state.StudentReducer.selectStudent)
const dispatch = useDispatch()

function handleSelectStudent(value){
    dispatch(fungsiSelectStudent(value))
    dispatch(fungsiGetDataObservation())
}

function submitOrderBy(e) {
    console.log("masuk sini")
    let order = e.target.value
    getStudent(order)
    .then((response)=>{
      dispatch(fungsiStoreStudent(response.data.content))
    })
    .catch((err)=>{
      if (err.response === undefined) {
        UniversalErrorResponse(503, "Your internet or server has offline")
      }
      UniversalErrorResponse(err.response.data.status, err.response.data.messages)
    })
  }

    return (
        <>
             <div className="w-3/12 mb-12 xl:mb-0 px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                            <li className="mr-1 last:mr-0 flex-auto text-left text-xl text-white font-bold">
                                <p>Students</p>
                            </li>
                        </ul>
                            <ModalAddStudent />  
                        <div className="flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className="" id="link1">
                                    {
                                        students.length < 1 ? (
                                            <button>Data Not Found</button>
                                        ) : (
                                            students.map((e, i) => {
                                                if (e.hide === false) {
                                                    return (
                                                        <button 
                                                                key={e.id} 
                                                                onClick={()=> handleSelectStudent(i)} 
                                                                className={"w-full hover:bg-blue-500 text-left font-semibold hover:text-white py-2 px-4 border hover:border-transparent " +
                                                                (selectStudents === i ? "bg-blue-500 text-white" : "bg-transparent text-black" )
                                                                }>
                                                                {e.firstName}
                                                        </button>
                                                        
                                                    )
                                                }
                                            })
                                        )
                                    }
                                    
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <select className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" name="filterStudent" id="filterStudent">
                                <option value="firstName" onClick={submitOrderBy}>First Name</option>
                                <option value="lastName" onClick={submitOrderBy}>Last Name</option>
                                <option value="youngestFirst" onClick={submitOrderBy}>Youngest First</option>
                                <option value="oldestFirst" onClick={submitOrderBy}>Oldest First</option>
                        </select>
                    </div>
                </div>
        </>
    )
}