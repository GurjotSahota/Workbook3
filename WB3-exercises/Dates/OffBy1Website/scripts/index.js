"use strict";

function displayDate() {
  const dateInput = document.getElementById("dateInput").value;
  const message = document.getElementById("message");

  if (dateInput) {
    // Convert the date string to a Date object
    const dateObject = new Date(dateInput);
    message.textContent = "Selected Date: " + dateObject.toString();
  } else {
    message.textContent = "Please select a date.";
  }
}
