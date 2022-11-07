import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fungsiShowDataStudentOrObjective } from "../../store/actionCreator";

// Modal
import ModalAddStudent from "../Modal/ModalAddStudent";

const Tabs = () => {
  
  const shoTypeTable = useSelector(state => state.UserReducer.cardPageVisit)
  const students = useSelector(state => state.StudentReducer.studentData)
  const areas = useSelector(state => state.AreaReducer)
  const dispatch = useDispatch()

  function hanleOpenTab(value) {
    dispatch(fungsiShowDataStudentOrObjective(value))
  };
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="mr-1 last:mr-0 flex-auto text-center">
              <a
                className={ "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (shoTypeTable === 1
                    ? "text-white bg-green-600"
                    : "text-green-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  hanleOpenTab(1);
                }}
                data-toggle="tab"
                href={"#link1"}
                role="tablist"
              >Students
              </a>
            </li>
            <li className="mr-1 last:mr-0 flex-auto text-center">
              <a className={"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (shoTypeTable === 2
                    ? "text-white bg-green-600"
                    : "text-bg-green-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  hanleOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Objective
              </a>
            </li>
          </ul>
            {
                shoTypeTable === 1 ? (
                    <ModalAddStudent />
                ) : (<></>)
            }
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">

                <div className={shoTypeTable === 1 ? "block" : "hidden"} id="link1">

                  {
                    students.map((e, i) => {
                      return (
                          <button key={i} class="w-full bg-transparent hover:bg-blue-500 text-left font-semibold hover:text-white py-2 px-4 border hover:border-transparent">
                              {e.firstName}
                          </button>
                      )
                    })
                  }
      
                </div>

                <div className={shoTypeTable === 2 ? "block" : "hidden"} id="link2">
                  {
                    areas.areaData[areas.selectArea].Objectives.map((e, i) => {
                      return (
                        <button key={i} class="w-full bg-transparent hover:bg-blue-500 text-left font-semibold hover:text-white py-2 px-4 border hover:border-transparent">
                            {e.name}
                        </button>
                      )
                    })
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
        <select className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" name="filterStudent" id="filterStudent">
                <option value="firstNam">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="youngestFirst">Youngest First</option>
                <option value="oldestFirst">Oldest First</option>
              </select>
      </div>
    </>
  );
};

export default Tabs;

