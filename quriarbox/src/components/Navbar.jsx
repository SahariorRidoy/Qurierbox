import React from "react";
import logo from '../assets/logo.png'
import search from '../assets/search.png'
const Navbar = () => {
  return (
    <div className="bg-[#FFF1DC] py-4">
      <div className="max-w-[1320px] mx-auto items-center flex justify-between">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             <li>
              <a>Home</a>
            </li>
            
            <li>
              <a>Our services</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            
            <li>
              <a>What's new?</a>
            </li>
            
            <li>
            <a className="text-primary bg-[#FFE4D9] py-3 px-5 rounded-md font-bold ">Contact us</a>
            </li>
            </ul>
            
          </div>
          {/* Logo start */}
          <div className="flex items-center ">
            <img src={logo} alt="" />
          <a className="text-xl font-semibold text-primary">Quriarbox</a>
          </div>
        </div>
        
        <div className="flex items-center gap-12">
        <div className=" hidden lg:flex ">
          <ul className="flex justify-between gap-6">
            <li className="font-bold text-primary cursor-pointer  hover:bg-primary hover:text-white rounded-md px-3 py-2 ">
              <a>Home</a>
            </li>
            
            <li className="font-bold text-[#817382] cursor-pointer hover:bg-primary hover:text-white rounded-md px-3 py-2">
              <a>Our services</a>
            </li>
            <li className="font-bold text-[#817382] cursor-pointer hover:bg-primary hover:text-white rounded-md px-3 py-2">
              <a>About us</a>
            </li>
            
            <li className="font-bold text-[#817382] cursor-pointer hover:bg-primary hover:text-white rounded-md px-3 py-2">
              <a>What's new?</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between gap-2">
            <img className="bg-[#FFEDC9] p-3" src={search} alt="" />
          <a className="text-primary bg-[#FFE4D9] py-3 px-5 rounded-md font-bold lg:block hidden">Contact us</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
