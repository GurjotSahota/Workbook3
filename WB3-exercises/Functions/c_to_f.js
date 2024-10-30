"use strict";

function convertCtoF(celsius) {
  return celsius * (9 / 5) + 32;
}

// Celsius values to convert
let temperatures = [100, 45, 19, 0, -7, -40];

// Convert each Celsius value to Fahrenheit
temperatures.forEach((temp) => {
  let fahrenheit = convertCtoF(temp);
  console.log(temp + "°C is " + fahrenheit.toFixed(2) + "°F");
});
