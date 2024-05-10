// shapes.js

// Function to calculate the area of a square
exports.squareArea = function(side) {
    return side * side;
};

// Function to calculate the perimeter of a square
exports.squarePerimeter = function(side) {
    return 4 * side;
};

// Function to calculate the area of a rectangle
exports.rectangleArea = function(length, width) {
    return length * width;
};

// Function to calculate the perimeter of a rectangle
exports.rectanglePerimeter = function(length, width) {
    return 2 * (length + width);
};
