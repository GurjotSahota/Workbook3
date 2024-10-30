"use strict";

let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

// Convert the date strings to Date objects
let start = new Date(startDate);
let end = new Date(endDate);

// Calculate the difference in milliseconds
let differenceInMs = end - start;

// Convert milliseconds to days
let differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

console.log("The number of days between " + startDate + " and " + endDate + " is " + differenceInDays + " days.");
