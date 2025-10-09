import React from "react";
import Hero from "../Components/Header/Hero";
import useAppData from "../Hooks/useAppData";
import FeaturedCard from "../Components/Cards/FeaturedCard";
import { Link } from "react-router";
import Loader from "../Components/Loader";

const Home = () => {
  const { appData, loading } = useAppData();
  if (loading) {
    return <Loader />;
  }

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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto">
        {featuredApp.map((app) => (
          <FeaturedCard key={app.id} app={app}></FeaturedCard>
        ))}
      </div>
      <div className="gradient-purple px-5 py-2 mx-auto text-center w-fit my-10 rounded-sm text-white font-bold">
        <Link to={"/apps"}>Show All</Link>
      </div>
    </div>
  );
};

export default Home;
