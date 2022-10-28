const fName = "Mark";
const lName = "John";

console.log(
  "First participant is : " + fName + ". Second participant is : " + lName + "."
);

// Mark's First Data

let fNameMass = 78;
let fNameHeight = 1.69;

console.log(
  "Mark's weight is = " +
    fNameMass +
    "KG & Height is = " +
    fNameHeight +
    "Meter"
);

let fNameBmi = fNameMass / fNameHeight ** 2;
console.log("Mark's BMI is = " + fNameBmi);

// John's First data

let lNameMass = 92;
let lNameHeight = 1.95;

console.log(
  "John's weight is = " +
    lNameMass +
    "KG & Height is = " +
    lNameHeight +
    "Meter"
);

let lNameBmi = lNameMass / lNameHeight ** 2;
console.log("John's BMI is = " + lNameBmi);

// Check whose BMI is higher based on first data

let markHigherBMI = fNameBmi > lNameBmi;
console.log(markHigherBMI);
