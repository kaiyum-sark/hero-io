import React from "react";

const HeaderCard = () => {
  return (
    <div className="gradient-purple">
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-3xl text-white font-bold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex justify-center items-center gap-10 pt-10 text-white">
          <div>
            <p>Total Downloads</p>
            <h3 className="text-4xl font-bold my-3">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h3 className="text-4xl font-bold my-3">906K</h3>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h3 className="text-4xl font-bold my-3">132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
