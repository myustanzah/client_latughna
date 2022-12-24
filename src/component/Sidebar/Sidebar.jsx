/*eslint-disable*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fungsiGetDataObservation, fungsiIndexUser, setLogOut } from "../../store/actionCreator";

export default function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(state => state.UserReducer.userData)
  const checkStudent = useSelector(state => state.StudentReducer.studentData)


  function setDataObservation(){
    dispatch(fungsiGetDataObservation())
  }


  const handleLogout = () => {
    dispatch(setLogOut())
    localStorage.clear()
    navigate("/auth")
  }

  const handleUsers = () => {
    dispatch(fungsiIndexUser())
  }

  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-5 px-0"
            to="/auth"
          >
            <div className="items-center">
              <div className="w-full h-auto">
                <img
                  src={require("../../assets/logo.png")}
                  alt="..."
                  className="w-30 h-20 m-auto"
                ></img>
              </div>
              <h1 className="my-4 text-center">Sekolah Lughatuna</h1>
            </div>
          </Link>
          {/* User */}
          
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/auth"
                  >
                    Sekolah Lughatuna
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            {/* <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center hover:bg-sky-700 hover:text-white pl-2 pl-2">
                <Link
                  className={"text-xs uppercase py-3 font-bold block "}
                  to="/admin/dashboard"
                >
                  <i className={"fas fa-tv mr-2 text-sm "}
                  ></i>{" "}
                  Learning Objective
                </Link>
              </li>

              <li className="items-center hover:bg-sky-700 hover:text-white pl-2">
                <Link
                  className={"text-xs uppercase py-3 font-bold block "}
                  to="/admin/observation"
                  onClick={setDataObservation}
                >
                  <i className={"fas fa-solid fa-tower-observation mr-2 text-sm"}
                  ></i>{" "}
                  Observations
                </Link>
              </li>
                    {
                      checkStudent.length == 0 ? (
                        <></>
                      ) : (
                        <>
                          <li className="items-center hover:bg-sky-700 hover:text-white pl-2">
                            <Link
                              className={
                                "text-xs uppercase py-3 font-bold block "}
                              to="/admin/attendant"
                            >
                              <i
                                className={"fas fa-solid fa-clipboard-user mr-2 text-sm "}
                              ></i>{" "}
                              Attendance
                            </Link>
                          </li>

                          <li className="items-center hover:bg-sky-700 hover:text-white pl-2">
                            <Link
                              className={"text-xs uppercase py-3 font-bold block "}
                              to="/admin/student"
                            >
                              <i className={"fas fa-solid fa-graduation-cap mr-2 text-sm "}
                              ></i>{" "}
                              Students
                            </Link>
                          </li>
                        
                        </>
                      )
                    }
              <li className="items-center hover:bg-sky-700 hover:text-white pl-2">
                <Link
                  className={"text-xs uppercase py-3 font-bold block "}
                  to="/admin/report"
                >
                  <i
                    className={"fas fa-solid fa-print mr-2 text-sm "}
                  ></i>{" "}
                  Reports
                </Link>
              </li>

              <li className="items-center hover:bg-sky-700 hover:text-white pl-2">
                <Link
                  className={"text-xs uppercase py-3 font-bold block "}
                  to="/admin/lesson"
                >
                  <i className={"fas fa-solid fa-person-chalkboard mr-2 text-sm"} ></i>{" "}
                  Lesson Plans
                </Link>
              </li>

              <li className="items-center hover:bg-sky-700 hover:text-white pl-2">
                <Link
                  className={"text-xs uppercase py-3 font-bold block "}
                  to="/admin/myaccount"
                >
                  
                  <i className={"fa-solid fa-user-gear mr-2 text-sm"} ></i>{" "}
                  My Account
                </Link>
              </li>
                {
                  userData.email === 'superadmin@mail.com' ? (
                    <li className="items-center hover:bg-sky-700 hover:text-white pl-2">
                      <Link
                        className={"text-xs uppercase py-3 font-bold block "}
                        to="/admin/users"
                        onClick={handleUsers}
                      >
                        <i className={"fa-solid fa-user-plus mr-2 text-sm"} ></i>{" "}
                        Users
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )
                }
            </ul>
            <Link to="/auth">
              <button type="button" onClick={handleLogout} className="absolute bottom-0 mb-2 w-full inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Log Out
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
