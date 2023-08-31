import React, { forwardRef } from "react"
import { useSelector } from "react-redux"

import {dateFormat } from "../../helper/handleDate";
import style from "./style.css"


function TableAttendance(props, ref){
    const studentData = useSelector(state => state.StudentReducer)

    function renderAttendance(data){
        if (data.length === 0) {
            return (
                <table>
                    <tr>
                        <td>No Data Attendance</td>
                    </tr>
                </table>
            )
        } else {
            return (
                data.map((att, i) => {
                    if (dateFormat(props.data) === dateFormat(att.createdAt)) {
                        return (
                            <tr key={i} className="block flex justify-between dark:border-neutral-500">
                                <td className="whitespace-nowrap px-3 py-4">{dateFormat(att.createdAt)}</td>
                                <td className="whitespace-nowrap  px-3 py-4">{att.present ? "Yes" : "No"}</td>
                                <td className="whitespace-nowrap  px-3 py-4">{att.absent ? "Yes" : "No"}</td>
                                <td className="whitespace-nowrap  px-3 py-4">{att.tardy ? "Yes" : "No"}</td>
                                <td className="whitespace-nowrap  px-3 py-4">{att.comment}</td>
                                <td className="whitespace-nowrap  px-3 py-4"></td>
                            </tr>
                        )
                    }
                })
            )
        }
    }

    function renderStudent(){
        return (
            studentData.studentData[studentData.selectStudent].Sessions.map((e, i) => {
                return (
                    <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{i + 1}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{e.name}</td>
                        <td colSpan={5} className="w-full whitespace-nowrap px-6 py-4">{renderAttendance(e.Attendances)}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div id="att-table" ref={ref} className="flex flex-col">
            <div id="nama-murid">Nama Murid : {studentData.studentData[studentData.selectStudent].firstName + " " + studentData.studentData[studentData.selectStudent].lastName}</div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                    <thead
                        className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                        <tr className="">
                        <th scope="col" className=" px-6 py-4">#</th>
                        <th scope="col" className=" px-6 py-4">Session</th>
                        <th scope="col" className=" px-6 py-4">Date</th>
                        <th scope="col" className=" px-6 py-4">Present</th>
                        <th scope="col" className=" px-6 py-4">Absent</th>
                        <th scope="col" className=" px-6 py-4">Tardy</th>
                        <th scope="col" className=" px-6 py-4">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderStudent()}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

  

export default forwardRef(TableAttendance)