import React, {useState} from "react";

export default function Loading() {
  const [showModal, setShowModal] = useState(true);
    
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            
          >
            <div className="flex items-center justify-center space-x-2">
                {/* <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> */}
                <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

