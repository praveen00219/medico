import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400">
      <div className="flex items-center w-44">
        <img src={assets.logo} alt="" className="h-12 cursor-pointer" />
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Medico
        </h1>
      </div>

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="icon" />
            <div className="absolute top-0 right-0 pt-16 text-sm font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 shadow-md bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer  flex gap-2 items-center"
                >
                  <img
                    className="w-4 rounded-full"
                    src={assets.profile_pic}
                    alt="profile"
                  />
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer flex gap-2 items-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faFileArrowUp} />
                  </span>
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer flex gap-2 items-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </span>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
