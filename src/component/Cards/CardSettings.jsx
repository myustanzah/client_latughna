import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UniversalErrorResponse, UniversalSuccessResponse } from "../../helper/UniversalResponse";
import { fungsiDataUser } from "../../store/actionCreator";

// api
import { editUser, uploadProfileUser } from "../../api/userController";
import { url_image } from "../../api/api";


export default function CardSettings() {
  const userPhoto = useRef(null)
  const userLogIn = useSelector(state => state.UserReducer.userData)
  const [inputUserEdit, setInputUserEdit] = useState(userLogIn)
  const dispatch = useDispatch()

  const handleChangeInputUserEdit = (e) => {
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    setInputUserEdit({
      ...inputUserEdit, 
      [name]: value
    })
  }

  const submitEditUser = (e) => {
    e.preventDefault()
    let payload = {
      id: userLogIn.id,
      data: inputUserEdit
    }
    editUser(payload)
    .then((response)=>{
      if(response.data.status === 201){
        if (userPhoto.current.files[0]) {
          let payload = {
              id: userLogIn.id,
              file: userPhoto.current.files[0]
          }
          uploadProfileUser(payload)
          .then((response)=>{
              console.log(response)
              dispatch(fungsiDataUser(response.data.content.imgProfil))
          })
          .catch((error)=>{
              console.log(error)
          })
        } else {
          dispatch(fungsiDataUser(response.data.content))
        }
        UniversalSuccessResponse("Success", "Update Sukses")
      } else {
        UniversalErrorResponse("Error", JSON.stringify(response.data))
      }
    })
    .catch((error)=>{
      if (error.response === undefined) {
        UniversalErrorResponse(503, "Your internet or server has offline")
      }
      UniversalErrorResponse(error.response.data.status, error.response.data.messages)
    })
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submitEditUser}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="w-full h-auto flex flex-row items-center">
              <div className="w-40 h-40 bg-white mb-6 flex items-center">
                      {
                          !userLogIn.imgProfil ? (
                              <img src={require('../../assets/Profile-Male-PNG.png')} alt="profil" />
                          ) : (
                              <img src={`${url_image}/user/${userLogIn.imgProfil}`} alt="profil" />
                          )
                      }
                  </div>
                  <input ref={userPhoto} name="file_upload" type="file" className="rounded m-10"/>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={userLogIn.name}
                    name="name"
                    onChange={handleChangeInputUserEdit}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={userLogIn.email}
                    name="email"
                    onChange={handleChangeInputUserEdit}
                  />
                </div>
              </div>
              
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={userLogIn.address}
                    name="address"
                    onChange={handleChangeInputUserEdit}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={userLogIn.city}
                    name="city"
                    onChange={handleChangeInputUserEdit}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={userLogIn.postalCode}
                    name="postalCode"
                    onChange={handleChangeInputUserEdit}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={userLogIn.descriptions}
                    rows="4"
                    name="descriptions"
                    onChange={handleChangeInputUserEdit}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-end min-w-full">
              <button 
              type="submit" 
              className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-10 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
