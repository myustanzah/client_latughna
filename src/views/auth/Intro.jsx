import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Intro(){

    const navigate = useNavigate()
    const [countdown, setCountDown] = useState(5)
    const timerId = useRef()

    useState(()=>{

        timerId.current = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)    

    }, [])

    useEffect(()=>{
        if (countdown === 0) {
            navigate("/auth")
        }
    }, [countdown])
    
    return(
        <> 

            <div
            className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-gray-600 to-white"
            >
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                    <img src={require("../../assets/logo.png")} className="w-70 h-60 m-auto" alt="" />
                    <h1 className="font-bold text-gray-600 text-7xl text-center">Welcome To <br/>Lughatuna School</h1>

                    {/* <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span className="text-red-500">Oops!</span> Page not found
                    </h6>

                    <p className="mb-8 text-center text-gray-500 md:text-lg">
                        The page you’re looking for doesn’t exist.
                    </p> */}
                    <Link to="/auth" className="px-6 py-2 my-10 text-sm font-semibold text-gray-800 bg-blue-100">
                    Go home
                    </Link>
                    <p>{countdown}</p>
                </div>
            </div>
            </div>

        </>
    )
}