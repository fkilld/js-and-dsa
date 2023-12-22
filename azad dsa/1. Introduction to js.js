// Find average Marks
// Write a program to input marks of three tests of a student (all integers).
// Then calculate and print the average of all test marks.

let a = parseInt(prompt('Enter first test mark:'))
let b = parseInt(prompt('Enter second test mark:'))
let c = parseInt(prompt('Enter third test mark:'))
let average = (a + b + c) / 3
console.log('Average:', average)

// Find X raised to power N
// You are given two integers: X and N.
// You have to calculate X raised to power N and print it.

let X = parseInt(prompt("Enter the value of X:"));
let N = parseInt(prompt("Enter the value of N:"));
let output = Math.pow(X, N); // Alternatively, you could use X ** N in modern JavaScript
console.log("Output:", output);




// Arithmetic Progression
// You are given first three entries of an arithmetic progression.
// You have to calculate the common difference and print it.

let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));
let d = b - a; // or let d = c - b;
console.log("Common difference:", d);




// Rectangular Area
// You are given a rectangle in a plane. The corner coordinates of this rectangle are provided to you.
// You have to print the amount of area of the plane covered by this rectangle.
// The end coordinates are provided as four integral values: x1, y1, x2, y2.
// It is given that x1 < x2 and y1 < y2.

let x1 = parseInt(prompt("Enter x1:"));
let y1 = parseInt(prompt("Enter y1:"));
let x2 = parseInt(prompt("Enter x2:"));
let y2 = parseInt(prompt("Enter y2:"));
let area = (x2 - x1) * (y2 - y1);
console.log("Area:", area);




















