import React, {useState} from "react";

// helper
import { handleNewDate } from "../../helper/handleDate";
import { useDispatch, useSelector } from "react-redux";
import { storeQuickEntry } from "../../api/lessonPlanController";
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../helper/UniversalResponse";
import { fungsiIndexArea, fungsiIndexStudent } from "../../store/actionCreator";

export default function Modal() {
  
  const [showModal, setShowModal] = useState(false);
  const students = useSelector(state => state.StudentReducer)
  const areas = useSelector(state => state.AreaReducer)
  const [selectArea, setSelectArea] = useState(0)
  const [dataSubmit, setDataSubmit] = useState({})
  const dispatch = useDispatch();
    
  function submitQuickEntry(){
    storeQuickEntry(dataSubmit)
    .then((response)=>{
      console.log(response)
        if(response.data.status === 200){
          dispatch(fungsiIndexArea())
          dispatch(fungsiIndexStudent())
          UniversalSuccessResponse("Success", "Data berhasil ditambahkan")
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

  function handleProgress(e){
    setDataSubmit({
      ...dataSubmit,
      progress: +e.target.value
    })
  }

  return (
    <>
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Quick Entry
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            
          >
            <div className="relative w-full my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Quick Entry
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

                <table className="m-10 table-auto">
                  <tbody>
                    <tr>
                      <td>
                        <label >Updates for(MM/DD/YY) </label>
                      </td>
                      <td>
                        <input type="date" value={handleNewDate()} className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/><br /><br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="mb-4 mr-9">Students </label>
                      </td>
                      <td>
                        <select className="w-64 mb-10 form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                        {
                          students.studentData.map((student) => {
                            return(
                              <option key={student.id} value={student.id} onClick={()=> setDataSubmit({ ...dataSubmit, studentId: student.id })} >{student.firstName + " " + student.lastName}</option>
                            )
                          })
                        }
                        </select>
                      </td>
                    </tr>
                    <tr>
                        <td>
                          <label className="mb-4 mr-14">Mata pelajaran </label>
                        </td>
                        <td>
                          <select className="w-64 mb-10 form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                          {
                            areas.areaData.map((area, i) => {
                              return(
                                <option key={area.id} value={area.id} onClick={ () => { setSelectArea(i) }}>{area.name}</option>
                              )
                            })
                          }
                          </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <label className="mb-4 mr-14">Objective </label>
                        </td>
                        <td>
                          <select className="w-64 mb-10 form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                            {
                              areas.areaData[selectArea].Objectives.map((obj) => {
                                return(
                                  <option key={obj.id} value={obj.id} onClick={() => setDataSubmit({ ...dataSubmit, objectiveId: obj.id })} >{obj.name}</option>
                                )
                              })
                            }
                            </select>
                        </td>
                    </tr>
                    
                    <hr className="my-11" />
                    
                    <tr>
                      <td>
                        <label className="mb-4 mr-9">Progress </label>
                      </td>
                      <td>
                        <select name="" id="">
                          <option value="1" onClick={handleProgress}>Beginner</option>
                          <option value="2" onClick={handleProgress}>Middle</option>
                          <option value="3" onClick={handleProgress}>Advance</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                        <td>
                          <label className="mb-4 mr-5">Comments </label>
                        </td>
                        <td>
                          <textarea onChange={(e)=> setDataSubmit({ ...dataSubmit, comment: e.target.value })} className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"/><br /><br />
                        </td>
                    </tr>
                  </tbody>
                </table>
           
                    
                   
                    <hr />
                    {/* <div className="flex flex-row justify-between mt-4">
                        <label className="mr-4">Lesson Plan</label>
                        <div className="flex flex-row">
                            <div className="mr-2">
                                <input type="radio" className="mr-1" />
                                <label>No Change</label>
                            </div>
                            <div className="mr-2">
                                <input type="radio" className="mr-1" />
                                <label>Add</label>
                            </div>
                            <div className="mr-2">
                                <input type="radio" className="mr-1" />
                                <label>Remove</label>
                            </div>
                        </div>
                    </div> */}
               
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
                      setShowModal(false)
                      submitQuickEntry()
                    }}
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

