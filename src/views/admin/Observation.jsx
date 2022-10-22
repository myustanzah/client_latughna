import React from "react";

// Components
import Filter from "../../Filter/Filter";

// TabMurid
import AddFormMurid from "../../component/Tab/AddFormMurid";

// Table
import TableObservations from "../../component/Table/TableObservations";


export default function Observation(){
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <AddFormMurid />
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="w-1/12x">
                                <div class="flex justify-center items-center w-full">
                                    <label for="dropzone-file" class="flex flex-col p-5 justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div> 
                            </div>
                            <div className="flex flex-col ml-3">
                                <textarea name="descriptionObservation" placeholder="Descriptions" id="" cols="60" rows="4"></textarea>
                                <div className="mt-3">
                                    <button className="mr-3">cancel</button>
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                    >
                                        Save Description
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Filter/>
                        <TableObservations />
                    </div>
            </div>
        </>
    )
}