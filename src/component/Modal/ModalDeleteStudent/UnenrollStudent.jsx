import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideStudent } from "../../../api/studentControler";
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../../helper/UniversalResponse";
import { fungsiIndexStudent } from "../../../store/actionCreator";

export default function ModalUnenrollStudent() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const studentData = useSelector(state => state.StudentReducer)

  function handleHideStudent(){
    setShowModal(false)
    let getIdStudent = studentData.studentData[studentData.selectStudent]

    hideStudent(getIdStudent.id)
    .then((response) => {
      if(response.data.status === 201){
        UniversalSuccessResponse("Success", "Student hide success")
        dispatch(fungsiIndexStudent())
        setShowModal(false)
      } else {
        UniversalErrorResponse("Error", JSON.stringify(response.data))
      }
    })
    .catch((error) => {
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
        - Unenroll Student
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Unenroll Student
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
                
                <div className="relative p-6 flex-auto">
                <p>
                    This student will be removed from this classroom, 
                    but their records will be maintained in the system. 
                    However, you will still be charged the monthly fee for this student. 
                    If you wish to no longer pay for this student in Montessori Workspace, 
                    you must delete the student using the "DELETE STUDENT" button.
                </p>
                  
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
                    onClick={handleHideStudent}
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

