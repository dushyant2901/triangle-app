const inputs=document.querySelectorAll(".input")

const calculate=document.querySelector("#calculate")
const output=document.querySelector("#output");

calculate.addEventListener("click",()=>{

    let inputLengthValue=Number(inputs[0].value)
    let inputBreadthValue=Number(inputs[1].value)


    let result =   calculateHypotenuse(inputLengthValue,inputBreadthValue)
 if(inputs[0].value&&inputs[1].value)
    showOutput(result);
    else{
        output.innerText=`Input fields  can't be empty`
    }


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
    output.innerText =`The hypotenuse of the triangle for the given data is ${data}` 
}