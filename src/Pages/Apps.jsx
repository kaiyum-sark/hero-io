import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import FeaturedCard from "../Components/Cards/FeaturedCard";

const Apps = () => {
  const { appData, loading } = useAppData();
  console.log(appData);
  const [search, setSearch] = useState("");
  let term = search.trim().toLowerCase();
  const searchedApp = term
    ? appData.filter((app) => app.companyName.toLowerCase().includes(term))
    : appData;
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-center my-5">Our All Applications</h3>
      <p className="text-gray-400 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center my-3">
        <span>({searchedApp.length}) Apps Found</span>
        <label>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search App"
            className="border-2 border-purple-300 rounded-sm px-5 py-2 placeholder:text-purple-500 outline-purple-700"
          />
        </label>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {searchedApp.map((app) => (
          <FeaturedCard key={app.id} app={app}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
