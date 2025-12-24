import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="  md:flex px-10 mt-36  md:justify-between">
        <div>
          <div>
            <h1 className="w-20 text-sm font-bold  cursor-pointer ">
              Sun tower suntower.com
            </h1>
            <p className="md:w-52 text-sm font-bold mt-  cursor-pointer">
              Your time to relax. Our time to sparkle.
            </p>
          </div>
          <div className="flex  mt-8 gap-1  ">
            <span className=" rounded-full px-2 py-2 items-center border flex justify-center  cursor-pointer">
              <TfiGithub />
            </span>
            <span className="rounded-full  px-2 py-2 border items-center flex justify-center  cursor-pointer">
              <FaFacebook />
            </span>
            <span className="rounded-full  px-2 py-2 border items-center flex justify-center  cursor-pointer">
              <FaInstagram />
            </span>
            <span className="rounded-full  px-2 py-2 border items-center flex justify-center  cursor-pointer">
              <FaLinkedin />
            </span>
          </div>
        </div>

        <div className="md:flex gap-24 mt-7 text-md text-slate-600  ">
          <ul className="space-y-2 cursor-pointer">
            <li className="font-bold  cursor-pointer">ABOUT Us</li>
            <li>Advertising </li>
            <li>Career</li>
            <li>Privacy Policy</li>
            <li>Property Blog</li>
          </ul>
          <ul className="space-y-2 cursor-pointer">
            <li className="font-bold">Get our social</li>
            <li>Facebook </li>
            <li>X (Previously Twitter)</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
          <ul className="space-y-2 cursor-pointer">
            <li className="font-bold">Support </li>
            <li>Help</li>
            <li>Contact Us</li>
            <li>Call Us</li>
          </ul>
        </div>
      </div>
      <div className="my-11 ml-10">
        <span className="text-md text-slate-800  ">
          © 2025 Real Estate Developer & Construction Company • Terms of Use •
          Privacy Policy
        </span>
      </div>
    </div>
  );
}

export default Footer;
