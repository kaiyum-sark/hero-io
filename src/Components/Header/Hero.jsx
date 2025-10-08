import React from "react";
import googleImg from "../../assets/header/google.png";
import appStoreImg from "../../assets/header/apple-store.png";
import img1 from "../../assets/header/img1.png";
import img2 from "../../assets/header/img2.png";
import img3 from "../../assets/header/img3.png";
import img4 from "../../assets/header/img4.png";
import img5 from "../../assets/header/img5.png";
import img6 from "../../assets/header/img6.png";

import iphone from "../../assets/header/Iphone.png";
import HeaderCard from "./HeaderCard";
const Hero = () => {
  return (
    <div className="my-10">
      <h1 className="color-black text-7xl font-bold text-center">
        We Build <br />
        <span className="text-gradient">Productive </span>Apps
      </h1>
      <p className="color-gray text-center my-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button className="flex gap-3 btn btn-outline py-2">
          <img src={googleImg} alt="" className="size-5" />
          Google Play
        </button>
        <button className="flex gap-3 btn btn-outline py-2">
          <img src={appStoreImg} alt="" className="size-5" />
          App Store
        </button>
      </div>
      {/* image section  */}
      <div className="flex  text-center items-center justify-center mt-10 ">
        <div className="relative hidden lg:block">
          <img src={img1} alt="" className="absolute -left-32 top-20" />
          <img src={img2} alt="" className="absolute -left-52 top-48" />
          <img src={img3} alt="" className="absolute -left-60 top-80" />
          <img src={iphone} alt="" />
          <img src={img4} alt="" className="absolute -right-32 top-20" />
          <img src={img5} alt="" className="absolute -right-52 top-48" />
          <img src={img6} alt="" className="absolute -right-60 top-80" />
        </div>
      </div>
      <HeaderCard></HeaderCard>
    </div>
  );
};

export default Hero;
