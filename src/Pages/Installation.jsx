import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const formatDownloads = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(".0", "") + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(".0", "") + "K";
  } else {
    return num;
  }
};

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installApps")) || [];
    setInstalledApps(apps);
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...installedApps];

    if (type === "low") {
      sorted.sort((a, b) => a.size - b.size);
    } else if (type === "high") {
      sorted.sort((a, b) => b.size - a.size);
    }

    setInstalledApps(sorted);
  };

  const handleUninstall = (id) => {
    const update = installedApps.filter(app => app.id !== id);
    localStorage.setItem("installApps", JSON.stringify(update));
    setInstalledApps(update);
    toast.success("App Uninstalled Successfully");
  };

  return (
    <div>

     
      <div className="bg-gray-100 p-6 text-center">
        <h1 className="font-bold text-4xl">Your Installed Apps</h1>
        <p className="text-gray-600 mt-1">Explore All Trending Apps on the Market Developed by us</p>
      </div>

      <div className="flex justify-between items-center px-6 mt-4">

       
        <p className="text-lg font-semibold">{installedApps.length} apps found</p>

  
        <select
          className="border p-2 rounded bg-white shadow"
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort By Size</option>
          <option value="low">Size: Low → High</option>
          <option value="high">Size: High → Low</option>
        </select>

      </div>

    
      <div className="grid grid-cols-1 gap-4 p-5">

        {installedApps.length === 0 ? (
          <p className="text-4xl text-center mt-10 font-bold text-red-500">
            No Apps Installed Yet
          </p>
        ) : (
          installedApps.map(ap => (
            <div
              key={ap.id}
              className="flex items-center justify-between bg-gray-200 rounded-lg shadow p-4"
            >

             
              <div className="flex gap-4 items-center">
                <img
                  src={ap.image}
                  className="w-20 h-20 rounded bg-white shadow"
                  alt={ap.title}
                />

                <div>
                  <h2 className="font-bold text-xl">{ap.title}</h2>
                  <p className="text-gray-700">{ap.description}</p>

          
                  <p><b>Downloads:</b> {formatDownloads(ap.downloads)}</p>

                  <p><b>Rating:</b> ⭐ {ap.rating}</p>
                  <p><b>Size:</b> {ap.size} MB</p>
                </div>
              </div>

          
              <button
                onClick={() => handleUninstall(ap.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Uninstall
              </button>
            </div>
          ))
        )}

      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Installation;
