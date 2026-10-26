"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function to calculate sum
function computeSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
//function to calculate subtraction
function computeDifference(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
//function to calculate multiplication
function computeMultiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
//function to calculate division
function computeDivision(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        console.log("Division by zero is invalid");
    }
    else {
        let div = firstNumber / secondNumber;
        console.log("Answer is " + div);
    }
}
//call function
console.log("Sum is " + computeSum(50, 34));
console.log("Difference is " + computeDifference(50, 90));
console.log("Multiplication is " + computeMultiplication(4, 129));
computeDivision(20, 0);
//# sourceMappingURL=simpleCalculator.js.map