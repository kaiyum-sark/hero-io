import React from "react";
import { useLocation } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";

const AppDetails = () => {
  const location = useLocation();
  console.log(location?.state);
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
              <span className="text-gradient font-bold">{companyName}</span>
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <div className="my-5">
              <img src={downloadIcon} alt="" className="size-8" />
              <p className="text-gray-400">Downloads</p>
              <p className="text-2xl font-bold ">{downloads}</p>
            </div>
            <div className="my-5">
              <img src={ratingsIcon} alt="" className="size-8" />
              <p className="text-gray-400">Average Ratings</p>
              <p className="text-2xl font-bold ">{ratingAvg}</p>
            </div>
            <div className="my-5">
              <img src={reviewIcon} alt="" className="size-8" />
              <p className="text-gray-400">Total Reviews</p>
              <p className="text-2xl font-bold ">{reviews}</p>
            </div>
          </div>
          <button className="btn w-fit bg-green-500 text-white font-bold">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
