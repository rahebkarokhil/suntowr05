import React from 'react'

function Aboutsecond() {
  return (
    <div className="">
      <div className=" grid grid-cols-1 md:grid-cols-1 bg-[#f9f9f9]  lg:grid-cols-2 xl:grid-cols-2 lg:pt-8    ">
        <div className=" px-11 ">
          <div className="">
            <h1 className=" text-4xl font-bold  text-center py-8">
              Our Vision
            </h1>
            <p className="  ">
              At Sun Tower Construction Co. and Real Estate Developer, we take
              pride in being a trusted leader in construction and real estate.
              With over 14 years of expertise, we are committed to crafting
              top-quality residential and commercial spaces that stand out.
              Licensed by the Ministry of Commerce and Industry.
            </p>
          </div>
          <div className="py-8">
            <img
              className="pb- w-[100%] h-auto  "
              src="/about/OurVisionImg-B4KxZiau.png"
              alt=""
            />
          </div>
        </div>

        <div className="px-11 ">
          <div className="">
            <img
              className="w-[100%] h-auto  "
              src="/about/OurMissionImg -noixK_I3.png"
              alt=""
            />
          </div>
          <div className="  ">
            <h1 className="text-4xl font-bold py-4 text-center ">
              Our Product
            </h1>
            <p className=" py-8">
              At Sun Tower Construction Co. and Real Estate Developer, we take
              pride in being a trusted leader in construction and real estate.
              With over 14 years of expertise, we are committed to crafting
              top-quality residential and commercial spaces that stand out.
              Licensed by the Ministry of Commerce and Industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsecond
