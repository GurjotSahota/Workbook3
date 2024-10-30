"use strict";

function parseAndDisplayName(name) {
  let nameParts = name.split(" ");

  console.log("Name: " + name);

  if (nameParts.length === 1) {
    console.log("Only name: " + nameParts[0]);
  } else if (nameParts.length === 2) {
    console.log("First name: " + nameParts[0]);
    console.log("Last name: " + nameParts[1]);
  } else if (nameParts.length === 3) {
    console.log("First name: " + nameParts[0]);
    console.log("Middle name: " + nameParts[1]);
    console.log("Last name: " + nameParts[2]);
  }
}

// Test cases
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
