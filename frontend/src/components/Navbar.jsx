import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-md py-4 mb-4 border-b border-b-gray-400">
      <div className="flex items-center w-44">
        <img src={assets.logo} alt="" className="h-12 cursor-pointer" />
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Medico
        </h1>
      </div>

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        <button
          className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
          onClick={() => navigate("/login")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
