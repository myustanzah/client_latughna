import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Tab Murid
import AddFormMurid from "../../component/Tab/AddFormMurid";
import { handleNewDate } from "../../helper/handleDate";
import { UniversalErrorResponse } from "../../helper/UniversalResponse";
import { useSelector } from "react-redux";


export default function DataReports() {

  const selectStudent = useSelector(state => state.StudentReducer.selectStudent)

  const [learningObjectiveReport, setLearningObjectiveReport] = useState({
    name_report: "learning_objective_report",
    after_date: "",
    before_date: "",
    select_student: selectStudent
  })

  const [observationReport, setObservatiobReport] = useState({
    name_report: "observation_report",
    after_date: "",
    before_date: "",
    select_student: selectStudent
  })

  function handleInputGenerateReport(e){
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    
    setLearningObjectiveReport({
      ...learningObjectiveReport,
      [name]: value
    })
  }

  function handleInputGenerateReportObs(e){
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    
    setObservatiobReport({
      ...observationReport,
      [name]: value
    })
  }

  function handleInputTypeGenerateReport(e){
    e.preventDefault()
    let name = e.target.name
    let checked = e.target.checked
    setLearningObjectiveReport({
      ...learningObjectiveReport,
      [name]: checked
    })
  }

  function handleInputTypeGenerateReportObs(e){
    e.preventDefault()
    let name = e.target.name
    let checked = e.target.checked
    setObservatiobReport({
      ...observationReport,
      [name]: checked
    })
  }

  
  function submitGenerateReport(){
    if (learningObjectiveReport.after_date === "" || learningObjectiveReport.before_date === "") {
      UniversalErrorResponse("Error", "Please input date")
    } else {
      if (learningObjectiveReport.after_date > learningObjectiveReport.before_date) {
        UniversalErrorResponse("Error", "after date must be lower than before date")
      } else {
        localStorage.removeItem("generate_report")
        localStorage.setItem("generate_report", JSON.stringify(learningObjectiveReport))
        window.open("/report-form", "_blank")
      }
    }
  }

  function submitGenerateReportObs(){
    if (observationReport.after_date === "" || observationReport.before_date === "") {
      UniversalErrorResponse("Error", "Please input date")
    } else {
      if (observationReport.after_date > observationReport.before_date) {
        UniversalErrorResponse("Error", "after date must be lower than before date")
      } else {
        localStorage.removeItem("generate_report")
        localStorage.setItem("generate_report", JSON.stringify(observationReport))
        window.open("/report-form", "_blank")
      }
    }
  }

  function cancelGenerateReport(){
    localStorage.removeItem("generate_report")
    window.location.reload()
  }


  function handleSetReport(input){
    localStorage.removeItem("show_type_report")
    localStorage.setItem("show_type_report", input)
    window.open("/report", "_blank")
  }


  return (
    <>
      <div className="flex flex-wrap mt-4">
          <AddFormMurid/>
          <div className="w-8/12 h-min flex flex-row">
            <div className="w-11/12 h-min flex items-center flex-col">

                <div className="block p-6 mb-4 rounded-lg shadow-lg bg-white max-w-lg">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Learning Objective Report</h5>
                    <div className="h-min w-full p-3 bg-gray-200">
                      <table>
                        <tr>
                          <td>
                            <label>After Date</label>
                          </td>
                          <td>
                            <input 
                            type="date"
                            name="after_date"
                            onChange={handleInputGenerateReport}
                            defaultValue={learningObjectiveReport.after_date}
                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                          </td>
                          <td>
                            <label>Before Date</label>
                          </td>
                          <td>
                            <input 
                            type="date" 
                            name="before_date"
                            defaultValue={learningObjectiveReport.before_date}
                            onChange={handleInputGenerateReport}
                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                          </td>
                        </tr>
                      </table>
                    </div>
                      {/* <div className="w-full h-min p-3 flex flex-row">
                        <label className="mr-5">Objective to include</label>
                        <select className="form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                                <option value="">Presented Only</option>
                                <option value="">Presented Or Practiced</option>
                                <option value="">Presented, Practiced Or Mastered</option>
                                <option value="">Mastered Only</option>
                                <option value="">All Objective</option>
                        </select>
                      </div> */}
                    <div className="w-full h-min p-3">
                      <table>
                          <tr>
                              <td className="w-3/12">
                                  <input
                                   onChange={handleInputTypeGenerateReport}
                                   name="objective_history"
                                   type="checkbox" />
                              </td>
                              <td>
                                  <label>Include Objective History</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input
                                    onChange={handleInputTypeGenerateReport}
                                    name="objective_comment" 
                                    type="checkbox" />
                              </td>
                              <td>
                                  <label>Include Objective Comments</label>
                              </td>
                          </tr>
                          {/* <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Include Hidden Objective</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Include Hidden Areas</label>
                              </td>
                          </tr> */}
                      </table>
                    </div>
                 <div className="w-full p-5 flex flex-row justify-between">
                    <button 
                      onClick={cancelGenerateReport}
                      type="button" 
                      className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reset Report</button>
                    <button
                      onClick={submitGenerateReport} 
                      type="button" 
                      className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Generate Report</button>
                 </div>
                </div>

                <div className="block p-6 mb-4 rounded-lg shadow-lg bg-white max-w-lg">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Observations Report</h5>
                    <div className="h-min w-full p-3 bg-gray-200">
                      <table>
                        <tr>
                          <td>
                            <label>After Date</label>
                          </td>
                          <td>
                            <input
                             name="after_date"
                             onChange={handleInputGenerateReportObs}
                             type="date" 
                             className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                          </td>
                          <td>
                            <label>Before Date</label>
                          </td>
                          <td>
                            <input
                             onChange={handleInputGenerateReportObs}
                             name="before_date"
                             type="date" 
                             className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="w-full h-min p-3">
                      <table>
                          {/* <tr>
                              <td className="w-3/12">
                                  <input
                                   onChange={handleInputTypeGenerateReportObs}
                                   name="sh_observation"
                                   type="checkbox" />
                              </td>
                              <td>
                                  <label>Show Observations</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input
                                   onChange={handleInputTypeGenerateReportObs}
                                   name="sh_objective"
                                   type="checkbox" />
                              </td>
                              <td>
                                  <label>Show Objective</label>
                              </td>
                          </tr> */}
                          {/* <tr>
                              <td className="w-3/12">
                                  <input
                                    name="sh_attendance"
                                    type="checkbox" />
                              </td>
                              <td>
                                  <label>Show Attendance</label>
                              </td>
                          </tr> */}
                          {/* <tr>
                              <td className="w-3/12"> 
                                  <input
                                    onChange={handleInputTypeGenerateReportObs}
                                    name="just_photo"
                                    type="checkbox" />
                              </td>
                              <td>
                                  <label>Only Show Items With Photos</label>
                              </td>
                          </tr> */}
                          <tr>
                              <td className="w-3/12">
                                  <input
                                    onChange={handleInputTypeGenerateReportObs}
                                    name="hide_comment"
                                    type="checkbox" />
                              </td>
                              <td>
                                  <label>Hide Comments</label>
                              </td>
                          </tr>
                      </table>
                    </div>
                 <div className="w-full p-5 flex flex-row justify-between">
                    <button
                      onClick={cancelGenerateReport}
                      type="button" 
                      className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reset Report</button>
                    <button
                     onClick={submitGenerateReportObs}
                     type="button" 
                     className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Generate Report</button>
                 </div>
                </div>

                 {/* <div className="block p-6 mb-4 rounded-lg shadow-lg bg-white max-w-lg">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Progress Report</h5>
                    <div className="h-min w-full p-3 bg-gray-200">
                      <table>
                        <tr>
                          <td>
                            <label>After Date</label>
                          </td>
                          <td>
                            <input type="date" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                          </td>
                          <td>
                            <label>Before Date</label>
                          </td>
                          <td>
                            <input type="date" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                          </td>
                        </tr>
                      </table>
                    </div>
                      <div className="w-full h-min p-3 flex flex-row">
                        <label className="mr-5">Basis for assessment</label>
                        <select className="form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                name="" id="">
                                <option value="">Areas</option>
                        </select>
                      </div>
                      <div className="w-full h-min p-3 flex flex-row">
                        <label className="mr-5">Objective to include</label>
                        <select className="form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                name="" id="">
                                <option value="">Mastered Only</option>
                                <option value="">Mastered or Practiced</option>
                                <option value="">Mastered, Practiced Or, Presented</option>
                                <option value="">All Objective</option>
                        </select>
                      </div>
                    <div className="w-full h-min p-3">
                      <table>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Include Hidden Objective</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Include Hidden Areas</label>
                              </td>
                          </tr>
                      </table>
                    </div>
                 <div className="w-full flex flex-row justify-between">
                    <button type="button" className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reset Report</button>
                    <button type="button" className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Generate Report</button>
                 </div>
                </div> */}
                
            </div>
            <div className="w-3/12 h-min p-5 bg-white rounded">
                <table>
                  <tr className="border-b">
                    <td>
                      <h1 className="text-lg">Classroom List</h1>
                    </td>
                  </tr>
                  <div className="text-sky-400 pl-2">
                    {/* <tr className="border-b">
                      <td>
                        <a href="#">Class List</a>
                      </td>
                    </tr> */}
                    <tr className="border-b">
                      <td>
                        <Link
                          onClick={(e)=> {
                            e.preventDefault()
                            handleSetReport("contact_list")
                          }} 
                          
                          target={"_blank"}>Student Contact List</Link>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <Link 
                          onClick={(e)=> {
                            e.preventDefault()
                            handleSetReport("birthday_list")
                          }}
                          
                          target={"_blank"}>Birthday List</Link>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <Link 
                          onClick={(e)=> {
                            e.preventDefault()
                            handleSetReport("alergy_list")
                          }}
                          
                          target={"_blank"}>Allergy List</Link>
                      </td>
                    </tr>
                  </div>

                  {/* <tr className="border-b">
                    <td>
                      <h1 className="text-lg">Administrative Reports</h1>
                    </td>
                  </tr> */}

                  {/* <div className="text-sky-400 pl-2">
                    <tr className="border-b">
                      <td>
                        <a href="#">Daily Attendance</a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <a href="#">Attendance Summary</a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <a href="#">Enrollment Numbers</a>
                      </td>
                    </tr>
                  </div> */}
                </table>
            </div>
          </div>
      </div>
    </>
  );
}
