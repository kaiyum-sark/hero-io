import React, { useEffect, useState } from "react";
import { getAppData } from "../Utilis/addtoDB";
import useAppData from "../Hooks/useAppData";
import InstalledAppCard from "../Components/Cards/InstalledAppCard";
import { Bounce, ToastContainer } from "react-toastify";

const Installation = () => {
  const [appList, setAppList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  const { appData } = useAppData();

  useEffect(() => {
    const storedApp = getAppData();
    const convertedData = storedApp.map((id) => parseInt(id));
    const myAppList = appData.filter((app) => convertedData.includes(app.id));
    setAppList(myAppList);
  }, [appData]);

  const sortedItem = (() => {
    if (sortOrder === "download-max") {
      return [...appList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "download-min") {
      return [...appList].sort((a, b) => b.size - a.size);
    } else {
      return appList;
    }
  })();

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold my-5">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center my-5">
        <h3 className="text-xl font-semibold">Apps Found</h3>
        {/* sort button  */}
        <label className="form-control w-full max-w-xs">
          <select
            className="select "
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="download-max">Low-High</option>
            <option value="download-min">High-Low</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {sortedItem.map((app) => (
          <InstalledAppCard
            key={app.id}
            app={app}
            setAppList={setAppList}
          ></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
