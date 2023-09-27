/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add */
function add (number1, number2) {
    return number1 + number2;
}

/* Function Definition - Subtract */
function subtract (number1, number2) {
    return number1 - number2;
}

/* Function Definition - Multiply */
function multiply (number1, number2) {
    return number1 * number2;
}

function divide (dividend, divisor) {
    return dividend / divisor;
}

/* Function Definition - Add Numbers */
function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

/* Open Function Use - Divide Numbers */
const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

/* Decision Structure */
let date = new Date();
let year = date.getFullYear();

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = multiplied.reduce((sum, number) => sum + number);


/* Math button object listeners */
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);