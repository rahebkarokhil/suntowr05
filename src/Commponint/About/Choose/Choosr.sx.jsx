import React from 'react'

function Aboutthrdh() {
  return (
    <div>
      <div className="  lg:flex  md:justify-between lg:px-16 md:mt-32  ">
        <div className="  lg:w-[1000px]">
          <h1 className=" mb-5 text-xl text-center mt-5 md:text-4xl font-bold">
            Why Choose Us?
          </h1>
          <p className="px-10 lg:w-[800px] md:mt-9 md:text-sm">
            At Sun Tower Construction Co. and Real Estate Developer, we go
            beyond building homes and offices—we create exceptional living and
            working environments designed for comfort, style, and success.
            Here’s why we’re the right choice for your next investment:
          </p>
          <button className=" ml-36 mb-5 px-6 py-3 md:ml-72 bg-[#d98b46ee] mt-10 text-white">
            LEARN MORE
          </button>
        </div>
        <div className="  lg:h-[600px] lg:w-[1000px] ">
          <img
            className="px-10 w-[100%] lg:h-auto md:h-96 "
            src="/about/WhyChooseImg-DcLuBkcf.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutthrdh
