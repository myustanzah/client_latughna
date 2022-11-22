import React,  { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// api
import { resetPassword } from "../../api/userController";

// component
import Footer from "../../component/Footer/Footer";
import Loading from "../../component/Modal/Loading";

// helper
import { UniversalErrorResponse, UniversalSuccessResponse } from "../../helper/UniversalResponse";

// redux
import { fungsiDataUser, fungsiLogin } from "../../store/actionCreator";



export default function ForgotPassword() {
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState({
        email: "",
        newPassword: "",
        confirmPassword: ""
    })

    const [user, setUser] = useState({
        email: "",
        newPassword: "",
        confirmPassword: ""
    })
    
    const handleUserForgotPassword = (event) => {
        const newName = event.target.name;
        const newValue = event.target.value;
        setUser({
            ...user,
            [newName]: newValue
        })
        
    }

    const validateInput = (e) => {
        let { name, value } = e.target
        setError(prev => {
            const stateObj = {...prev, [name]: ""};

            switch (name) {
                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter Email.";
                    }
                    break;
                case "newPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                      } else if (user.confirmPassword && value !== user.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                      } else {
                        stateObj["confirmPassword"] = user.confirmPassword ? "" : error.confirmPassword;
                      }
                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (user.newPassword && value !== user.newPassword) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
                default:
                    break;
            }

            return stateObj
        })

    }
    
    const submitForgotPassword = (event) => {
      event.preventDefault()

      let payload = user
      setLoading(true);

      resetPassword(payload)
          .then((response)=>{
            if(response.data.status === 201 && loading === false){
              UniversalSuccessResponse("Success", "Try to logged in")
              navigate("/auth")
            } else {
                UniversalErrorResponse(response.data.status, JSON.stringify(response.data))
            }
          })
          .catch((error)=>{
            if (error.response === undefined) {
              UniversalErrorResponse(503, "Your interner or server has offline")
            }
            UniversalErrorResponse(error.response.data.status, error.response.data.messages)
          })
          .finally(()=>{
              setTimeout(() => {
                  setLoading(false);
              }, 2000);
          })

    }

    return ( 

     
        <section className="h-screen">
        <div className="px-6 h-5/6 text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6" >
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
              <form id="formForgotPassword" onSubmit={submitForgotPassword}>
      
                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Forgot Password</p>
                </div>
      
                
                <div className="mb-6">
                  <input
                    type="text"
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email address"
                    onChange={handleUserForgotPassword}
                    onBlur={validateInput}
                  />
                  {error.email && <span className='err'>{error.email}</span>}
                </div>
      
                
                <div className="mb-6">
                  <input
                    type="password"
                    name="newPassword"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="newPassword"
                    placeholder="New Password"
                    onChange={handleUserForgotPassword}
                    onBlur={validateInput}
                  />
                 {error.newPassword && <span className='err'>{error.newPassword}</span>}
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleUserForgotPassword}
                    onBlur={validateInput}
                  />
                  {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                </div>
                
      
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Back to 
                    <a
                      href="/auth"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      > Login ?</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        {
          loading ? (
            <Loading />
          ) : (
            <></>
          )
        }
        <Footer />
      </section>
     );
}
