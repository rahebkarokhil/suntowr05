import React from 'react'

function Parking() {
  return (
   <div>
      <div className=" flex items-center ">
        <div className="absolute w-[100%]">
          <img
            className="w-[100%] h-[25rem]"
            src="/footer/IMG-20250305-WA0039.jpg"
            alt=""
          />
        </div>
        <div className="bg-[#00000080]/50 backdrop-blur-sm w-72  h-44 rounded-xl  relative left-20  ">
          <div className="px-4 mt-3">
            <h1 className=" text-xl text-white ">
              Own commercial parking? <br />
              Earn Money By Hosting
            </h1>
            <p className="text-slate-200 text-[11px] mt-4">
              Earn money by hosting your parking space. Start renting it out
              today and generate passive income
            </p>
            <button className="bg-[#FF3D00] rounded-md px-3 py-2 mt-2 text-white text-xs">
              start Renting
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
  
}

export default Parking
