import numeral from "numeral";

export default (number, type) => {
  if (type && type == 1) {
    return numeral(number).format("0,0.00");
  } else {
    return numeral(number).format("0,0").replaceAll(",", " ");
  }
};
