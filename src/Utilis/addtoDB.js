const getAppData = () => {
  const appDataSTR = localStorage.getItem("apps");

  if (appDataSTR) {
    const storeAppData = JSON.parse(appDataSTR);
    return storeAppData;
  } else {
    return [];
  }
};

const addAppData = (id) => {
  const storeAppData = getAppData();
  if (!storeAppData.includes(id)) {
    storeAppData.push(id);
    const data = JSON.stringify(storeAppData);
    localStorage.setItem("apps", data);
  }
};

const removeAppData = (id) => {
  const storeAppData = getAppData();
  const updateData = storeAppData.filter((appId) => appId !== id);
  const data = JSON.stringify(updateData);
  localStorage.setItem("apps", data);
};

export { getAppData, addAppData, removeAppData };
