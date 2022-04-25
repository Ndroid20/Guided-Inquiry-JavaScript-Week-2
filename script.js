"use strict";

// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

const min = function (a, b) {
  return Math.min(a, b);
};

// EASY: Create an array of students holding their last name, first name, and age with 3 students.To validate, please log a greeting with the first name, last name and age of the 2nd student.The output should look like "Hello, my name is John Doe and I'm 19 years old."

const students = [
  "Mike",
  "Jackson",
  20,
  "Brutus",
  "Wayne",
  30,
  "Jay",
  "Leno",
  60,
];

console.log(
  `Hello, my name is ${students[3]} ${students[4]} and I'm ${students[5]} years old.`
);

// MEDIUM: Create a program that accepts a number(1 - 12) as input and logs to the console that number
// and its corresponding month.For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number(e.g.less than 1 or greater than 12).

const userInput = Number(prompt("Pick a number from 1-12."));

switch (userInput) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Febuary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    alert("Invalid number: Pick a number from 1-12.");
}

// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const tom = {
  height: 9,
  mass: 8,
  bmi: function () {
    const bmi = (this.mass / this.height) ** 2;
    return bmi;
  },
};

const jerry = {
  height: 10,
  mass: 45,
  bmi: function () {
    const bmi = (this.mass / this.height) ** 2;
    return bmi;
  },
};

// console.log(tom.bmi());
// console.log(jerry.bmi());

const bmiDifference = tom.bmi() > jerry.bmi();

console.log(
  `Is Tom's BMI(${tom.bmi()}) higher than Jerry's(${jerry.bmi()})? ${bmiDifference} `
);
