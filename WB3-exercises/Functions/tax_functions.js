"use strict";

function getSocSecTax(grossPay) {
  return grossPay * 0.062;
}

function getMedicareTax(grossPay) {
  return grossPay * 0.0145;
}

function getFederalTax(grossPay, withholdingCode) {
  let taxRate;

  if (withholdingCode === 0) {
    taxRate = 0.23;
  } else if (withholdingCode === 1) {
    taxRate = 0.21;
  } else if (withholdingCode === 2) {
    taxRate = 0.195;
  } else if (withholdingCode === 3) {
    taxRate = 0.185;
  } else if (withholdingCode >= 4) {
    taxRate = 0.18 - (withholdingCode - 4) * 0.005;
  } else {
    console.log("Invalid withholding code");
    return 0;
  }

  return grossPay * taxRate;
}

// Test cases
let person1 = { grossPay: 750, withholdingCode: 0 };
let person2 = { grossPay: 1550, withholdingCode: 2 };
let person3 = { grossPay: 1100, withholdingCode: 6 };

let people = [person1, person2, person3];

people.forEach((person, index) => {
  console.log(`Person ${index + 1}:`);
  console.log("Gross Pay: $" + person.grossPay.toFixed(2));
  console.log("Social Security Tax: $" + getSocSecTax(person.grossPay).toFixed(2));
  console.log("Medicare Tax: $" + getMedicareTax(person.grossPay).toFixed(2));
  console.log("Federal Tax: $" + getFederalTax(person.grossPay, person.withholdingCode).toFixed(2));
  
});
