// modal
import ModalAddStudent from "../Modal/ModalAddStudent"


export default function AddFormMurid(){

    return (
        <>
             <div className="w-3/12 mb-12 xl:mb-0 px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                            <li className="mr-1 last:mr-0 flex-auto text-left text-xl text-white font-bold">
                                <p>Students</p>
                            </li>
                        </ul>
                            <ModalAddStudent />  
                        <div className="flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className="" id="link1">
                                    <button class="w-full bg-transparent hover:bg-blue-500 text-left font-semibold hover:text-white py-2 px-4 border hover:border-transparent">
                                        Student 1
                                    </button>
                                    <button class="w-full bg-transparent hover:bg-blue-500 text-left font-semibold hover:text-white py-2 px-4 border hover:border-transparent">
                                        Student 2
                                    </button>
                                    <button class="w-full bg-transparent hover:bg-blue-500 text-left font-semibold hover:text-white py-2 px-4 border hover:border-transparent">
                                        Student 3
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <select className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" name="filterStudent" id="filterStudent">
                                <option value="firstNam">First Name</option>
                                <option value="lastName">Last Name</option>
                                <option value="youngestFirst">Youngest First</option>
                                <option value="oldestFirst">Oldest First</option>
                        </select>
                    </div>
                </div>
        </>
    )
}