import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className=" h-80 mt-36 flex px-10  justify-between">
      <div>
        <div>
          <h1 className="w-20 text-sm font-bold mb-9 cursor-pointer ">
            Sun tower suntower.com
          </h1>
          <p className="w-52 text-sm  mt-20  cursor-pointer">
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
        <div className="mt-11">
          <span className="text-xs text-slate-800  ">
            © 2025 Real Estate Developer & Construction Company • Terms of Use •
            Privacy Policy
          </span>
        </div>
      </div>

      <div className="flex gap-24 pr-80 text-xs text-slate-600  ">
        <ul className="space-y-5  cursor-pointer">
          <li className="font-bold  cursor-pointer">ABOUT Us</li>
          <li>Advertising </li>
          <li>Career</li>
          <li>Privacy Policy</li>
          <li>Property Blog</li>
        </ul>
        <ul className="space-y-5 cursor-pointer">
          <li className="font-bold">Get our social</li>
          <li>Facebook </li>
          <li>X (Previously Twitter)</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
        <ul className="space-y-5 cursor-pointer">
          <li className="font-bold">Support </li>
          <li>Help</li>
          <li>Contact Us</li>
          <li>Call Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
