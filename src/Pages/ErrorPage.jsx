import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import errorImg from "../assets/App-Error.png";

import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 items-center justify-center ">
        <img src={errorImg} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
