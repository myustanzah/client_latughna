import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAllergy } from "../../../api/allergyController"
import { UniversalErrorResponse } from "../../../helper/UniversalResponse"
import { fungsiAddContact, fungsiIndexStudent } from "../../../store/actionCreator"


export default function FormAllergie(){

    const [showFormAlergi, setShowFormAlergi] = useState(false)
    const [inputAllergy, setInputAllergy] = useState({
        name: "",
        anaphylactic: null,
        notes: ""
    })

    const studentsData = useSelector(state => state.StudentReducer.studentData)
    const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
    const isEdit = useSelector(state => state.UtilReducer.isEdit)
    const dispatch = useDispatch()

    function enableEdit(){
        dispatch(fungsiAddContact(true))
    }
    
    function disableEdit(){
        dispatch(fungsiAddContact(false))
        window.location.reload()
    }

    function handleInputAllergy(e) {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        let checked = e.target.checked
        setInputAllergy({
            ...inputAllergy, 
            [name]: name !== "anaphylactic" ? value : checked
        })
    }

    function submitAddAllergy(e){
        e.preventDefault()
        let payload = {
            id: studentsData[selectStudent].id,
            data: inputAllergy
        }
        addAllergy(payload)
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

    useEffect(()=>{
        if (!isEdit) {
            if(studentsData[selectStudent].Allergy){
                setInputAllergy(studentsData[selectStudent].Allergy)
            } else {
                setInputAllergy({
                    name: "",
                    anaphylactic: null,
                    notes: ""
                })
            }
        }
    }, [studentsData[selectStudent].Allergy])


    return (
        <div className="w-full flex flex-col">
            {
                showFormAlergi ? (
                    <>
                        <div className="w-4/6">
                            <table className="w-11/12">
                                <tr>
                                    <td>
                                        <label className="mr-5">Allergy</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text"
                                        defaultValue={inputAllergy.name}
                                        name="name"
                                        onChange={handleInputAllergy}
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Anaphylactic</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="checkbox"
                                        checked={inputAllergy.anaphylactic ? inputAllergy.anaphylactic : false}
                                        name="anaphylactic"
                                        onChange={handleInputAllergy} 
                                        className="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Notes</label>
                                    </td>
                                    <td>
                                    <textarea 
                                            className="form-control block w-10/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            defaultValue={inputAllergy.notes}
                                            name="notes"
                                            onChange={handleInputAllergy} 
                                            placeholder="Your message"
                                            ></textarea>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="w-full flex justify-end">
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={()=> {
                                        disableEdit()
                                        setShowFormAlergi(false)
                                    }}
                            >Cancel</button>
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={submitAddAllergy}
                            >Save</button>
                        </div>
                    </>

                ) : (
                    <button className="w-4/12 bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=> {
                        enableEdit()
                        setShowFormAlergi(true)
                    }}
                    >+ Add Allergi</button>
                )
            }

        </div>
    )
}