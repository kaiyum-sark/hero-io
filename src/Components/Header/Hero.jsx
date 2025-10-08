import React from "react";
import googleImg from "../../assets/header/google.png";
import appStoreImg from "../../assets/header/apple-store.png";

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
      <div></div>
    </div>
  );
};

export default Hero;
