const convertedNumber = (num) => {
  if (num >= 1000000000) {
    let number = (num / 1000000000).toFixed(1) + "B";
    return number;
  } else if (num >= 1000000) {
    let number = (num / 1000000).toFixed() + "M";
    return number;
  } else if (num >= 1000) {
    let number = (num / 1000).toFixed() + "K";
    return number;
  } else return;
};
export { convertedNumber };
