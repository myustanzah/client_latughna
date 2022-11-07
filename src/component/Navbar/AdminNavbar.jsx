import React from "react";

import { useSelector } from "react-redux";

export default function Navbar() {
  const userLogIn = useSelector(state => state.UserReducer.userData)

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-lg uppercase hidden lg:inline-block font-semibold"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            My Classroom
          </a>
          <div className="text-white">
            <span className="mr-20">{userLogIn.content.data.email}</span>
            <i className={"fa-solid fa-user-gear mr-2 text-xl"} ></i>{" "}
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}