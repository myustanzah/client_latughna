import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// api
import { addMedical } from "../../../api/medicalController";
// helper
import { UniversalErrorResponse } from "../../../helper/UniversalResponse";
// import useFetchCountry from "../../../hooks/fecthCountry";
import { fungsiAddContact, fungsiIndexStudent } from "../../../store/actionCreator";


export default function MedicalInformation(){

    const [showFormMedical, setFormMedical] = useState(false)
    const [inputMedical, setInputMedical] = useState({
        medicalCode: null,
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        insuranceProvider: "",
        insuranceNumber: "",
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
    
    function handleInputMedical(e) {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        setInputMedical({
            ...inputMedical, 
            [name]: value
        })
    }
    
    function submitAddMedical(e){
        e.preventDefault()
        let payload = {
            id: studentsData[selectStudent].id,
            data: inputMedical
        }
        addMedical(payload)
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
            if(studentsData[selectStudent].Medical){
                setInputMedical(studentsData[selectStudent].Medical)
            } else {
                setInputMedical({
                    medicalCode: "",
                    name: "",
                    phone: "",
                    address: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    insuranceProvider: "",
                    insuranceNumber: "",
                    notes: ""
                })
            }
        }
    }, [studentsData[selectStudent].Medical])



    return (
        <div className="w-full flex flex-col">
            {
                showFormMedical ? (
                    <>
                        <div className="w-full">
                            <table>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <select 
                                            defaultValue={inputMedical.medicalCode ? inputMedical.medicalCode : "1"}
                                            onChange={handleInputMedical}
                                            name="medicalCode"
                                            id="medicalCode"
                                            className="form-select appearance-none rounded block w-6/12 px-1 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                <option value="1">Doctor</option>
                                                <option value="2">Dentist</option>
                                                <option value="3">Prefered Hospital</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Name</label>
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            defaultValue={inputMedical.name}
                                            name="name"
                                            onChange={handleInputMedical}
                                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Phone</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text" 
                                        name="phone"
                                        defaultValue={inputMedical.phone}
                                        onChange={handleInputMedical}
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Address</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text" 
                                        defaultValue={inputMedical.address}
                                        name="address"
                                        onChange={handleInputMedical}
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">City</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text" 
                                        defaultValue={inputMedical.city}
                                        name="city"
                                        onChange={handleInputMedical}
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">State</label>
                                    </td>
                                    <td className="flex flex-row justify-between">
                                        <input 
                                        type="text" 
                                        defaultValue={inputMedical.state}
                                        name="state"
                                        onChange={handleInputMedical}
                                        className="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                        <label>Postal Code</label>
                                        <input 
                                        type="text" 
                                        defaultValue={inputMedical.postalCode}
                                        name="postalCode"
                                        onChange={handleInputMedical}
                                        className="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />     
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Insurance Provider</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text" 
                                        defaultValue={inputMedical.insuranceProvider}
                                        name="insuranceProvider"
                                        onChange={handleInputMedical}
                                        className="form-control block w-10/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Insurance Number</label>
                                    </td>
                                    <td>
                                        <input 
                                        type="text"
                                        defaultValue={inputMedical.insuranceNumber}
                                        name="insuranceNumber"
                                        onChange={handleInputMedical} 
                                        className="form-control block w-10/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
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
                                    onChange={handleInputMedical}
                                    defaultValue={inputMedical.notes}
                                    name="notes"
                                    placeholder="Your message"
                                    ></textarea>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full flex justify-end">
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={()=> {
                                        disableEdit()
                                        setFormMedical(false)
                                    }}
                            >Cancel</button>
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={submitAddMedical}
                            >Save</button>
                        </div>
                    </>
                ) : (
                    <button className="w-4/12 bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=> {
                        enableEdit()
                        setFormMedical(true)
                    }}
                    >+ Add Medical Information</button>
                )
            }
        </div>
    )
}