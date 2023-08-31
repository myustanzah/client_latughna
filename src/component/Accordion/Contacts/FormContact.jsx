import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addContact, uploadProfileContact } from "../../../api/contactController"
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../../helper/UniversalResponse"
import { fungsiIndexStudent, fungsiAddContact } from "../../../store/actionCreator"
// import useFetchCountry from "../../../hooks/fecthCountry"
import { url_image } from "../../../api/api"
import { useRef } from "react"
import Loading from "../../Modal/Loading"

export default function FormContact(){
    const [loading, setLoading] = useState(false)
    const contactPhoto = useRef(null)
    const [showFormContact, setShoeFormContact] = useState(false)
    const [inputContact, setInputContact] = useState({
        firstName: "", 
        lastName: "",
        relationship: "", 
        comment: "",
        homePhone: "", 
        mobilePhone: "",
        email: "", 
        homeAddress: "", 
        city: "",
        state: "", 
        postalCode: "", 
        workAddress: "",
        cityWork: "", 
        stateWork: "", 
        postalCodeWork: ""
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

    function handleInputContact(e) {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        setInputContact({
            ...inputContact, 
            [name]: value
        })
    }

    function handleLoading(){
        if(!loading){
            <></>
        } else {
            return (
                <Loading></Loading>
            )
        }
    }

    function submitInputContact(e){
        setLoading(true)
        e.preventDefault()
        let payload = {
            id: studentsData[selectStudent].id,
            data: inputContact
        }
        addContact(payload)
        .then((response)=>{
            if(response.data.status === 200 || response.data.status === 201){
                if (contactPhoto.current.files[0]) {
                    let payload = {
                        id: response.data.content.id,
                        file: contactPhoto.current.files[0]
                    }
                    uploadProfileContact(payload)
                    .then((response)=>{
                        dispatch(fungsiIndexStudent())
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                }
                dispatch(fungsiIndexStudent())
                UniversalSuccessResponse("Success", "Data berhasil diupdate")
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
                window.location.reload()
            }, 3000)
        })
    }

    useEffect(()=>{
        if (!isEdit) {
            if(studentsData[selectStudent].Contact){
                setInputContact(studentsData[selectStudent].Contact)
            } else {
                setInputContact({
                    firstName: "", 
                    lastName: "",
                    relationship: "", 
                    comment: "",
                    homePhone: "", 
                    mobilePhone: "",
                    email: "", 
                    homeAddress: "", 
                    city: "",
                    state: "", 
                    postalCode: "", 
                    workAddress: "",
                    cityWork: "", 
                    stateWork: "", 
                    postalCodeWork: ""
                })
            }
        }
    }, [studentsData[selectStudent].Contact])

    return (
        <div className="w-full flex flex-row">
            {
                showFormContact ? (
                    <>
                    <form className="w-full flex flex-row" onSubmit={submitInputContact}>
                        <div className="w-4/6 "> 
                            <table className="w-11/12">
                                <tr>
                                    <td>
                                        <label className="mr-5">First Name</label>
                                    </td>
                                    <td>
                                        <input onChange={handleInputContact} 
                                        defaultValue={inputContact.firstName}
                                        // disabled={!isEdit}
                                        name="firstName" type="text" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Last Name</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        defaultValue={inputContact.lastName}
                                        // disabled={!isEdit}
                                        name="lastName" type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Relationship</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        defaultValue={inputContact.relationship} 
                                        // disabled={!isEdit}
                                        name="relationship" 
                                        type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Comments</label>
                                    </td>
                                    <td>
                                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="comment"
                                    placeholder="Your message"
                                    onChange={handleInputContact}
                                    defaultValue={inputContact.comment}
                                    // disabled={!isEdit}
                                    ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Home Phone</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        defaultValue={inputContact.homePhone} 
                                        // disabled={!isEdit}
                                        name="homePhone" 
                                        type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>        
                                <tr>
                                    <td>
                                        <label className="mr-5">Mobile Phone</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        defaultValue={inputContact.mobilePhone} 
                                        // disabled={!isEdit}
                                        name="mobilePhone" 
                                        type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">E-mail</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        // disabled={!isEdit}
                                        defaultValue={inputContact.email} 
                                        name="email" 
                                        type="email" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Home Address</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        defaultValue={inputContact.homeAddress} 
                                        name="homeAddress" 
                                        type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">City</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        defaultValue={inputContact.city} 
                                        // disabled={!isEdit}
                                        name="city" 
                                        type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">State</label>
                                    </td>
                                    <td className="flex flex-row justify-between">
                                        <input 
                                        onChange={handleInputContact} 
                                        // disabled={!isEdit}
                                        defaultValue={inputContact.state} 
                                        name="state" 
                                        type="text" 
                                        className="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                        <label>Postal Code</label>
                                        <input 
                                        onChange={handleInputContact} 
                                        // disabled={!isEdit}
                                        defaultValue={inputContact.postalCode} 
                                        name="postalCode" 
                                        type="text" 
                                        className="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />     
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Work Address</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        // disabled={!isEdit}
                                        defaultValue={inputContact.workAddress} 
                                        name="workAddress" 
                                        type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">City</label>
                                    </td>
                                    <td>
                                        <input 
                                        onChange={handleInputContact} 
                                        // disabled={!isEdit}
                                        defaultValue={inputContact.cityWork} 
                                        name="cityWork" 
                                        type="text" 
                                        className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">State</label>
                                    </td>
                                    <td className="flex flex-row justify-between">
                                        <input 
                                        onChange={handleInputContact} 
                                        // disabled={!isEdit}
                                        defaultValue={inputContact.stateWork} 
                                        name="stateWork" 
                                        type="text" 
                                        className="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                        <label>Postal Code</label>
                                        <input 
                                        onChange={handleInputContact}
                                        // disabled={!isEdit} 
                                        defaultValue={inputContact.postalCodeWork} 
                                        name="postalCodeWork" 
                                        type="text" 
                                        className="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />     
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>
                                        <label className="mr-5">Country</label>
                                    </td>
                                    <td>
                                        <select className="form-select appearance-none rounded block w-6/12 px-1 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                                            {
                                                dataCountry.map((data)=>{
                                                    return (<option value="">{data.name}</option>)
                                                })
                                            }
                                        </select>
                                    </td>
                                </tr> */}
                                {/* <tr>
                                    <td></td>
                                    <td>
                                        <tr>
                                            <td className="w-3/12">
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <label>Emergency Contact</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12">
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <label>Billing Contact</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12">
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <label>Can Pick Up</label>
                                            </td>
                                        </tr>
                                    </td>
                                    
                                </tr> */}
                            </table> 
                        </div>

                        <div className="w-2/6 flex flex-col space-y-4 items-center">
                        <div className="w-40 h-40 border flex items-center">
                            {
                                !inputContact.imgProfil ? (
                                    <img src={require('../../../assets/Profile-Male-PNG.png')} alt="" />
                                ) : (
                                    <img src={`${url_image}/contact/${inputContact.imgProfil}`} alt="profil" />
                                )
                            }
                        </div>
                            <input 
                            // disabled={!isEdit} 
                            ref={contactPhoto} 
                            name="file_upload" 
                            type="file" 
                            className="rounded"/>

                            <div>
                                
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={()=> {
                                                disableEdit()
                                                setShoeFormContact(false)
                                                }
                                            }
                                    >Cancel</button>
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                            onClick={submitInputContact}
                                    >Save</button>
                                      
                            </div>

                        </div>
                    </form>
                    </>
                ) : (
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={()=> {
                                enableEdit()
                                setShoeFormContact(true)}}
                    >+ Add Contact</button>
                )
            }
            {handleLoading()}
        </div>
    )
}