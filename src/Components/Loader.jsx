import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader color="#8a00f7" />
    </div>
  );
};

export default Loader;
