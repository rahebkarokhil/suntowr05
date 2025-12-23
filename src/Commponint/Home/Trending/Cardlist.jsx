import React from "react";
import { data } from "./Data";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CardList = () => {
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
    prevArrow: <IoIosArrowForward />,
  };
  return (
    <div id="Prperties ">
      <h1 className="text-3xl px-24 mt-40 md:text-4xl xs md:text-center md:mb-5 cursor-pointer ">
        Trending Listings
      </h1>

      <div className="flex gap-1 mt-2 px-16 justify-center   ">
        <div>
          <button className="border px-2 cursor-pointer text-xs py-1 pl-2 rounded-full  hover:bg-[#d98b46ee] hover:text-white md:text-base md:px-7 md:text-center">
            All
          </button>
        </div>
        <div>
          <button className="border px-2 cursor-pointer text-xs py-1 pl-2 rounded-full  hover:bg-[#d98b46ee] hover:text-white md:text-base md:px-7 md:text-center">
            Cottages
          </button>
        </div>
        <div>
          <button className="border px-3 py-1 cursor-pointer text-xs rounded-full  hover:bg-[#d98b46ee] hover:text-white  md:text-base md:px-7 md:text-center">
            Apartman
          </button>
        </div>
        <div>
          <button className="border px-3 py-1 cursor-pointer text-xs rounded-full  hover:bg-[#d98b46ee] hover:text-white  md:text-base     md:px-7 md:text-center">
            Home
          </button>
        </div>
      </div>

      <div className="grid  grid-cols-1 px-10 lg:px-8 gap-y-4  mt-10 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2  xl:grid xl:grid-cols-4 -  ">
        {data.map((all) => (
          <div
            className="shadow-sm  hover:shadow-2xl duration-1000 px-1 rounded-lg"
            key={all.id}
          >
            <Slider {...settings}>
              {all.imageUrl.map((data) => (
                <img key={data.id} src={data.img} alt="" />
              ))}
            </Slider>

            <div className="pr-2 pl">
              <div className="flex justify-between items-center mt-2 ">
                <h1 className="font-bold cursor-pointer mt-4">{all.title}</h1>
                <div className="flex items-center cursor-pointer">
                  <span className="text-sm cursor-pointer">{all.Zero}</span>
                  <span className="text-orange-300 cursor-pointer text-sm ">
                    {all.icon}
                  </span>
                  <span className="text-gray-400 cursor-pointer text-sm ml-1">
                    {all.Zeroo}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 cursor-pointer mb-4">
                {all.description}
              </p>

              <div
                id="trending"
                className="flex justify-between cursor-pointer mb-5 items-center   md:gap-5"
              >
                <div>
                  <div className="flex gap-1 text-slate-500 items-center">
                    <span className="mt-2 cursor-pointer mb-2">
                      {all.bathicon}
                    </span>
                    <span className="text-sm cursor-pointer">
                      {all.numberofbath}
                    </span>
                    <span>{all.bedsteadicon}</span>
                    <span className="text-sm cursor-pointer">
                      {all.numberofbed}
                    </span>
                    <span>{all.rulericon}</span>
                    <span className="text-sm cursor-pointer">{all.Area}</span>
                  </div>
                  <div className="flex cursor-pointer ">
                    <h2 className=" font-bold text-sm cursor-pointer">
                      {all.rate}
                    </h2>
                    <span className="text-gray-800 text-sm mt-1 cursor-pointer">
                      {all.duration}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1  cursor-pointer ">
                  <div className="flex items-center gap-1 bg-[#D98A46BA] h-5  px-1 w-10 text-xs text-white rounded-md ]">
                    <FiPhone className="text-[10px]" />
                    <span> call </span>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer bg-[#D98A46BA] w-13  h-5   px-1 text-[10px] text-white rounded-md ">
                    <IoLogoWhatsapp className="text-[10px]" />
                    <span>Whatsapp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
