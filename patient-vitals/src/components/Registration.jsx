import React, { useState } from "react";
import PatientDetailsForm from "./PatientDetails";
// import axios from "axios";

const RegistrationOptions = (id, handleSubmit, handleInputChange) => {
  const [isactive, setIsActive] = useState(false);

  // const [id, setId] = useState("");

  // const handleInputChange = (e) => {
  //   setId({ id: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     console.log(id);
  //     const response = await axios.get(
  //       "https://8vtk5tfp-8000.inc1.devtunnels.ms/api/vital/" + id.id + "/",

  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response.data);

  //     if (response.status === 200) {
  //       console.log("Data received Successfully");
  //     } else {
  //       console.log("Data Not received");
  //     }
  //   } catch (error) {
  //     console.error("Data Not received", error);
  //   }
  // };

  const setRegistration = () => {
    setIsActive(!isactive);
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-center ">
        <div className="registration-container w-half p-4 border border-gray-300 rounded-lg bg-white shadow-md">
          <div className="registration-options flex justify-between">
            <div className="option w-1/2 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-bold">Track Patient</h3>
              <form action="track_patient_details.html" onSubmit={handleSubmit}>
                <div className="mb-[15px]">
                  <label htmlFor="uhidOrRfid">UHID or RFID:</label>
                  <input
                    type="text"
                    id="uhidOrRfid"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={id.id}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="text-center justify-center text-lg font-bold p-4">
              <h1>OR</h1>
            </div>
            <div className="option w-1/2 p-4 m-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-bold">Register New Patient</h3>
              <form action="new_patient_details.html">
                <button
                  type="button"
                  onClick={setRegistration}
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Register New Patient
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isactive && <PatientDetailsForm />}
    </div>
  );
};

export default RegistrationOptions;
