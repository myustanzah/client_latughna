import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { hardDeleteStudent } from "../../../api/studentControler";
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../../helper/UniversalResponse";
import { fungsiIndexStudent } from "../../../store/actionCreator";

export default function ModalDeleteStudent() {
  const [showModal, setShowModal] = useState(false);
  const studentsData = useSelector(state => state.StudentReducer.studentData)
  const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
  const dispatch = useDispatch()

  function submitDeleteStudent(){
    let payload = {
      id: studentsData[selectStudent].id
    }
    hardDeleteStudent(payload)
    .then((response) => {
      if(response.data.status === 200){
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
        - Delete This Student
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
                  Delete This Student
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

                  <p>Warning - This student and all associated history will soon be deleted permanently. 
                    Are you sure you want to do this? <br />
                    <i>Deleted students can be restored for up to 30 days after deletion </i>
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
                    onClick={() => {
                        submitDeleteStudent() 
                        setShowModal(false)
                      }
                    }
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

