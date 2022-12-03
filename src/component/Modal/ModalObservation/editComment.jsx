import { useState } from "react"
import { useDispatch } from "react-redux"
import { editComment } from "../../../api/commentController"
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../../helper/UniversalResponse"
import { fungsiGetDataObservation } from "../../../store/actionCreator"
import Loading from "../Loading"

export default function ModalEditComment(props){

    const [inputEditComment, setInputEditComment] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    function handleInputEditComment(e){
        e.preventDefault()
        setInputEditComment(e.target.value)
    }

    function submitInputDesc(e){
        e.preventDefault()

        let payload = {
            id: props.dataId,
            comment: inputEditComment
        }
        setLoading(true)
        editComment(payload)
        .then((response) => {
            if (response.data.status === 201) {
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
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="ModalEditComment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Edit Observation</h5>
                        <button type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body relative p-4">
                        {/* Form */}                        
                            <form onSubmit={submitInputDesc}>
                                
                                <div className="form-group mb-6">
                                    <textarea className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlTextarea13"
                                            rows="3"
                                            name="descriptions"
                                            defaultValue={props.dataEdit}
                                            onChange={handleInputEditComment}
                                            placeholder="Descriptions"
                                    ></textarea>
                                </div>
                                <div
                                    className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                    <button type="button" className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" 
                                    data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Save changes</button>
                                </div>
                            </form>
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
            </div>
    )
}