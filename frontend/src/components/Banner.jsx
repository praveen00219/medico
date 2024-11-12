import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center bg-primary rounded-lg p-6  sm:p-8 md:p-9 my-10  gap-8">
      {/* Left Side */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug">
          Book Appointment
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-4">
          With 100+ Trusted Doctors
        </p>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white text-gray-600 text-sm sm:text-base px-6 py-3 rounded-full mt-6 hover:scale-105 transition-all shadow-md hover:shadow-lg"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 lg:w-[300px] flex justify-center relative">
        <img
          className="w-full max-w-xs sm:max-w-sm md:absolute md:top-1/2 md:transform md:-translate-y-2/3 md:right-0 md:max-w-md lg:max-w-lg"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
