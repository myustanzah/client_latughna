import React, { useState } from "react";

// components
import AddFormMurid from "../../component/Tab/AddFormMurid";

import DisplayStudent from "../../component/Accordion/StudentProfile/DisplayStudent";
import FormStudent from "../../component/Accordion/StudentProfile/FormStudent";
import FormContact from "../../component/Accordion/Contacts/FormContact";
import MedicalInformation from "../../component/Accordion/Medical/MedicalInformation";
import FormAllergie from "../../component/Accordion/Allergies/FormAllergies";
import SetEnrollment from "../../component/Accordion/Enrollment/Enrollment";

// Modal
import ModalDeleteStudent from "../../component/Modal/ModalDeleteStudent/DeleteStudent";
import ModalUnenrollStudent from "../../component/Modal/ModalDeleteStudent/UnenrollStudent";



export default function Students() {

  const [isStudent, setIsStudent] = useState(true)

  return (
    <>
      <div className="flex flex-wrap mt-4">
          <AddFormMurid />
          <div className="w-3/5">

            <div className="w-full flex flex-row mb-3">
                <h1 className="text-2xl text-white mr-5">First Student</h1>
                <ModalDeleteStudent />
                <ModalUnenrollStudent />
            </div>

            <div className="accordion mb-2" id="studentProfileParent">
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  " type="button" data-bs-toggle="collapse" data-bs-target="#studentProfile" aria-expanded="false"
                    aria-controls="studentProfile">
                    Student Profile
                  </button>
                </h2>
                <div id="studentProfile" className="accordion-collapse collapse hide" aria-labelledby="headingOne"
                  data-bs-parent="#studentProfileParent">
                  <div className="flex flex-row accordion-body py-4 px-5">
                    {
                      isStudent ? (
                        <DisplayStudent isStudent={isStudent} setIsStudent={setIsStudent} />
                      ) : (
                        <FormStudent isStudent={isStudent} setIsStudent={setIsStudent} />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion mb-2" id="contactsParent">
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  " type="button" data-bs-toggle="collapse" data-bs-target="#contacts" aria-expanded="false"
                    aria-controls="contacts">
                    Contacts
                  </button>
                </h2>
                <div id="contacts" className="accordion-collapse collapse hide" aria-labelledby="headingOne"
                  data-bs-parent="#contactsParent">
                  <div className="accordion-body py-4 px-5">
                    <FormContact />
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion mb-2" id="medicalInformationParent">
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  " type="button" data-bs-toggle="collapse" data-bs-target="#medicalInformation" aria-expanded="false"
                    aria-controls="medicalInformation">
                    Medical Information
                  </button>
                </h2>
                <div id="medicalInformation" className="accordion-collapse collapse hide" aria-labelledby="headingOne"
                  data-bs-parent="#medicalInformationParent">
                  <div className="accordion-body py-4 px-5">
                    <MedicalInformation />
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion mb-2" id="allergiesParent">
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  " type="button" data-bs-toggle="collapse" data-bs-target="#allergies" aria-expanded="false"
                    aria-controls="allergies">
                    Allergies
                  </button>
                </h2>
                <div id="allergies" className="accordion-collapse collapse hide" aria-labelledby="headingOne"
                  data-bs-parent="#allergiesParent">
                  <div className="accordion-body py-4 px-5">
                    <FormAllergie />
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion" id="enrollmentParent">
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  " type="button" data-bs-toggle="collapse" data-bs-target="#enrollment" aria-expanded="false"
                    aria-controls="enrollment">
                    Enrollment
                  </button>
                </h2>
                <div id="enrollment" className="accordion-collapse collapse hide" aria-labelledby="headingOne"
                  data-bs-parent="#enrollmentParent">
                  <div className="accordion-body py-4 px-5">
                    <SetEnrollment />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  );
}
