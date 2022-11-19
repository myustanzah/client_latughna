import React from "react";
import PropTypes from "prop-types";

// components
import TableDropdown from "../../Dropdowns/TableDropdown";
import NewDropdown from "../../Dropdowns/NewDropdown";
import { useSelector } from "react-redux";
import Loading from "../Modal/Loading";

// Modal
import ModalAddUser from "../Modal/ModalAddUser";


export default function CardTable({ color }) {
  const userList = useSelector(state => state.UserReducer.userList)
  
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-orange-500 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="flex justify-between w-full px-4 max-w-full ">
              <h3
                className={
                  "font-semibold text-lg" +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                User List
              </h3>
              <ModalAddUser/>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Profil
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Divisi
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >Action</th>
              </tr>
            </thead>
            <tbody>
              {
                userList.length < 1 ? (
                  <Loading />
                ) : (
                  userList.map((e, i) => {
                    let userLable;
                    if (e.kodeUser === 1) {
                      userLable = "SD"
                    } else if (e.kodeUser === 2){
                      userLable = "SMP"
                    } else if (e.kodeUser === 3) {
                      userLable = "SMA"
                    }
                    return (
                      <tr key={e.id}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src={require("../../assets/img/bootstrap.jpg")}
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          ></img>{" "}
                          <span
                            className={
                              "ml-3 font-bold " +
                              +(color === "light" ? "text-blueGray-600" : "text-white")
                            }
                          >
                            {e.name}
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {e.email}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {
                            e.suspend === true ? (
                              <>
                                <i className="fas fa-circle text-orange-500 mr-2"></i> Suspend
                              </>
                            ) : (
                              <>
                                <i className="fas fa-circle text-blue-500 mr-2"></i> Active
                              </>
                            )
                          }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">
                            <img
                              src={require("../../assets/img/team-1-800x800.jpg")}
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                            ></img>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            {userLable}
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button className="justify-items-end bg-green-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Edit</button>
                          <button className="justify-items-end bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Delete</button>
                        </td>
                      </tr>
                    )
                  })
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}


CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};