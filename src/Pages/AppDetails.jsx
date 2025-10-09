import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { addAppData, getAppData } from "../Utilis/addtoDB";
import { convertedNumber } from "../Utilis/convertedNumber";
import Chart from "../Components/Chart";

const AppDetails = () => {
  const location = useLocation();

  const {
    companyName,
    description,
    downloads,
    id,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = location?.state || {};
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    const storedApps = getAppData();
    if (storedApps.includes(id)) {
      setInstalled(true);
    }
  }, []);

  const handleInstall = (id) => {
    addAppData(id);
    setInstalled(true);
  };

  return (
    <div className="container mx-auto my-10">
      {/* top details card  */}
      <div className="flex flex-col lg:flex-row gap-10 mx-auto">
        <img src={image} alt="" className="rounded-sm  mx-auto size-80" />
        <div className="flex  flex-col mx-auto md:flex-1/3 justify-between">
          <div className=" border-b-2 border-gray-300 pb-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-400 ">
              Developed by{" "}
              <span className="text-pink font-bold">{companyName}</span>
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <div className="my-5">
              <img src={downloadIcon} alt="" className="size-8" />
              <p className="text-gray-400">Downloads</p>
              <p className="text-2xl font-bold ">
                {convertedNumber(downloads)}
              </p>
            </div>
            <div className="my-5">
              <img src={ratingsIcon} alt="" className="size-8" />
              <p className="text-gray-400">Average Ratings</p>
              <p className="text-2xl font-bold ">{ratingAvg}</p>
            </div>
            <div className="my-5">
              <img src={reviewIcon} alt="" className="size-8" />
              <p className="text-gray-400">Total Reviews</p>
              <p className="text-2xl font-bold ">{convertedNumber(reviews)}</p>
            </div>
          </div>
          <button
            onClick={() => handleInstall(id)}
            className={`btn w-fit ${
              installed
                ? " bg-[#FF8811] text-white font-bold"
                : " bg-green-500 text-white font-bold hover:brightness-90"
            }`}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      {/* Recharts  */}
      <div className="border-b-2 border-gray-300">
        <h3> Review Charts</h3>
        <Chart ratings={ratings}></Chart>
      </div>
      {/* Description  */}
      <div>
        <h3 className="font-semibold my-10">Description</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
