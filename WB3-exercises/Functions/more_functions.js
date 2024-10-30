"use strict";

function displayMailingLabel(name, address, city, state, zip) {
  console.log("Name: " + name);
  console.log("Address: " + address);
  console.log("City, State, Zip: " + city + ", " + state + " " + zip);
  console.log("\n"); // Adds a blank line for readability
}

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(num1 + " + " + num2 + " = " + sum);
  console.log("\n"); // Adds a blank line for readability
}

function displayReceipt(totalDue, amountPaid) {
  console.log("Total Due: $" + totalDue.toFixed(2));
  console.log("Amount Paid: $" + amountPaid.toFixed(2));
  let changeDue = amountPaid - totalDue;

  if (changeDue > 0) {
    console.log("Change Due: $" + changeDue.toFixed(2));
  } else if (changeDue === 0) {
    console.log("Payment is exact. No change due.");
  } else {
    console.log("Amount Due: $" + Math.abs(changeDue).toFixed(2) + " more needed.");
  }
  console.log("\n"); // Adds a blank line for readability
}

// Call displayMailingLabel() twice with different data
displayMailingLabel("Alice Johnson", "123 Main St", "Springfield", "IL", "62701");
displayMailingLabel("Bob Smith", "456 Elm St", "Chicago", "IL", "60616");

// Call addNumbers() twice with different numbers
addNumbers(5, 10);
addNumbers(7, 3);

// Call displayReceipt() three times: overpay, exact pay, and underpay
displayReceipt(50, 60); // Overpay
displayReceipt(50, 50); // Exact pay
displayReceipt(50, 40); // Underpay
