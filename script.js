// program for a simple calculator

// take the operator input

class Calculator {
  constructor() {
    this.pi = Math.PI;
    this.e = Math.E;
  }
  add(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
  }
  substraction(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;
    return result;
  }
  multiply(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;
    return result;
  }
  devided(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    return result;
  }
  percentage(firstNumber, secondNumber) {
    let result = (firstNumber / 100) * secondNumber + "%";
    return result;
  }
}
let calculator = new Calculator();
console.log("Sum is:", calculator.add(5, 5));
console.log("Multiply is:", calculator.multiply(5, 5));
console.log("Percentage is:", calculator.percentage(100, 20));

/*class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}
// camelCase = small letter smallLetter '' "" ``${john}`
let john = new Person("John", 25, "Web Development");
let newEmoployee = new Person("Hiro", 15, "Softwere Engineer");
console.log(john);
console.log(newEmoployee);
let firstName = "Harry";
let isMerried = false;
let age = 45;
if (isMerried === true) {
  console.log(`${firstName} is merried.`);
} else {
  console.log(`${firstName} is not merried.`);
}
function sum(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
}
function substraction(firstNumber, secondNumber) {
  let result = firstNumber - secondNumber;
  return result;
}
function multiply(firstNumber, secondNumber) {
  let result = firstNumber * secondNumber;
  return result;
}
function devided(firstNumber, secondNumber) {
  let result = firstNumber / secondNumber;
  return result;
}
let result = sum(5, 5);
console.log(result);
let resultOfMultiply = multiply(5, 5);
console.log("Result of mutiply", resultOfMultiply); */
