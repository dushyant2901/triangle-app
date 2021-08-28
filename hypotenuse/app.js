const intputs=document.querySelectorAll(".input")

const calculate=document.querySelector("#calculate")
const output=document.querySelector("#output");

calculate.addEventListener("click",()=>{

    let inputLengthValue=Number(intputs[0].value)
    let inputBreadthValue=Number(intputs[1].value)


    let result =   calculateHypotenuse(inputLengthValue,inputBreadthValue)
 
    showOutput(result);


})

function calculateHypotenuse(a,b){
 const sumOfSquares =calculateSumOfSquares(a,b)
let hypotenuse= Math.sqrt(sumOfSquares)
console.log(hypotenuse)
return hypotenuse
}

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b
    return sumOfSquares
}

function showOutput(data) {
    output.innerText = data
}