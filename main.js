'use strict';

// DOM captute variables
const currentScreenOutput = document.querySelector(
  '.calculator__screen__output-current'
);
const previousScreenOutput = document.querySelector(
  '.calculator__screen__output-previous'
);
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const percentBtn = document.querySelector('.percent');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');

// Variable to capture operator when pressed
let operator;

// Variable to store the number before operator button is pressed
let firstNumber;

// Variable to store firstNumber after operator button has been pressed
let secondNumber;

// Final result variable
let result;

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
    if (currentScreenOutput.innerHTML === '') {
      console.error('You must type in a number');
    } else {
      firstNumber = parseFloat(currentScreenOutput.innerHTML);
      previousScreenOutput.innerHTML = firstNumber;
      currentScreenOutput.innerHTML = '';
      operator = button.value;
    }
  });
});

// Function just to calculate equation of two number variables
const calculateResult = () => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } else if (operator === '-') {
    return firstNumber - secondNumber;
  } else if (operator === 'x') {
    return firstNumber * secondNumber;
  } else if (operator === '/') {
    return firstNumber / secondNumber;
  } else {
    console.error('No operator selected');
  }
};

// Function for equals button click event listener to call on, which assigns result of equation to result variable and updates display
const finalOutput = () => {
  secondNumber = parseFloat(currentScreenOutput.innerHTML);
  result = calculateResult();
  if (result % 1 != 0) {
    currentScreenOutput.innerHTML = result.toFixed(4);
  } else if (result % 1 === 0) {
    currentScreenOutput.innerHTML = result;
  } else {
    console.error('No operator selected');
  }
};

// when equals button is pressed, the second number is stored in secondNumber and a function is called to calculate the final result
equalsBtn.addEventListener('click', finalOutput);

// add percent number functionality
percentBtn.addEventListener('click', () => {
  if (firstNumber != typeof Number) {
    result = currentScreenOutput.innerHTML / 100;
    currentScreenOutput.innerHTML = result;
    parseInt(currentScreenOutput.innerHTML) / 100;
  } else if (result === typeof Number) {
    result = result / 100;
    currentScreenOutput.innerHTML = result;
  }
});

// clear/reset function
const clearAll = () => {
  currentScreenOutput.innerHTML = '';
  previousScreenOutput.innerHTML = '';
  firstNumber = '';
  secondNumber = '';
  result = '';
};

clearBtn.addEventListener('click', clearAll);
