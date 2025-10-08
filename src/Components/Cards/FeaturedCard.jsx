import React from "react";
import ratingIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";
import { Link } from "react-router";

const FeaturedCard = ({ app }) => {
  const { id, image, companyName, ratingAvg, downloads } = app;
  return (
    <div>
      <Link to={`/apps/${id}`} state={app}>
        <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
          <figure className="pt-3 px-3">
            <img src={image} alt="Shoes" className="rounded-xl w-full" />
          </figure>
          <div className="p-3 items-center text-center">
            <h2 className="card-title">{companyName}</h2>

            <div className="flex justify-between gap-5">
              <button className="btn bg-[#F1F5E8] text-[#00D390]">
                <img className="size-5" src={downloadIcon} alt="" /> {downloads}
              </button>
              <button className="btn bg-[#FFF0E1] text-[#FF8811]">
                <img className="size-5" src={ratingIcon} alt="" /> {ratingAvg}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
