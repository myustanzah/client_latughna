import { useState } from 'react'

export default function FormStudent({isStudent, setIsStudent}) {

    const [imgProfile, setImageProfile] = useState(true)

    function handleIsStudent(){
        setIsStudent(true)
    }


    return (
        <div className="w-full flex flex-row">
            <div className="w-4/6">
                <table>
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
                            <label className="mr-5">Middle Name</label>
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
                            <label className="mr-5">Gender</label>
                        </td>
                        <td>
                            <select className="form-select appearance-none rounded block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="" id="">
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </td>
                    </tr>        
                    <tr>
                        <td>
                            <label className="mr-5">Birthday</label>
                        </td>
                        <td>
                            <input type="date" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
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
                            onClick={handleIsStudent}
                    >Cancel</button>
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                    >Save</button>
                </div>

            </div>
        </div>
    )
}