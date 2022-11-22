import React from "react";
import { useSelector } from "react-redux";

// helper
import { dateFormat } from "../../helper/handleDate";

function TableObservations() {
    const dataObservation = useSelector(state => state.ObservationReducer.observationData)
    const url_image = 'http://localhost:3009/images'
    
    function hendleDeleteObservation(value){
        
    }

    return ( 
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                        <thead className="border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Date
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Observation
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Progress
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    User
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Tools
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataObservation.map((e, i)=>{
                                    return (
                                        <tr key={e.id} className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dateFormat(e.updatedAt)}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img src={`${url_image}/observation/${e.fileUrl}`} className="object-cover h-20 w-20" alt="img" srcset="" />
                                                <p>{e.description}</p>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <p>Chekcbox</p>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <p>{e.User.name}</p>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="flex w-full justify-between">
                                                    <button>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button>
                                                        <i className="fa-solid fa-comment"></i>
                                                    </button>
                                                    <button>
                                                        <i className="fa-regular fa-envelope"></i>                                           
                                                    </button>
                                                    <button>
                                                        <i className="fa-regular fa-trash-can"></i>                                           
                                                    </button>
                                                </div>
                                            </td>                                            
                                        </tr>
                                    )
                                })
                            }

                           

                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default TableObservations;