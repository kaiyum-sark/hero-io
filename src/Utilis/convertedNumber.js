const convertedNumber = (num) => {
  if (num >= 100000) {
    let number = (num / 100000).toFixed(1) + "M";
    return number;
  } else if (num >= 1000) {
    let number = (num / 1000).toFixed(1) + "K";
    return number;
  } else return;
};
export { convertedNumber };
