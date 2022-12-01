const fs = require("fs");
const array = fs.readFileSync("./day1/calories.txt").toString().split("\n");
const elfesCalories = [];
let currentElfSum = 0;

array.forEach((entry, index) => {
  if (entry === "") {
    elfesCalories.push(currentElfSum);
    currentElfSum = 0;
  } else {
    currentElfSum += parseInt(entry);
  }
});

console.log(Math.max(...elfesCalories))

const sorted = elfesCalories.sort((a,b) => b-a);
console.log(sorted[0], sorted[1], sorted[2]);
console.log(sorted[0] + sorted[1] + sorted[2]);
