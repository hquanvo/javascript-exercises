const convertToCelsius = function(deg) {
  return parseFloat(((deg - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(deg) {
  return parseFloat((deg * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
