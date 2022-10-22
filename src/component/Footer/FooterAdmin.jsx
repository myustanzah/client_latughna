import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-cyan-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-inherit font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <div
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                  Sekolah Lughatuna
                </div>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <div
                    className="text-inherit hover:text-inherit text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <div
                    className="text-inherit hover:text-inherit text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </div>
                </li>
                <li>
                  <div
                    className="text-inherit hover:text-inherit text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
