import React from "react";

// components
import AddFormMurid from "../../component/Tab/AddFormMurid";

export default function Attendants() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
          <AddFormMurid />
          <div className="shadow-lg bg-slate-200 rounded">
              <table className="min-w-full">
                        <thead className="border-b">
                            <tr>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Session
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  <input type="checkbox" />
                                  <label>Present</label>
                                  <input type="checkbox" />
                                  <label>Absent</label>
                                  <input type="checkbox" />
                                  <label>Tardy</label>
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  <label>Entering updates</label>
                                  <input type="date" value={""}/>
                              </th>
                            </tr>
                        </thead>
                        <tbody>
                              <tr className="border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      <label>AM Care</label>
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <input type="checkbox" />
                                    <label>Present</label>
                                    <input type="checkbox" />
                                    <label>Absent</label>
                                    <input type="checkbox" />
                                    <label>Tardy</label>
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="text" />
                                  </td>
                              </tr>
                              <tr className="border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      <label>AM Session</label>
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <input type="checkbox" />
                                    <label>Present</label>
                                    <input type="checkbox" />
                                    <label>Absent</label>
                                    <input type="checkbox" />
                                    <label>Tardy</label>
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="text" />
                                  </td>
                              </tr>
                              <tr className="border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      <label>Lunch</label>
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <input type="checkbox" />
                                    <label>Present</label>
                                    <input type="checkbox" />
                                    <label>Absent</label>
                                    <input type="checkbox" />
                                    <label>Tardy</label>
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="text" />
                                  </td>
                              </tr>
                        </tbody>
                    </table>
          </div>
      </div>
    </>
  );
}
