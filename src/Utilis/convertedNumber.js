const convertedNumber = (num) => {
  if (num >= 100000) {
    let number = (num / 100000).toFixed() + "M";
    return number;
  } else if (num >= 1000) {
    let number = (num / 1000).toFixed() + "K";
    return number;
  } else return;
};
export { convertedNumber };
