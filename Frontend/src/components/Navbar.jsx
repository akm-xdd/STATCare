import { useState } from "react";

const Navbar = ({ activeLink, onLinkClick }) => {
  const handleClick = (event, component) => {
    event.preventDefault(); // Prevent the default behavior of anchor tags
    onLinkClick(component);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/">
          <span className="font-semibold text-2xl tracking-tight">
            STATCare
          </span>
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
        <div className="lg:flex-grow font-bold text-lg flex justify-center">
          <a
            href="/"
            className={`block mt-4 lg:inline-block lg:mt-0 text-white ${
              activeLink === "FillVitals" ? "text-black" : "hover:text-black"
            } mr-4`}
            onClick={(event) => handleClick(event, "FillVitals")}
          >
            Fill Vitals
          </a>
          <a
            href="/"
            className={`block mt-4 lg:inline-block lg:mt-0 text-white ${
              activeLink === "SearchVitals" ? "text-black" : "hover:text-black"
            } mr-4`}
            onClick={(event) => handleClick(event, "SearchVitals")}
          >
            Search for Vitals
          </a>
          <a
            href="/"
            className={`block mt-4 lg:inline-block lg:mt-0 text-white ${
              activeLink === "TrackPatient" ? "text-black" : "hover:text-black"
            }`}
            onClick={(event) => handleClick(event, "TrackPatient")}
          >
            Track Patient
          </a>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
