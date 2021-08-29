const inputs = document.querySelectorAll(".input");
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
function showOutput(data) {
    output.innerText =`The area of the triangle for the given data is ${data} square-metre.` 
}

calculate.addEventListener("click", () => {

    let inputLengthValue = Number(inputs[0].value);
    let inputBreadthValue = Number(inputs[1].value);


    let result = calculateArea(inputLengthValue, inputBreadthValue);
    if(inputs[0].value&&inputs[1].value){
    showOutput(result);}
    else{
        output.innerText=`Input fields  can't be empty`
    }


})