import { useState } from "react";

// Hooks
import useFetchCountry from "../../../hooks/fecthCountry";


export default function MedicalInformation(){

    const [showFormMedical, setFormMedical] = useState(false)
    const [dataCountry, loading] = useFetchCountry()

    return (
        <div className="w-full flex flex-col">
            {
                showFormMedical ? (
                    <>
                        <div className="w-full">
                            <table>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                    <select className="form-select appearance-none rounded block w-6/12 px-1 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                                        <option value="">Doctor</option>
                                        <option value="">Dentist</option>
                                        <option value="">Prefered Hospital</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Name</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Phone</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Address</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">City</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">State</label>
                                    </td>
                                    <td className="flex flex-row justify-between">
                                        <input type="text" class="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                        <label>Postal Code</label>
                                        <input type="text" class="form-control block w-4/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />     
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Country</label>
                                    </td>
                                    <td>
                                        <select className="form-select appearance-none rounded block w-6/12 px-1 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                                            {
                                                dataCountry.map((data)=>{
                                                    return (<option value="">{data.name}</option>)
                                                })
                                            }
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Insurance Provider</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-10/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Insurance Number</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-10/12 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Notes</label>
                                    </td>
                                    <td>
                                    <textarea class="form-control
                                                    block
                                                    w-10/12
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                                "
                                                id="exampleFormControlTextarea1"
                                                rows="3"
                                                placeholder="Your message"
                                                ></textarea>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="w-full flex justify-end">
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={()=> setFormMedical(false)}
                            >Cancel</button>
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                            >Save</button>
                        </div>
                    </>
                ) : (
                    <button className="w-4/12 bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=> setFormMedical(true)}
                    >+ Add Medical Information</button>
                )
            }
        </div>
    )
}