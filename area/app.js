const intputs = document.querySelectorAll(".input");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

function calculateArea(a, b) {
    const multiplicationOfNumbers = calculateMultiplicationOfTwoNumbers(a, b);
    const area = 1 / 2 * (multiplicationOfNumbers);
    return area;

}

function calculateMultiplicationOfTwoNumbers(a, b) {

    const multiplicationOfNumbers = a * b;
    return multiplicationOfNumbers
}
