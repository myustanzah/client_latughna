import { useState } from "react"


export default function FormAllergie(){

    const [showFormAlergi, setShowFormAlergi] = useState(false)

    return (
        <div className="w-full flex flex-col">
            {
                showFormAlergi ? (
                    <>
                        <div className="w-4/6">
                            <table className="w-11/12">
                                <tr>
                                    <td>
                                        <label className="mr-5">Allergy</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="mr-5">Anaphylactic</label>
                                    </td>
                                    <td>
                                        <input type="checkbox" class="form-control rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
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
                                    onClick={()=> setShowFormAlergi(false)}
                            >Cancel</button>
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                            >Save</button>
                        </div>
                    </>

                ) : (
                    <button className="w-4/12 bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=> setShowFormAlergi(true)}
                    >+ Add Allergi</button>
                )
            }

        </div>
    )
}