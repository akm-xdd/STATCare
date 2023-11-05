import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FillVitals from "./components/FillVitals";
import SearchVitals from "./components/SearchVitals";
import TrackPatient from "./components/TrackPatient";
import Registration from "./components/Registration";
import axios from "axios";

const App = () => {
  const [postFormData, setPostFormData] = useState({
    date: "",
    patient: "",
    platelet: "",
    Hba: "",
    potassium: "",
    sodium: "",
    dDimer: "",
    sgot: "",
    sgpt: "",
    tlc: "",
    ph: "",
  });

  const handleFillInputChange = (e) => {
    const { id, value } = e.target;
    setPostFormData({ ...postFormData, [id]: value });
  };

  const handleFillSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(postFormData);
      const response = await axios.post(
        "https://8vtk5tfp-8000.inc1.devtunnels.ms/api/vital/",
        JSON.stringify(postFormData),
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

  const [activeComponent, setActiveComponent] = useState("");

  const handleLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const [getId, setGetId] = useState("");

  const handleRegInputChange = (e) => {
    setGetId({ getId: e.target.value });
  };

  return (
    <div draggable="false">
      <Navbar activeLink={activeComponent} onLinkClick={handleLinkClick} />
      {activeComponent === "FillVitals" && (
        <FillVitals
          formData={postFormData}
          handleInputChange={handleFillInputChange}
          handleSubmit={handleFillSubmit}
        />
      )}
      {activeComponent === "SearchVitals" && (
        <SearchVitals postFormData={postFormData} getId={getId} />
      )}
      {activeComponent === "TrackPatient" && <TrackPatient />}
      <Registration handleInputChange={handleRegInputChange} id={getId} />
    </div>
  );
};

export default App;
