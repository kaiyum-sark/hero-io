import React from "react";
import Hero from "../Components/Header/Hero";
import useAppData from "../Hooks/useAppData";
import FeaturedCard from "../Components/Cards/FeaturedCard";

const Home = () => {
  const { appData } = useAppData();

  const featuredApp = appData.slice(0, 8);

  return (
    <div>
      <Hero />
      <div className="my-5 text-center">
        <h3
          className="text-3xl font-bold my-3
        "
        >
          Trending Apps
        </h3>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredApp.map((app) => (
          <FeaturedCard key={app.id} app={app}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
