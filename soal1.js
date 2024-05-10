// soal1.js

// Import the shapes module
const shapes = require('./shapes');

// Calculate area and perimeter of a square
const squareSide = 5;
const squareArea = shapes.squareArea(squareSide);
const squarePerimeter = shapes.squarePerimeter(squareSide);

console.log("Square:");
console.log("Area:", squareArea);
console.log("Perimeter:", squarePerimeter);

// Calculate area and perimeter of a rectangle
const rectangleLength = 4;
const rectangleWidth = 6;
const rectangleArea = shapes.rectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = shapes.rectanglePerimeter(rectangleLength, rectangleWidth);

console.log("\nRectangle:");
console.log("Area:", rectangleArea);
console.log("Perimeter:", rectanglePerimeter);
