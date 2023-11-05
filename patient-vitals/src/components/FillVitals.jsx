import React, { useState } from "react";
import axios from "axios";

const FillVitals = (formData, handleSubmit, handleInputChange) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" w-1/2 p-4 border border-gray-300 rounded-lg bg-white shadow-md m-20">
          <h2 className="text-2xl font-bold mb-4">New Vitals Details</h2>
          <form action="#" id="patientDetailsForm" onSubmit={handleSubmit}>
            <div className="mb-[15px]">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]mb-4">
              <label htmlFor="patient">UID:</label>
              <input
                type="text"
                id="patient"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.patient}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="sgot">SGOT:</label>
              <input
                type="text"
                id="sgot"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.sgot}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="sgpt">SGPT:</label>
              <input
                type="text"
                id="sgpt"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.sgpt}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="ph">pH:</label>
              <input
                type="text"
                id="ph"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.ph}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="Hba">hB:</label>
              <input
                type="text"
                id="Hba"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.hb}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="tlc">TLC:</label>
              <input
                type="text"
                id="tlc"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.tlc}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="sodium">Sodium:</label>
              <input
                type="text"
                id="sodium"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.sodium}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="potassium">Potassium:</label>
              <input
                type="text"
                id="potassium"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.potassium}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="dDimer">D-Dimer:</label>
              <input
                type="text"
                id="dDimer"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.dDimer}
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="mb-[15px]">
              <label htmlFor="platelet">Platelets:</label>
              <input
                type="text"
                id="platelet"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.platelet}
                onChange={handleInputChange}
              ></input>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Vitals
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { FormData };

export default FillVitals;
