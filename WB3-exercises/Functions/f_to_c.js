"use strict";

function convertFtoC(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Fahrenheit values to convert
let temperatures = [212, 90, 72, 32, 0, -40];

// Convert each Fahrenheit value to Celsius 
temperatures.forEach((temp) => {
  let celsius = convertFtoC(temp);
  console.log(temp + "°F is " + celsius.toFixed(2) + "°C");
});
