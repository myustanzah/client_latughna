import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../api/studentControler";
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../helper/UniversalResponse";
import { fungsiIndexStudent } from "../../store/actionCreator";

export default function Modal() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const userEmail = useSelector(state => state.UserReducer.userData.content.data.email)
  const [studentInput, setStudentInput] = useState({})
  const [sessionStudent, setSessionStudent] = useState([
    {
        sesi: 1,
        name: "AM Care",
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true
    },
    {
        sesi: 2,
        name: "AM Session",
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true
    },
    {
        sesi: 3,
        name: "Lunch",
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true
    },
    {
        sesi: 4,
        name: "PM Session",
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true
    },
    {
        sesi: 5,
        name: "PM Care",
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true
    }
])
  

  const handleAddStudent = (event) => {
    const newName = event.target.name;
    const newValue = event.target.value;
    setStudentInput({
        ...studentInput ,
        [newName]: newValue
    })  
  }

  const handleSessionStudent = (e) => {
    const name = e.target.name
    const newName = name.split(name[name.length - 1])[0];
    const index = +name[name.length - 1] + 1
    const newValue = e.target.value;
    

    setSessionStudent([...sessionStudent].map((object) => {
      
      if(object.sesi === index) {
        return {
          ...object,
          [newName]: newValue
        }
      }
      else return object;
    }))

  }

  const submitAddStudent = (event) => {
    event.preventDefault()

    let inputPayload = {
      email: userEmail,
      student: {
        firstName: studentInput.firstName,
        lastName: studentInput.lastName,
        session: sessionStudent
      }
    }
    addStudent(inputPayload)
    .then((response)=>{
      if(response.data.status === 200){
        UniversalSuccessResponse("Success", "Student berhasil ditambahkan")
        dispatch(fungsiIndexStudent())
        setShowModal(false)
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
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + Add Student
      </button>
      {showModal ? (
        <>
          <div
            className="modal top-0 left-0 justify-center items-center block overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          >
            <div className="modal-dialog relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="modal-content border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="modal-header flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Enter New Student
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                
                <div className="modal-body relative p-6 flex-auto">
                <div class="mb-3 pt-0">
                    <label className="mb-4">First Name </label><br />
                        <input onChange={handleAddStudent} name="firstName" type="text" placeholder="first name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/><br /><br />
                    <label className="mb-4">Last Name</label> <br />
                        <input onChange={handleAddStudent} name="lastName" type="text" placeholder="last name" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/>
                </div>
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="w-11/12">
                            <thead class="border-b border-x-gray-500">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Session
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Mon
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Tue
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Wed
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Thu
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Fri
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                sessionStudent.map((e, i) => {
                                  return (
                                          <tr key={i} class="border-b">
                                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{e.name}</td>
                                              
                                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"monday" + i} value={false} defaultChecked={true} />
                                              </td>
                                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"tuesday" + i} value={false} defaultChecked={true} />
                                              </td>
                                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"wednesday" + i} value={false} defaultChecked={true} />
                                              </td>
                                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"thursday" + i} value={false} defaultChecked={true} />
                                              </td>
                                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                  <input onChange={handleSessionStudent} type="checkbox" name={"friday" + i} value={false} defaultChecked={true} />
                                              </td>
                                          </tr>
                                  )
                                })
                              }
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitAddStudent}
                  >
                    Save Changes
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

