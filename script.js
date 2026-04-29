"use strict";

const add = function(x, y) {
    return x + y; 
}

const subtract = function(x, y) {
    return x - y; 
}

const multiply = function(x, y) {
    return x * y; 
}

const divide = function(x, y){
    return x / y; 
}



let firstNumber =""; 
let secondNumber =""; 

const operate = function(firstNumber, operator, secondNumber){
    if(operator === "+"){
        return add(firstNumber,secondNumber);
    }
    if(operator === "-"){
        return subtract(firstNumber, secondNumber); 
    }
    if (operator === "x") {
        return multiply(firstNumber, secondNumber); 
    }
    if (operator === "/") {
        return divide(firstNumber, secondNumber); 
    }
}

const btn = document.querySelectorAll("button"); 
let showDisplay = document.getElementById("display");

for (const btns of btn) {
    btns.addEventListener('click', function(e){
    showDisplay.innerHTML = this.value;
    firstNumber += e.target.value; 
    console.log(firstNumber); 
    if(e.target.value === "-" || "+" || "x" || "/"){
    }
    // secondNumber += e.target.value; 
    // console.log(secondNumber); 
} 
)};  