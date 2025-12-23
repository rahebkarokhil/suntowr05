import React from "react";

function Discover() {
  return (
    <div>
      <div className="flex-col justify-items-center mt-10">
        <h1 className=" text-xl lg:text-3xl font-bold">
          Discover the latest projects
        </h1>

        <p className="text-[10px] lg:text-xs">
          Take a deep dive and browse homes for sale, original photos,
        </p>
        <p className="text-[10px] lg:text-xs">
          residentreviews and local insights to find what is right for you.
        </p>
      </div>

      <div className=" grid grid-cols-1 px-12  md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-36  ">
        <div className=" bg-[url('/Discover/IMG-20250305-WA0036.jpg')] h-96 mt-10 md:mt-5 md:h-[300px] bg-no-repeat bg-cover  flex justify-centers rounded-lg cursor-pointer">
          <div className=" flex justify-between w-[95%] mt-80 md:flex md:justify-between ml-2 px-2 md:w-[94%] bg-gray-700/50  h-5 items-center text-xs   rounded-lg md:mt-64   text-white   cursor-pointer">
            <span>Town House</span>
            <span>2Properties</span>
          </div>
        </div>

        <div className=" bg-[url('/Discover/IMG-20250305-WA0050.jpg')] h-96  md:mt-5 md:h-[300px] bg-no-repeat bg-cover  flex justify-centers rounded-lg cursor-pointer">
          <div className=" flex justify-between w-[95%] mt-80 md:flex md:justify-between ml-2 px-2 md:w-[90%] bg-gray-700/50  h-5 items-center text-xs   rounded-lg md:mt-64   text-white   cursor-pointer">
            <span>Town House</span>
            <span>2Properties</span>
          </div>
        </div>
        <div className=" bg-[url('/Discover/IMG-20250305-WA0053.jpg')] h-96  md:mt-5 md:h-[300px] bg-no-repeat bg-cover  flex justify-centers rounded-lg cursor-pointer">
          <div className=" flex justify-between w-[95%] mt-80 md:flex md:justify-between ml-2 px-2 md:w-[94%] bg-gray-700/50  h-5 items-center text-xs   rounded-lg md:mt-64   text-white   cursor-pointer">
            <span>Town House</span>
            <span>2Properties</span>
          </div>
        </div>
        <div className=" bg-[url('/Discover/IMG-20250305-WA0041.jpg')] h-96  md:mt-5 md:h-[300px] bg-no-repeat bg-cover  flex justify-centers rounded-lg cursor-pointer">
          <div className="  flex justify-between w-[95%] mt-80 md:flex md:justify-between ml-2 px-2 md:w-[94%] bg-gray-700/50  h-5 items-center text-xs   rounded-lg md:mt-64   text-white   cursor-pointer">
            <span>Town House</span>
            <span>2Properties</span>
          </div>
        </div>

        <div className=" bg-[url('/Discover/IMG-20250305-WA0046.jpg')]  h-96 md:mt-5   md:h-[300px] bg-no-repeat bg-cover  flex justify-centers rounded-lg cursor-pointer">
          <div className="  flex justify-between w-[95%] mt-80 md:flex md:justify-between ml-2 px-2 md:w-[94 %] bg-gray-700/50  h-5 items-center text-xs   rounded-lg md:mt-64   text-white   cursor-pointer">
            <span>Town House</span>
            <span>2Prope rties</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
