import React, {useState} from "react";

// components
import Table from "../Table/Table";

// modal
import ModalAddWork from "../Modal/ModalAddWork";
import ModalQuickEntry from "../Modal/ModalQuickEntry";
import ModalArea from "../Modal/ModalAddArea"

// redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// helper
import { dateFormat } from "../../helper/handleDate";
import { fungsiShowObjective } from "../../store/actionCreator";

export default function CardPageVisits() {
  const dispatch = useDispatch()
  const areas = useSelector(state => state.AreaReducer)
  const students = useSelector(state => state.StudentReducer)
  const shoTypeTable = useSelector(state => state.UserReducer.cardPageVisit)

  const [selectObjectives, setSelectObjective] = useState(0)
  const [dataStudent, setDataStudent] = useState([])
  const [dataWorks, setWorks] = useState([])

  useEffect(()=>{
    let setStudent = []
    
    students.studentData.forEach((e, i) => {
      let temp = {
        id : e.id,
        name : e.firstName,
        progress : "",
        lastUpdate : dateFormat(e.updatedAt)
      }
      setStudent.push(temp)
    });
    setDataStudent(setStudent)

  }, [])

  useEffect(()=>{
    let setArea = []
    
    areas.areaData[areas.selectArea].Objectives.forEach((e, i) => {
      let temp = {
        id : e.id,
        name : e.name,
        progress : "",
        lastUpdate : dateFormat(e.updatedAt)
      }
      setArea.push(temp)
    });
    setWorks(setArea)

  }, [setWorks, areas.areaData[areas.selectArea].Objectives])

  function handleObjectiveShow(event) {
    let selectObjective = event.target.value
    dispatch(fungsiShowObjective(+selectObjective))
  }
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-sky-50 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex-col items-center">
            <div className="flex relative w-full justify-between px-4 max-w-full">
              <h3 className="font-semibold text-base text-blueGray-700">
                {students.studentData[students.selectStudent].firstName}
              </h3>
              <select className="form-select appearance-none min-w-min rounded block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={handleObjectiveShow} name="" id="">
                {
                  areas.areaData.map((e, i) => {
                    return (
                      <option key={i} value={i}>{e.name}</option>
                    )
                  })
                }
              </select> 
            </div>
            <div className="flex relative w-full justify-start px-4 max-w-full mt-2">
              <ModalAddWork />
              <ModalQuickEntry />
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
              Organize Areas
              </button>
              <ModalArea />
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {
            shoTypeTable === 1 ? (
              <Table data={dataWorks} showTypeTable={shoTypeTable} />
            ) : (
              <Table data={dataStudent} showTypeTable={shoTypeTable} />
            )
          }
        </div>
      </div>
    </>
  );
}
