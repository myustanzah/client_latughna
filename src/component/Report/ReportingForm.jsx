import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dateFormat } from "../../helper/handleDate"
import HeaderReport from "../Header/HeaderReport"

export default function Reporting(){
    const studentsData = useSelector(state => state.StudentReducer.studentData)
    const [students, setStudentFilter] = useState([])
    const showTypeReport = JSON.parse(localStorage.getItem("generate_report"))
    useEffect(()=>{
        setStudentFilter([
            ...students,
            studentsData[showTypeReport.select_student]
        ])
        window.print()
    }, [])

    console.log(showTypeReport)

    function renderTableHead(){
        if (showTypeReport.name_report === 'learning_objective_report') {
            return (
                <>
                    <th scope="col" class="text-left text-sm font-medium text-white px-6 py-4">
                        Tanggal
                    </th>
                    <th scope="col" class="text-left text-sm font-medium text-white px-6 py-4">
                        Objectives
                    </th>

                </>
            )
        } else {
            return (
                <>
                    <th scope="col" class="text-left text-sm font-medium text-white px-6 py-4">
                        Tanggal
                    </th>
                    <th scope="col" class="text-left text-sm font-medium text-white px-6 py-4">
                        Observation
                    </th>
                    {
                        !showTypeReport.hide_comment ? (
                            <th scope="col" class="text-left text-sm font-medium text-white px-6 py-4">
                                Comment
                            </th>
                        ) : (
                            <></>
                        )
                    }
                </>
            )
        }
        
    }

    function renderTableBody(data){
        if (showTypeReport.name_report === 'learning_objective_report') {
            if (data.objectiveName === "empty") {
                return (
                    <>
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Belum ada mata pelajaran</td>
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Belum ada mata pelajaran</td>
                    </>
                )
            } else {
                return(
                    <>          
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {
                                    data.objectiveName.map((el, id)=>{
                                        if (el.createdAt > showTypeReport.after_date && el.createdAt < showTypeReport.before_date) {
                                            return(
                                                <tr key={el.id} className="bg-white border-b">
                                                    <td 
                                                        className="text-left text-sm text-gray-900 font-light whitespace-nowrap"
                                                    >{dateFormat(el.createdAt)}</td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </td>
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {
                                data.objectiveName.map((el, id)=>{
                                    if (el.createdAt > showTypeReport.after_date && el.createdAt < showTypeReport.before_date) {
                                        return(
                                            <tr key={el.id} className="bg-white border-b">
                                                <td 
                                                    className="text-left text-sm text-gray-900 font-light whitespace-nowrap"
                                                >{el.name}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </td>
                        
                    </>
                )

            }
        } else {
            if (data.observationName === "empty") {
                return (
                    <>
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Belum ada mata pelajaran</td>
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Belum ada mata pelajaran</td>
                    </>
                )
            } else {
                return (
                    <>
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{
                            data.observationName.map((el, id)=> {
                                // console.log("ini tanggal", el.createdAt)
                                if (el.createdAt >= showTypeReport.after_date && el.createdAt <= showTypeReport.before_date) {
                                    return (
                                        <tr key={id + 1} className="bg-white border-b">
                                            <td 
                                                className="text-left text-sm text-gray-900 font-light whitespace-nowrap"
                                            >{dateFormat(el.createdAt)}</td>
                                        </tr>
                                    )
                                }
                            })
                        }</td>
                        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{
                            data.observationName.map((el, id)=> {
                                if (el.createdAt >= showTypeReport.after_date && el.createdAt <= showTypeReport.before_date) {
                                    return (
                                        <tr key={id + 1} className="bg-white border-b">
                                            <td 
                                                className="text-left text-sm text-gray-900 font-light whitespace-nowrap"
                                            >{el.description}</td>
                                        </tr>
                                    )
                                }
                            })
                        }</td>

                    </>
                )
            }
        }
    }

    return (
        <>
          <div
            className="flex flex-col w-screen h-screen m-auto"
            >
                <HeaderReport />
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-left text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="text-left text-sm font-medium text-white px-6 py-4">
                                            Student Name
                                        </th>
                                        {renderTableHead()}
                                    </tr>
                                </thead>
                            <tbody>
                                {
                                    students.map((studn, i) => {
                                        let index = i + 1
                                        let data = {
                                             objectiveName: "empty",
                                             observationName: "empty"  
                                        }
                                        if (studn.Objectives.length !== 0) {
                                            data.objectiveName = studn.Objectives
                                        }

                                        if (studn.Observations.length !== 0) {
                                            data.observationName = studn.Observations
                                        }
                                        

                                        return (
                                            <tr className="bg-white border-b">
                                                <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index}</td>
                                                <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {studn.firstName + " " + studn.lastName}
                                                </td>
                                                {renderTableBody(data)}
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
        </>
    )
}