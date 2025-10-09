import React, { useEffect, useState } from "react";
import { getAppData } from "../Utilis/addtoDB";
import useAppData from "../Hooks/useAppData";

const Installation = () => {
  const [appList, setAppList] = useState([]);

  const { appData } = useAppData();
  useEffect(() => {
    const storedApp = getAppData();
    const convertedData = storedApp.map((id) => parseInt(id));
    const myAppList = appData.filter((app) => convertedData.includes(app.id));
    setAppList(myAppList);
  }, [appData]);

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
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort ⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Installation;
