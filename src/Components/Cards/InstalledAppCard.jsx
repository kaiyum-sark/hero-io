import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import { convertedNumber } from "../../Utilis/convertedNumber";
import ratingsIcon from "../../assets/icon-ratings.png";
import { removeAppData } from "../../Utilis/addtoDB";
// import reviewIcon from "../assets/icon-review.png";
const InstalledAppCard = ({ app, setAppList }) => {
  const { id, title, image, ratingAvg, reviews, size, downloads } = app;

  const handleRemove = (id) => {
    removeAppData(id);
    setAppList((prev) => prev.filter((app) => app.id !== id));
  };
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white p-2 rounded-sm shadow-lg items-center ">
      <div className="flex gap-3">
        <img src={image} alt="" className="max-h-20 rounded-sm" />
        <div className="flex flex-col justify-around">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex gap-2">
            <div className="flex  items-center justify-start">
              <img src={downloadIcon} alt="" className="max-h-4" />
              <span className="font-bold text-green-600">
                {convertedNumber(downloads)}
              </span>
            </div>
            <div className="flex items-center justify-start">
              <img src={ratingsIcon} alt="" className="max-h-4" />
              <span className="font-bold text-green-600">{ratingAvg}</span>
            </div>
            <span>{size}MB</span>
          </div>
        </div>
      </div>
      <button
        className="bg-[#00D390] text-white font-semibold h-fit px-4 py-1 rounded-sm"
        onClick={() => handleRemove(id)}
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
