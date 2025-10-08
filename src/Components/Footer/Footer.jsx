import React from "react";
import { Link } from "react-router";
import logoIcon from "../../assets/logo.png";
import { Facebook } from "lucide-react";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#001931] py-5">
      <div className="flex justify-between  items-start container mx-auto border-b-1 border-gray-400 border-dashed pb-2">
        <Link to={"/"} className="flex  items-center gap-2">
          <img src={logoIcon} alt="" className="size-10" />
          <h3 className="text-white font-bold">HERO.IO</h3>
        </Link>
        <div className="text-white flex flex-col text-center ">
          <h5>Social Links</h5>
          <div className="flex items-center justify-center m-3 gap-3 ">
            <div className="bg-white rounded-full size-6 flex justify-center items-center ">
              <Facebook color="black" size="16px" />
            </div>
            <div className="bg-white rounded-full size-6 flex justify-center items-center ">
              <X color="black" size="16px" />
            </div>
            <div className="bg-white rounded-full size-6 flex justify-center items-center ">
              <Linkedin color="black" size="16px" />
            </div>
          </div>
        </div>
      </div>
      <p className="color-gray text-center">
        Copyright © 2025 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
