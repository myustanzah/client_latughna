import React from "react";

// Tab Murid
import AddFormMurid from "../../component/Tab/AddFormMurid";


export default function DataSmp() {
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
                        <label className="mr-5">Objective to include</label>
                        <select className="form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                                <option value="">Presented Only</option>
                                <option value="">Presented Or Practiced</option>
                                <option value="">Presented, Practiced Or Mastered</option>
                                <option value="">Mastered Only</option>
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
                                  <label>Include Objective History</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Include Objective Comments</label>
                              </td>
                          </tr>
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
                 <div className="w-full p-5 flex flex-row justify-between">
                    <button type="button" className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reset Report</button>
                    <button type="button" className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Generate Report</button>
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
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Show Observations</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Show Objective</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Show Attendance</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Only Show Items With Photos</label>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-3/12">
                                  <input type="checkbox" />
                              </td>
                              <td>
                                  <label>Hide Comments</label>
                              </td>
                          </tr>
                      </table>
                    </div>
                 <div className="w-full p-5 flex flex-row justify-between">
                    <button type="button" className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reset Report</button>
                    <button type="button" className=" inline-block px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Generate Report</button>
                 </div>
                </div>

                 <div className="block p-6 mb-4 rounded-lg shadow-lg bg-white max-w-lg">
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
                </div>
                
            </div>
            <div className="w-3/12 h-min p-5 bg-white rounded">
                <table>
                  <tr className="border-b">
                    <td>
                      <h1 className="text-lg">Classroom List</h1>
                    </td>
                  </tr>
                  <div className="text-sky-400 pl-2">
                    <tr className="border-b">
                      <td>
                        <a href="#">Class List</a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <a href="#">Student Contact List</a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <a href="#">Birthday List</a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <a href="#">Allergy List</a>
                      </td>
                    </tr>
                  </div>

                  <tr className="border-b">
                    <td>
                      <h1 className="text-lg">Administrative Reports</h1>
                    </td>
                  </tr>

                  <div className="text-sky-400 pl-2">
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
                  </div>
                </table>

            </div>
          </div>
      </div>
    </>
  );
}
