import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Notfound(){
    
    const navigate = useNavigate()

    useState(()=>{
        setTimeout(()=>{
            navigate("/auth")
        }, 1000)
    },[])


    return (
        <>
          <div
            className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-gray-600 to-white"
            >
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                <h1 className="font-bold text-gray-600 text-9xl">404</h1>

                <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                    <span className="text-red-500">Oops!</span> Page not found
                </h6>

                <p className="mb-8 text-center text-gray-500 md:text-lg">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link to="/auth" className="px-6 py-2 text-sm font-semibold text-gray-800 bg-blue-100">
                    Go home
                </Link>
                    </div>
            </div>
            </div>
        </>
    )
}