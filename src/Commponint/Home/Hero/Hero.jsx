import React from "react";
import { GoHome } from "react-icons/go";
import { HiHomeModern } from "react-icons/hi2";
import { HiMiniHomeModern } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <div id="Home" className="bg-hero-bg bg-cover h-screen justify-center sm:object-contain flex-col items-center opacity(90%) sm:h-auto text-center w-[100%] ">
      <div className="bg-black/60 pt-24 h-screen  ">
        <div className="h-screen flex flex-col justify-center items-center ">
          <h1 className=" text-2xl text-white md:text-5xl">
            Find Your Perfect Home
          </h1>
          <p className="text-xs text-white mt-3">
            serche property for sale and to rent The kabul
          </p>
          <input
            className=" w-72 md:w-[500px] rounded-full h-10 pl-7 text-xs mt-3 "
            type="text "
            placeholder="Enter Name , keyword"
          />

          <div className=" h-7 w-7 ml-[59%] absolute flex justify-center mb-5  md:absolute md:ml-[29rem]  md:mt-2 bg-[#d98b46ee] md:h-8 md:w-8 rounded-full md:mb-3 text-white md:flex items-center md:justify-center xl:ml-[29rem] ">
            <CiSearch className="size-4 md:size-6 " />
          </div>
          <p className=" text-sm text-white mt-5">What Are looking for?</p>
          <div className="flex gap-2 mt-3">
            <div className="flex w-24 h-10 md:w-32 md:h-10 items-center justify-between px-1 pr-3 bg-white/70 rounded-full cursor-pointer">
              <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center ">
                <GoHome />
              </div>
              <span className="text-[10px] md:text-sm text-white">
                Modern villa
              </span>
            </div>

            <div className="flex w-24 h-10 md:w-32 md:h-10 items-center  px-1 pr-3 bg-white/70 rounded-full cursor-pointer">
              <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center ">
                <HiHomeModern />
              </div>
              <span className="text-[10px] ml-1  md:text-sm text-white">
                Apartman
              </span>
            </div>

            <div className="flex w-24 h-10 md:w-32 md:h-10 items-center justify-between px-1 pr-3 bg-white/70 rounded-full cursor-pointer">
              <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center ">
                <HiMiniHomeModern />
              </div>
              <span className="text-[10px] md:text-sm text-white">
                Town House
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
