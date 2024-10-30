"use strict";

function parseAndDisplayName(name) {
  let spaceIndex = name.indexOf(" ");
  let firstName = name.substring(0, spaceIndex);
  let lastName = name.substring(spaceIndex + 1);

  console.log("Name: " + name);
  console.log("First name: " + firstName);
  console.log("Last name: " + lastName);
}

// Test cases
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
