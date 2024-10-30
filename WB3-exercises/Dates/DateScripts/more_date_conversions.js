"use strict";


const myBirthday = new Date("07/07/2001");
const momsBirthday = new Date("12 19 1978");
const dadsBirthday = new Date(1976, MM - 1, 19); // Adjust the year, month (0-indexed), and day

console.log("My Birthday: " + myBirthday.toLocaleDateString());
console.log("Mom's Birthday: " + momsBirthday.toLocaleDateString());
console.log("Dad's Birthday: " + dadsBirthday.toLocaleDateString());
