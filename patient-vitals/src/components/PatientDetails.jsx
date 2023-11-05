import React, { useState } from "react";
import axios from "axios";

const PatientDetailsForm = () => {
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    phonenumber: "",
    age: "",
    gender: "",
    doa: "",
    doctor: "",
    ward: "",
    sr: "",
    diagnosis_detail: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post(
        "https://8vtk5tfp-8000.inc1.devtunnels.ms/api/patient-viewset/",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("Data Sent Successfully");
      } else {
        console.log("Data Not Sent");
      }
    } catch (error) {
      console.error("Data Not Sent", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" w-1/2 p-4 border border-gray-300 rounded-lg bg-white shadow-md m-20">
          <h2 className="text-2xl font-bold mb-4">New Patient Details</h2>
          <form action="#" id="patientDetailsForm" onSubmit={handleSubmit}>
            <div className="mb-[15px]">
              <label htmlFor="uid">uid:</label>
              <input
                type="text"
                id="uid"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.uid}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]mb-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="phonenumber">Phone Number:</label>
              <input
                type="tel"
                id="phonenumber"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.phonenumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="gender">gender:</label>
              <input
                type="text"
                id="gender"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.gender}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="doa">Date of Admission:</label>
              <input
                type="date"
                id="doa"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.doa}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="doctor">Doctor in Charge:</label>
              <input
                type="text"
                id="doctor"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.doctor}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="ward">Ward Allotted:</label>
              <input
                type="text"
                id="ward"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.ward}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="sr">SR Allotted:</label>
              <input
                type="text"
                id="sr"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.sr}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="diagnosis_detail">Diagnosis Details:</label>
              <textarea
                id="diagnosis_detail"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.diagnosis_detail}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsForm;
