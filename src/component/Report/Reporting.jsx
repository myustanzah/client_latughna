import { useEffect } from "react"
import { useSelector } from "react-redux"
import { dateFormat } from "../../helper/handleDate"
import HeaderReport from "../Header/HeaderReport"

export default function Reporting(){
    const students = useSelector(state => state.StudentReducer.studentData)
    const showTypeReport = localStorage.getItem("show_type_report")
    useEffect(()=>{
        window.print()
    })


    function renderTableHead(){
        if (showTypeReport === 'contact_list') {
            return (
                <>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Contact Name
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Mobile Number
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Home Number
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Email
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Address
                    </th>
                </>
            )
        } else if (showTypeReport === 'birthday_list'){
            return (
                <>
                     <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Birthday
                    </th>
                </>
            )
        } else {
            return (
                <>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Name Allergy
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Anaphylactic
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Notes
                    </th>
                
                </>
            )
        }
    }

    function renderTableBody(data){
        if (showTypeReport === 'contact_list') {
            
            return(
                <>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.contactName}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.mobilePhone}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.homePhone}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.email}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.homeAddress}
                    </td>
                </>
            )

        } else if (showTypeReport === 'birthday_list'){

            return(
                <>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        { data.birthday !== "empty" ? dateFormat(data.birthday) : data.birthday}
                    </td>
                </>
            )

        } else {

            return(
                <>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.allergyName}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.anaphylactic}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.notes}
                    </td>
                </>
            )

        }
    }

    return (
        <>
          <div
            className="flex flex-col w-screen h-screen m-auto"
            >
                <HeaderReport />
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center">
                                <thead class="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
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
                                            contactName: "empty",
                                            mobilePhone: "empty",
                                            homePhone: "empty", 
                                            email: "empty",
                                            homeAddress: "empty",
                                            birthday: "empty",
                                            allergyName: "empty",
                                            anaphylactic: "empty",
                                            notes: "empty"

                                        }
                                        if (studn.Contact !== null) {
                                            data.contactName = studn.Contact.firstName + " " + studn.Contact.lastName
                                            data.mobilePhone = studn.Contact.mobilePhone
                                            data.homePhone = studn.Contact.homePhone
                                            data.email = studn.Contact.email
                                            data.homeAddress = studn.Contact.homeAddress
                                        }
                                        if (studn.birthday !== null) {
                                            data.birthday = studn.birthday
                                        }
                                        if (studn.Allergy !== null) {
                                            data.allergyName = studn.Allergy.name
                                            data.anaphylactic = studn.Allergy.anaphylactic ? "true" : "false"
                                            data.notes = studn.Allergy.notes
                                        }

                                        return (
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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