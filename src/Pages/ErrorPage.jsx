import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 items-center justify-center ">
        <h1 className="text-3xl text-red-700">Status: {error.status}</h1>
        <h3>{error.statusText}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
