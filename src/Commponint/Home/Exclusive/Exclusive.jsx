import React from "react";
import { img } from "../Exclusive/Images";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Exclusive() {
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 2,
    waitForAnimate: false,
    autoplay: true,

    nextArrow: <IoIosArrowBack />,
    prevArrow: <IoIosArrowForward />,
  };
  return (
    <div className="bg-slate-100 ">
      
      <div className=" bg-slate-100    ">
        <div>
          <h1 className="text-center text-3xl md:text-5xl  pt-11   ">
            Exclusive Properties
          </h1>
          <p className="text-center  text-xs md:text-3xl  mt-5  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" grid grid-cols-1 hover:shadow-sm duration-1000   px-7 md:grid-cols-2 lg:px-32 row-auto  gap-3 mt-7">
          <div className=" ">
            <Slider {...settings}>
              {img.map((sun) => (
                <div
                  className="w-[100%] mt- lg:h-[600px] object-contain md:  "
                  key={sun.id}
                >
                  <img
                    className="w-[100%] h-auto md:h-[600px]  rounded-lg "
                    src={sun.imgUrl}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className=" ">
            <Slider {...settings}>
              {img.map((sun) => (
                <div
                  className=" h-80 object-contain rounded-lg overflow-hidden "
                  key={sun.id}
                >
                  <img
                    className="w-[100%]   h-[100%]"
                    src={sun.imgUrl}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-2 ">
              <img
                className="w-[100%] h-[270px]"
                src="../public/Exclusive/IMG-20250305-WA0048.jpg"
              ></img>
              <img
                className="w-[100%] h-[270px]"
                src="../public/Exclusive/IMG-20250305-WA0032.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exclusive;
