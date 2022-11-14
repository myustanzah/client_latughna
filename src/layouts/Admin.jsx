import React from "react"
import { Outlet } from 'react-router-dom'

// Component
import Sidebar from "../component/Sidebar/Sidebar"
import HeaderStats from "../component/Header/Headerstat"
import AdminNavbar from "../component/Navbar/AdminNavbar"
import FooterAdmin from "../component/Footer/FooterAdmin"
import { useDispatch, useSelector } from "react-redux"
import { fungsiIndexArea, fungsiIndexStudent } from "../store/actionCreator"
import { useEffect } from "react"
import Loading from "../component/Modal/Loading"

export default function Workspace(){
    const dispatch = useDispatch()
    const loading = useSelector(state => state.UserReducer.isLoading)
    
    useEffect(()=>{
        dispatch(fungsiIndexArea())
        dispatch(fungsiIndexStudent())
    }, [])

    return (
        <>
            <Sidebar/>
            <div className="relative min-h-screen md:ml-64">
                <AdminNavbar />
                <HeaderStats />
                    <div className="px-4 md:px-10 mx-auto w-full -m-24">
                        <Outlet />
                    </div>
                <div className="w-full">
                    {/* <FooterAdmin/> */}
                </div>
            </div>
        </>
    )
    
}