import { useState } from "react"
import { useDispatch } from "react-redux"
import { userRegister } from "../../api/userController"
import { generatePassword } from "../../helper/generateRandomPassword"
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../helper/UniversalResponse"
import { fungsiIndexUser } from "../../store/actionCreator"


export default function ModalAddUser(){
    const dispatch = useDispatch()

    const [inputUser, setInputUser] = useState({
        name : '',
        email : '',
        kode_user: '',
        img_profil: '',
        descriptions: ''
    })

    function handleInputUser(e){
        let name = e.target.name
        let value = e.target.value
        setInputUser({
            ...inputUser,
            [name]: value,
            password: generatePassword()
        })
    }

    function handleSubmitNewUser(e){
        e.preventDefault()
        console.log(inputUser)
        userRegister(inputUser)
        .then((response)=>{
            if(response.data.status === 200){
                UniversalSuccessResponse("Success", `Create User success, Please save this password for next LoggedIn : ${inputUser.password}`)
                dispatch(fungsiIndexUser())
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
    }

    return (
        <>
            <button type="button" className="px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
                data-bs-toggle="modal" data-bs-target="#exampleModal">
            + Add User
            </button>
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Add User</h5>
                        <button type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body relative p-4">
                        {/* Form */}

                        
                            <form onSubmit={handleSubmitNewUser}>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                        id="exampleInput7"
                                        name="name"
                                        onChange={handleInputUser}
                                        placeholder="Name" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                        id="exampleInput8"
                                        name="email"
                                        onChange={handleInputUser}
                                        placeholder="Email address" />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlTextarea13"
                                            rows="3"
                                            name="descriptions"
                                            onChange={handleInputUser}
                                            placeholder="Descriptions"
                                    ></textarea>
                                </div>
                                <div className="form-group mb-6">
                                    <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                        aria-label="Default select example"
                                        onChange={handleInputUser}
                                        name="kode_user"
                                        >
                                            <option selected disabled>Tipe Guru</option>
                                            <option value="1">SD</option>
                                            <option value="2">SMP</option>
                                            <option value="3">SMA</option>
                                    </select>
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
            </div>
        </>
    )
}