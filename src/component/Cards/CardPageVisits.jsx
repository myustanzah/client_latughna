import React, {useState} from "react";

// components
import Table from "../Table/Table";

// modal
import ModalAddWork from "../Modal/ModalAddWork";
import ModalQuickEntry from "../Modal/ModalQuickEntry";
import ModalArea from "../Modal/ModalAddArea"

export default function CardPageVisits() {

  const [workOrStudent, setWorkOrStudent] = useState(1)

  const [dataStudent, setDataStudent] = useState([
    {
        id: 1,
        name : "First Name",
        progress : "",
        lastUpdate : new Date().toISOString().slice(0, 10)
    }
  ])

  const [dataWorks, setWorks] = useState([
    {
      id : 1,
      name : "Dry Exploration",
      progress : "",
      lastUpdate : new Date().toISOString().slice(0, 10)
    },
    {
      id: 2,
      name : "Dry Transfer",
      progress : "",
      lastUpdate : new Date().toISOString().slice(0, 10)
    },
    {
      id: 3,
      name : "Dry Dumping",
      progress : "",
      lastUpdate : new Date().toISOString().slice(0, 10)
    },
    {
      id: 4,
      name : "Dry Pouring",
      progress : "",
      lastUpdate : new Date().toISOString().slice(0, 10)
    },
  ])



  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-sky-50 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex-col items-center">
            <div className="flex relative w-full justify-between px-4 max-w-full">
              <h3 className="font-semibold text-base text-blueGray-700">
                First Student
              </h3>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
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
            workOrStudent === 1 ? (
              <Table data={dataWorks} showTypeTable={workOrStudent}/>
            ) : (
              <Table data={dataStudent} showTypeTable={workOrStudent} />
            )
          }
        </div>
      </div>
    </>
  );
}
