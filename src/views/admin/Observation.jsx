import React, { useRef } from "react";
import { useState } from "react";

// Components
import Filter from "../../Filter/Filter";

// TabMurid
import AddFormMurid from "../../component/Tab/AddFormMurid";

// Table
import TableObservations from "../../component/Table/TableObservations";
import { addObservation } from "../../api/observationController";
import { useDispatch, useSelector } from "react-redux";
import { fungsiGetDataObservation, fungsiUpdateData } from "../../store/actionCreator";
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../helper/UniversalResponse";
import Loading from "../../component/Modal/Loading"


export default function Observation(){

    const fileUpload = useRef(null)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const studentSelected = useSelector((state) => state.StudentReducer.selectStudent)
    const studentId = useSelector((state) => state.StudentReducer.studentData[studentSelected])
    const [description, setDescription] = useState('')

    

    const handleObservation = (e) => {
        e.preventDefault()

        setLoading(true)
        let payload = {
            file: fileUpload.current.files[0],
            data: {
                description: description,
                studentId: studentId.id
            }
        }
        
        addObservation(payload)
        .then((response)=>{
            if(response.data.status === 200){
                dispatch(fungsiGetDataObservation())
                UniversalSuccessResponse("Success", "Data berhasil ditambahkan")
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




    return (
        <>
            <div className="flex flex-wrap mt-4">
                <AddFormMurid />
                    <div className="flex flex-col">
                        <div className="flex">
                                <form 
                                onSubmit={handleObservation}
                                // encType="multipart/form-data" 
                                // method="post" 
                                // action="http://localhost:3009/observation/add" 
                                className="flex flex-col ml-3">
                                    <input ref={fileUpload} name="file_upload" type="file" className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-violet-700 hover:file:bg-violet-100 mb-5"/>
                                    <textarea name="descriptionObservation" placeholder="Descriptions" id="" cols="60" rows="4"
                                    onChange={(e)=> setDescription(e.target.value)}
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    ></textarea>
                                    <div className="mt-3">
                                        <button className="mr-3">cancel</button>
                                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                                value="Submit"
                                        >
                                            Save Description
                                        </button>
                                    </div>
                                </form>
                        </div>
                        <Filter/>
                        <TableObservations />
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
    )
}