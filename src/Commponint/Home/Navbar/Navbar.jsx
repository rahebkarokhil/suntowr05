import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { PiBuildingApartment } from "react-icons/pi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);
  const [toggle, settoggle] = useState(true);
  return (
    <>
      <div className=" flex justify-center  ">
        <div className="hidden w-[98%] md:flex md:z-50  sm:z-50 justify-between px-5 mt-4 items-center border rounded-full  h-16 xl:z-50  bg-white  fixed  ">
          <div>
            <a className="transition-all top-40" href="#Home">
              <img
                className="w-10 h-10"
                src="/images/suntower-Cpx2bKzv-removebg-preview.png"
                alt=""
              />
            </a>
          </div>
          <ul className="lg:flex   gap-5 cursor-pointer text-gray-600  hidden">
            <li className="hover:text-[#d98b46ee]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#d98b46ee]">
              <Link to="/about"> About</Link>
            </li>
            <div className="relative">
              <div className="flex gap-1 items-center over hover:text-[#d98b46ee]">
                
              
                <li onClick={() => setDropdown(!Dropdown)}>Prperties</li>
                <GoTriangleDown />
              </div>

              <ul
                className={` absolute left-0 bg-white w-52 top-6 flex-col justify-items-center rounded-lg ${
                  Dropdown ? "h-52 " : "h-0"
                } transition-all duration-300 overflow-hidden  `}
              >
                <div className="flex border-t w-44 h-10 mt-5 gap-3 items-center content-between  ">
                  <GoHome className=" text-2xl " />
                  <li className="text-sm hover:text-[#d98b46ee]">
                    <a href="#explor"> Beast Property Deals </a>
                  </li>
                </div>
                <div className="flex border-t mt-2 w-44 h-10 gap-3 pr-9 items-center justify-between ">
                  <PiBuildingApartment className="text-2xl" />

                  <li className="text-sm  hover:text-[#d98b46ee] ">
                    <a href="#trending"> treading Listing</a>
                  </li>
                </div>
                <div className="flex border-t mt-2 w-44 h-10 gap-3 items-center  content-between">
                  <MdOutlineMapsHomeWork className=" mr-3 text-2xl" />
                  <li className="text-sm  hover:text-[#d98b46ee]">
                    <a href="#rent"> properties For Rent</a>
                  </li>
                </div>

                <div className="flex border-t w-44 h-10  gap-3 items-center  content-between ">
                  <GoHome className=" mr-3 text-2xl" />
                  <li className="text-sm  hover:text-[#d98b46ee]">
                    <a href="#sale"> properties For Sale</a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="hover:text-[#d98b46ee]">
              <Link to="/blog">Blog</Link>
            </div>

            <li className="hover:text-[#d98b46ee]">Contact</li>
          </ul>
          <div className=" sm:flex items-center gap-3     hidden  ">
            <FiPhone />
            <span>+93 70 350 0002</span>

            <button className="px-4  py-1 bg-[#D98A46] rounded-full text-white text-1 ">
              Add Property
            </button>

            <div>
              {toggle ? (
                <div onClick={() => settoggle(!toggle)}>
                  <MdMenuOpen className=" hidden text-3xl cursor-pointer md:flex lg:hidden  " />
                </div>
              ) : (
                <div onClick={() => settoggle(!toggle)}>
                  <RxCross2 className=" hidden text-3xl cursor-pointer  md:flex lg:hidden " />
                </div>
              )}
            </div>
            <ul
              className={` absolute ml-2 bg-white  top-16   rounded-b-lg md:w-[32%]  ${
                toggle ? "h-0 " : "h-52 "
              } transition-all duration-300 overflow-hidden  `}
            >
              <div className="flex border-t  h-10  gap-3  justify-center items-center  ">
                <li className="text-sm hover:text-[#d98b46ee]">Home</li>
              </div>
              <div className="flex border-t  h-10  gap-3  justify-center items-center ">
                <li className="text-sm  hover:text-[#d98b46ee] ">About US</li>
              </div>
              <div className="flex border-t  h-10  gap-3  justify-center items-center  ">
                <li className="text-sm  hover:text-[#d98b46ee]">properties</li>
              </div>

              <div className="flex border-t  h-10  justify-center gap-3 items-center  ">
                <li className="text-sm  hover:text-[#d98b46ee]">Bloge</li>
              </div>

              <div className="flex border-t  h-10  justify-center gap-3 items-center  ">
                <li className="text-sm  hover:text-[#d98b46ee]">Bloge</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-10 w-[100%] flex justify-center">
        <div className=" h-16 z-40 justify-between border px-5 mt-1 items-center rounded-full bg-white  flex md:hidden w-[95%] fixed">
          <div>
            <img
              className="w-10 h-10"
              src="/images/suntower-Cpx2bKzv-removebg-preview.png"
              alt=""
            />
          </div>

          <div>
            {toggle ? (
              <div onClick={() => settoggle(!toggle)}>
                <MdMenuOpen className="text-3xl cursor-pointer" />
              </div>
            ) : (
              <div onClick={() => settoggle(!toggle)}>
                <RxCross2 className="text-3xl cursor-pointer" />
              </div>
            )}
          </div>
          <ul
            className={` absolute ml-2 bg-white w-[85%] top-16  rounded-b-lg ${
              toggle ? "h-0 " : "h-52 "
            } transition-all duration-300 overflow-hidden  `}
          >
            <div className="flex border-t  h-10  gap-3  justify-center items-center  ">
              <li className="text-sm hover:text-[#d98b46ee]">
                <Link to="/">Home</Link>
              </li>
            </div>
            <div className="flex border-t  h-10  gap-3  justify-center items-center ">
              <li className="text-sm  hover:text-[#d98b46ee] ">
                <Link to="./about">About</Link>
              </li>
            </div>
            <div className="flex border-t  h-10  gap-3  justify-center items-center  ">
              <li className="text-sm  hover:text-[#d98b46ee]">properties</li>
            </div>

            <div className="flex border-t  h-10  justify-center gap-3 items-center  ">
              <li className="text-sm  hover:text-[#d98b46ee]">
                <Link to="./blog">Blog</Link>
              </li>
            </div>

            <div className="flex border-t  h-10  justify-center gap-3 items-center  ">
              <li className="text-sm  hover:text-[#d98b46ee]">Bloge</li>
            
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
