const angleInputs = document.querySelectorAll(".angle");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

function calculateSum(angle1, angle2, angle3) {
    let sum = angle1 + angle2 + angle3
    return sum
}

function check(sum) {
    if (sum == 180) {
      return  output.innerHTML="It's A Triangle"
    } //else { output.innerHTML="Not A Triangle" }
    return output.innerHTML="Not A Triangle"
}

function isTriangle() {
    let sum = calculateSum(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value))
console.log(sum)
if(angleInputs[0].value&&angleInputs[1].value&&angleInputs[2].value)   
check(sum)
else{
    output.innerHTML="Input fields cannot be empty"
}

}   

calculate.addEventListener("click", isTriangle)
