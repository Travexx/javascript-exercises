function round(value, precision){
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) /  multiplier;
}

const convertToCelsius = function(temp) {
    celcius = (temp - 32) * (5/9);
    return round(celcius, 1);
};

const convertToFahrenheit = function(temp) {
    farenheit = (temp * (9/5) + 32);
    return round(farenheit, 1);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
