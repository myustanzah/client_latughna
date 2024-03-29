import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addArea } from "../../api/areaController";
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../helper/UniversalResponse";
import { fungsiIndexArea } from "../../store/actionCreator"

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const userEmail = useSelector(state => state.UserReducer.userData.email)
  const [inputArea, setInputArea] = useState("")
  const dispatch = useDispatch()
  

  function handleInputArea(e){
    e.preventDefault()
    let value = e.target.value
    setInputArea(value)
  }

  function submitAddArea(e){
    e.preventDefault()

    let inputPayload = {
      email: userEmail,
      area: inputArea
    }
    addArea(inputPayload)
    .then((response) => {
      if(response.data.status === 200){
        UniversalSuccessResponse("Success", "Area berhasil ditambahkan")
        dispatch(fungsiIndexArea())
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
        + Add Area
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
                    Add Area
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
                  <div className="mb-3 pt-0">
                      <label className="mb-4">Add Area </label><br />
                      <input onChange={handleInputArea} name="area" type="text" placeholder="area" className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/><br /><br />
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
                    onClick={submitAddArea}
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

