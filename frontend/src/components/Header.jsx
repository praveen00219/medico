import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg p-6 md:p-10 lg:p-20 gap-6">
      {/* Left Container */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start gap-6 py-6">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center md:text-left leading-snug md:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light text-center md:text-left">
          <img
            className="w-20 md:w-28"
            src={assets.group_profiles}
            alt="group-pic"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-700 text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="arrow_icon" />
        </a>
      </div>

      {/* Right Container */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full h-auto rounded-lg md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-0"
          src={assets.header_img}
          alt="header_img_doctor"
        />
      </div>
    </div>
  );
};

export default Header;
