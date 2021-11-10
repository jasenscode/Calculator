'use strict';

// DOM captute variables

const currentScreenOutput = document.querySelector(
  '.calculator__screen__output-current'
);

const previousScreenOutput = document.querySelector(
  '.calculator__screen__output-previous'
);

const allBtns = document.querySelectorAll('.button');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const percentBtn = document.querySelector('.percent');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

// operator variable
let operator;

// Variable to store the number before operator button is pressed
let firstNumber;

// Variable to store firstNumber after operator button has been pressed
let secondNumber;

// Final result variable
let result;

// Variable to store final result as percentage
let percentResult;

// when number button is pressed, update primary display on screen
numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    // button.classList.add('toggleBtnColor');
    let number = button.value;
    currentScreenOutput.innerHTML += number;
  });
});

// add first number input to secondNumber variable, clear currentScreen and display on previousScreen
operatorBtns.forEach((button) => {
  button.addEventListener('click', () => {
    firstNumber = parseFloat(currentScreenOutput.innerHTML);
    previousScreenOutput.innerHTML = firstNumber;
    currentScreenOutput.innerHTML = '';
    operator = button.value;
    console.log(firstNumber);
    console.log(operator);
  });
});

// Function to calculate equation of two number variables that equals event listener can call on

const calculateResult = () => {
  secondNumber = parseFloat(currentScreenOutput.innerHTML);
  console.log(firstNumber, secondNumber);
  if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '-') {
    result = firstNumber - secondNumber;
  } else if (operator === 'x') {
    result = firstNumber * secondNumber;
  } else if (operator === '/') {
    result = firstNumber / secondNumber;
  }
  currentScreenOutput.innerHTML = result;
};

// when you press equals, the second number is stored in secondNumber and a function is called to calculate the final result
equalsBtn.addEventListener('click', calculateResult);

// add percent number functionality
percentBtn.addEventListener('click', () => {
  result = result / 100;
  currentScreenOutput.innerHTML = result;
});

// clear/reset function

const clearAll = () => {
  currentScreenOutput.innerHTML = '';
  previousScreenOutput.innerHTML = '';
  firstNumber = '';
  secondNumber = '';
  percentResult = '';
};

clearBtn.addEventListener('click', clearAll);
