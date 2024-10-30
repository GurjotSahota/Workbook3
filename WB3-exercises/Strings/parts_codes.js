"use strict";

function getSupplier(code) {
  return code.substring(0, code.indexOf(":"));
}

function getProductNumber(code) {
  return code.substring(code.indexOf(":") + 1, code.indexOf("-"));
}

function getSize(code) {
  return code.substring(code.indexOf("-") + 1);
}

// Test part codes
let partCode1 = "ACME:123-L";
let partCode2 = "DI:12345-M";
let partCode3 = "ACE:1-12";

function displayPartDetails(partCode) {
  let supplier = getSupplier(partCode);
  let productNumber = getProductNumber(partCode);
  let size = getSize(partCode);

  console.log(`Part Code: ${partCode}`);
  console.log(`Supplier: ${supplier}`);
  console.log(`Product Number: ${productNumber}`);
  console.log(`Size: ${size}`);
}

// Display details for each part code
displayPartDetails(partCode1);
displayPartDetails(partCode2);
displayPartDetails(partCode3);
