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

let number1 = 0; 
let number2 = 0; 
const operator = {
    addition:  "+",
    subtraction: "-", 
    multiplication: "*", 
    division: "/", 
}

const operate = function(number1, operator, number2){
if(operator === operator.addition){
return add(number1,number2);
}
if(operator === operator.subtraction){
    return subtract(number1, number2); 
}
if (operator === operator.multiplication) {
    return multiply(number1, number2); 
}
if (operator === operator.division) {
    return divide(number1, number2); 
}
}

xc
const click = addEventListener(onclick, )