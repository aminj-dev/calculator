"use strict"

//show value in calculator display
function data(value) {
    let displayValue = calc.display.value;
    if(displayValue === "0"&& value === "0") calc.display.value = "";
    if(displayValue  === "0"&& value !== "0" && value !== ".") calc.display.value = value;
    else calc.display.value += value;
}

//clear all in display
function ac() {
    calc.display.value = "";
}

//clear last character in display
function c() {
    calc.display.value = calc.display.value.slice(0 , -1); 
}

function equal() {
    try{
        if(calc.display.value !== "") calc.display.value = eval(calc.display.value);
    } catch(error) {
        calc.display.value = error.message;
    }
}

//go to gitHub profile link in new tab
document.querySelector("#myLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});
