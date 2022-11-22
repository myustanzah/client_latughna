import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editStudent, uploadProfileStudent } from '../../../api/studentControler'
import { dateFormatymd, handleNewDate } from '../../../helper/handleDate'
import { UniversalErrorResponse, UniversalSuccessResponse } from '../../../helper/UniversalResponse'
import { fungsiIndexStudent } from '../../../store/actionCreator'

export default function FormStudent({isStudent, setIsStudent}) {
    const studentsData = useSelector(state => state.StudentReducer.studentData)
    const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
    const studentPhoto = useRef(null)
    const [inputEditStudent, setInputEditStudent] = useState(studentsData[selectStudent])
    const dispatch = useDispatch()
    const url_image = 'http://localhost:3009/images'

    function handleIsStudent(){
        setIsStudent(true)
    }

    function handleEditStudent(e){
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        setInputEditStudent({
            ...inputEditStudent, 
            [name]: value
        })
    }

    function handleSubmitEditStudent(){
        console.log(studentPhoto.current.files[0])
        let payload = {
            id: studentsData[selectStudent].id,
            data: inputEditStudent
        }
        editStudent(payload)
        .then((response)=>{
            if(response.data.status === 201){
                if (studentPhoto.current.files[0]) {
                    let payload = {
                        id: studentsData[selectStudent].id,
                        file: studentPhoto.current.files[0]
                    }
                    uploadProfileStudent(payload)
                    .then((response)=>{
                        console.log(response)
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
    }


    return (
        <div className="w-full flex flex-row">
            <div className="w-4/6">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label className="mr-5">First Name</label>
                        </td>
                        <td>
                            <input type="text" 
                            defaultValue={studentsData[selectStudent].firstName } 
                            name="firstName"
                            onChange={handleEditStudent}
                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label className="mr-5">Last Name</label>
                        </td>
                        <td>
                            <input 
                            type="text"
                            defaultValue={studentsData[selectStudent].lastName } 
                            onChange={handleEditStudent}
                            name="lastName"
                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="mr-5">NIS</label>
                        </td>
                        <td>
                            <input 
                            type="text"
                            defaultValue={studentsData[selectStudent].nis } 
                            onChange={handleEditStudent}
                            name="nis"
                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="mr-5">NISN</label>
                        </td>
                        <td>
                            <input 
                            type="text"
                            defaultValue={studentsData[selectStudent].nisn } 
                            onChange={handleEditStudent}
                            name="nisn"
                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="mr-5">Gender</label>
                        </td>
                        <td>
                            <select className="form-select appearance-none rounded block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                    name="gender"
                                    defaultValue={studentsData[selectStudent].gender} 
                                    onChange={handleEditStudent}
                                    >
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </td>
                    </tr>        
                    <tr>
                        <td>
                            <label className="mr-5">Birthday</label>
                        </td>
                        <td>
                            <input 
                            type="date"
                            onChange={handleEditStudent}
                            name="birthday"
                            defaultValue={studentsData[selectStudent].birthday ? dateFormatymd(studentsData[selectStudent].birthday) : handleNewDate()}
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
                                    onChange={handleEditStudent}
                                    name="comment"
                                    defaultValue={studentsData[selectStudent].comment}
                                    placeholder="Your message"
                            ></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table> 
            </div>
            <div className="w-2/6 flex flex-col space-y-4 items-center">
                <div className="w-40 h-40 border flex items-center">
                    {
                        !studentsData[selectStudent].imgProfil ? (
                            <img src={require('../../../assets/Profile-Male-PNG.png')} alt="profil" />
                        ) : (
                            <img src={`${url_image}/student/${studentsData[selectStudent].imgProfil}`} alt="profil" />
                        )
                    }
                </div>
                <input ref={studentPhoto} name="file_upload" type="file" className="rounded"/>
                <div>
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleIsStudent}
                    >Cancel</button>
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleSubmitEditStudent}
                    >Save</button>
                </div>

            </div>
        </div>
    )
}