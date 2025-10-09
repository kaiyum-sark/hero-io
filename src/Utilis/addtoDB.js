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
  if (storeAppData.includes(id)) {
    alert("sorry");
  } else {
    storeAppData.push(id);
    const data = JSON.stringify(storeAppData);
    localStorage.setItem("apps", data);
  }
};

const removeAppData = (id) => {
  const storeAppData = getAppData();
  const updateData = storeAppData.filter((app) => app.id !== id);
  localStorage.setItem("apps", JSON.stringify(updateData));
};

export { getAppData, addAppData, removeAppData };
