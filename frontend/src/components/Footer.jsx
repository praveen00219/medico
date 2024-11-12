import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-5">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Side */}
        <div>
          <div className="flex items-center w-44">
            <img src={assets.logo} alt="" className="h-12 cursor-pointer" />
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
              Medico
            </h1>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            Your health, our priority. Schedule appointments with ease and stay
            connected with trusted healthcare providers.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="text-xl  font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right side */}
        <div>
          <p className="text-xl  font-medium mb-5">GET IN Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-7297954444</li>
            <li>praveenbarfa001@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-4 text-gray-600 text-sm text-center">
          &copy; Copyright 2024, Medico - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
