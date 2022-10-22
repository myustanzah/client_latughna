import { useState } from "react"
import useFetchCountry from "../../../hooks/fecthCountry"

export default function FormContact(){

    const [showFormContact, setShoeFormContact] = useState(false)
    const [imgProfile, setImageProfile] = useState(true)
    const [dataCountry, loading] = useFetchCountry()


    return (
        <div className="w-full flex flex-row">
            {
                showFormContact ? (
                    <>
                        <div className="w-4/6 ">
                            <table className="w-11/12">
                                <tr>
                                    <td>
                                        <label className="mr-5">First Name</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Last Name</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Relationship</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Comments</label>
                                    </td>
                                    <td>
                                    <textarea class="form-control
                                                    block
                                                    w-full
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
                                <tr>
                                    <td>
                                        <label className="mr-5">Home Phone</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>        
                                <tr>
                                    <td>
                                        <label className="mr-5">Mobile Phone</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">E-mail</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Home Address</label>
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
                                        <label className="mr-5">Work Address</label>
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
                                    <td></td>
                                    <td>
                                    <tr>
                                            <td className="w-3/12">
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <label>Emergency Contact</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12">
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <label>Billing Contact</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12">
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <label>Can Pick Up</label>
                                            </td>
                                        </tr>
                                    </td>
                                    
                                </tr>
                            </table> 
                        </div>

                        <div className="w-2/6 flex flex-col space-y-4 items-center">
                        <div className="w-40 h-40 border flex items-center">
                            {
                                imgProfile ? (
                                    <img src={require('../../../assets/Profile-Male-PNG.png')} alt="" />
                                ) : (
                                    <p className="m-auto">Image</p>
                                )
                            }
                        </div>
                        <input type="file" className="rounded"/>

                            <div>
                                <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={()=> setShoeFormContact(false)}
                                >Cancel</button>
                                <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                >Save</button>
                            </div>

                        </div>
                    </>
                ) : (
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={()=> setShoeFormContact(true)}
                    >+ Add Contact</button>
                )
            }
        </div>
    )
}