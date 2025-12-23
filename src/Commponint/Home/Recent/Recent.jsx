import React from "react";
import { recentdata } from "./RecentData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



function Recent() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    waitForAnimate: false,
    autoplay: true,
    nextArrow: <IoIosArrowBack />,
        prevArrow: <IoIosArrowForward />
  };
  return (
    <div id="rent">
      <div className=" p-1 ">
        <div>
          <h1 className="text-4xl mt-10 px-11">Recent Properties for Rent</h1>
          <p className=" px-11 mt-2"> Lorem ipsum dolor sit amet</p>
        </div>
        <div className="grid grid-cols-1 px-8 pt-5 md:grid md:grid-cols-2  md:gap-2 md:px-6 rounded-lg  lg:grid lg:grid-cols-4">
          {recentdata.map((alldata) => (
            <div className="" key={alldata.id}>
              <div>
                <div className=" cursor-pointer hover:shadow-md duration-1000 rounded-lg ">
                  <Slider {...settings}>
                    {alldata.imageUrl.map((recentdata) => (
                      <div className="h-64 rounded-lg ">
                        <img
                          className="w-[100%] h-auto rounded-lg px-1 "
                          key={recentdata.id}
                          src={recentdata.image}
                        />
                      </div>
                    ))}
                  </Slider>
                  <div className="flex justify-between px-3  mt-10">
                    <h1 className="font-bold">{alldata.title}</h1>
                    <div className="flex items-center gap-1 text-slate-600">
                      <span>{alldata.Zero}</span>
                      <span className="text-amber-300">{alldata.icon}</span>
                      <span>{alldata.Zeroo}</span>
                    </div>
                  </div>
                  <div className="ml-3 text-slate-600">
                    <p>{alldata.description}</p>
                  </div>
                  <div className="mb-10 px-3">
                    <div className="flex items-center gap-1 text-slate-600 ">
                      <span>{alldata.bathicon}</span>
                      <span>{alldata.numberofbath}</span>
                      <span>{alldata.bedsteadicon}</span>
                      <span>{alldata.numberofbed}</span>
                      <span>{alldata.rulericon}</span>
                      <span>{alldata.Area}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">
                        <span>{alldata.rate}</span>
                        <span className="text-[13px] text-slate-600">
                          {alldata.duration}
                        </span>
                      </div>

                      <div className="flex gap-1 mb-9 md:flex  md:items-center ">
                        <div className="flex items-center gap-1 w-16 bg-[#D98A46BA] h-6 px-2 text-xs text-white rounded-md md:px-2 py-1 md:text-xs ]">
                          <FiPhone />
                          <span> call </span>
                        </div>

                        <div className=" flex items-center h-6 md:text-xs bg-[#D98A46BA] rounded-lg text-white px-2 text-sm gap-1 md:px-2 py-1   ">
                          <IoLogoWhatsapp />
                          <span>Whatsapp</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="sale">
        <h1 className="text-4xl  px-11">Recent Properties for Sale</h1>
        <p className=" px-11 mt-2"> Lorem ipsum dolor sit amet</p>
      </div>

      <div className=" px-1">
        <div className="grid grid-cols-1 px-8 pt-5 md:grid md:grid-cols-2  md:gap-1 md:px-6 rounded-lg  lg:grid lg:grid-cols-4 ">
          {recentdata.map((alldata) => (
            <div className="" key={alldata.id}>
              <div>
                <div className=" cursor-pointer hover:shadow-2xl duration-1000 rounded-lg">
                  <Slider {...settings}>
                    {alldata.imageUrl.map((recentdata) => (
                      <div className="h-64 rounded-lg ">
                        <img
                          className="w-[100%] h-auto rounded-lg px-1  "
                          key={recentdata.id}
                          src={recentdata.image}
                        />
                      </div>
                    ))}
                  </Slider>
                  <div className="flex justify-between px-3  mt-10">
                    <h1 className="font-bold">{alldata.title}</h1>
                    <div className="flex items-center gap-1 text-slate-600">
                      <span>{alldata.Zero}</span>
                      <span className="text-amber-300">{alldata.icon}</span>
                      <span>{alldata.Zeroo}</span>
                    </div>
                  </div>
                  <div className="ml-3 text-slate-600">
                    <p>{alldata.description}</p>
                  </div>
                  <div className="mb-10 px-3">
                    <div className="flex items-center gap-1 text-slate-600 ">
                      <span>{alldata.bathicon}</span>
                      <span>{alldata.numberofbath}</span>
                      <span>{alldata.bedsteadicon}</span>
                      <span>{alldata.numberofbed}</span>
                      <span>{alldata.rulericon}</span>
                      <span>{alldata.Area}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">
                        <span>{alldata.rate}</span>
                        <span className="text-[13px] text-slate-600">
                          {alldata.duration}
                        </span>
                      </div>

                      <div className="flex gap-1 mb-9 md:flex  md:items-center ">
                        <div className="flex items-center gap-1 w-16 bg-[#D98A46BA] h-6 px-2 text-xs text-white rounded-md md:px-2 py-1 md:text-xs ]">
                          <FiPhone />
                          <span> call </span>
                        </div>

                        <div className=" flex items-center h-6 md:text-xs bg-[#D98A46BA] rounded-lg text-white px-2 text-sm gap-1 md:px-2 py-1   ">
                          <IoLogoWhatsapp />
                          <span>Whatsapp</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recent;
