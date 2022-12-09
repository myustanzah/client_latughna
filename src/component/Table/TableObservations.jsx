import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../api/commentController";
import { deleteObservation } from "../../api/observationController";

// helper
import { dateFormat } from "../../helper/handleDate";
import { UniversalErrorResponse } from "../../helper/UniversalResponse";
import { fungsiGetDataObservation } from "../../store/actionCreator";
import Loading from "../Modal/Loading";
import ModalAddComment from "../Modal/ModalObservation/addComment";
import ModalEditComment from "../Modal/ModalObservation/editComment";
import ModalEditObs from "../Modal/ModalObservation/editObservation";
import { url_image } from "../../api/api";

function TableObservations() {
    const dataObservation = useSelector(state => state.ObservationReducer.observationData)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [dataEditObs, setDataEditObs] = useState({})
    const [dataAddComment, setAddComment] = useState({})
    const [dataEditComment, setEditCOmment] = useState({})
    
    function hendleDeleteObservation(id){
        setLoading(true)
        deleteObservation(id)
        .then((response)=>{
            if(response.data.status === 200){
                dispatch(fungsiGetDataObservation())
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

    function handleDeleteComment(id){
        setLoading(true)
        deleteComment(id)
        .then((response)=>{
            if(response.data.status === 200){
                dispatch(fungsiGetDataObservation())
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
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                        <thead className="border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Date
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Observation
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Progress
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    User
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Tools
                                </th>
                            </tr>
                        </thead>
                        <tbody className="p-5 bg-white">
                            {
                                dataObservation.map((e, i)=>{

                                    return (
                                        <>
                                        <tr key={e.id.toString()} className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dateFormat(e.updatedAt)}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img src={`${url_image}/observation/${e.fileUrl}`} className="object-cover h-20 w-20" alt="img" srcset="" />
                                                <p>{e.description}</p>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <p></p>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <p>{e.User.name}</p>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                                                <div className="flex w-full justify-between">
                                                    <button
                                                        onClick={()=>{
                                                            setDataEditObs({
                                                                ...dataEditObs,
                                                                dataEdit: e.description,
                                                                dataId: e.id
                                                            })
                                                        }} 
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#ModalEditObs"
                                                        className="transition duration-150 ease-in-out">
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button
                                                        onClick={(c)=>{
                                                            c.preventDefault()
                                                            setAddComment({
                                                                ...dataAddComment,
                                                                dataObsId: e.id
                                                            })
                                                        }}
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#AddComment"
                                                        className="transition duration-150 ease-in-out"
                                                    >
                                                        <i className="fa-solid fa-comment"></i>
                                                    </button>
                                                    
                                                    {/* <button>
                                                        <i className="fa-regular fa-envelope"></i>                                           
                                                    </button> */}
                                                    <button
                                                        onClick={(c) => {
                                                            c.preventDefault()
                                                            hendleDeleteObservation(e.id)
                                                        }}
                                                    >
                                                        <i className="fa-regular fa-trash-can"></i>                                           
                                                    </button>
                                                </div>
                                            </td>                                            
                                        </tr>
                                        {
                                            JSON.stringify(e.Comments) === "[]" ? (
                                                <></>
                                            ) : (
                                                e.Comments.map((c) => {
                                                    return (
                                                        <tr className="bg-gray-300" key={c.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {dateFormat(c.updatedAt)}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.description}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            {e.User.name}
                                                            </td>
                                                            <td className="flex justify-between px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                <button 
                                                                data-bs-toggle="modal" 
                                                                data-bs-target="#ModalEditComment"
                                                                className="transition duration-150 ease-in-out"
                                                                onClick={
                                                                    (i) => {
                                                                        i.preventDefault()
                                                                        setEditCOmment({
                                                                            ...dataEditComment,
                                                                            dataId: c.id,
                                                                            dataEdit: c.description
                                                                        })
                                                                    }
                                                                }>
                                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                                </button>
                                                                <a href="#" onClick={
                                                                    (i) => {
                                                                        i.preventDefault()
                                                                        handleDeleteComment(c.id)
                                                                    }
                                                                    }>X</a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            )
                                        }
                                        </>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                {
                    loading ? (
                        <Loading/>
                    ) : (
                        <></>
                    )
                }
                <ModalEditObs dataEdit={dataEditObs.dataEdit} dataId={dataEditObs.dataId} />
                <ModalAddComment dataObsId={dataAddComment.dataObsId}/>
                <ModalEditComment dataEdit={dataEditComment.dataEdit} dataId={dataEditComment.dataId} />
            </div>
        </>
     );
}

export default TableObservations;