const convertToCelsius = function(temp) {
  const fahrenheit = ((temp - 32) / 1.8)*10;
  return Math.round(fahrenheit)/10;
};

const convertToFahrenheit = function(temp) {
  const celsius = ((temp * 1.8) + 32)*10;
  return Math.round(celsius)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
