let num1 = 0;
let num2 = 0;
const btn_Numbers = document.querySelectorAll("#btn_Number");
const display = document.querySelector("#display");

btn_Numbers.forEach(element => {
    element.addEventListener("click", (event) =>{
        num1 = event.target.textContent;
        display.value = num1;
    });
});



const add = ((num1, num2) => num1 + num2);
const sub = ((num1, num2) => num1 - num2);
const mul = ((num1, num2) => num1 * num2);
const div = ((num1, num2) => {
    if(num2 == 0){
        return console.log("Error! Divided by 0!");
    }
    return num1/num2;
});

const calculator = function (num1, operator, num2){
    if(operator === "+"){
        return add(num1, num2);
    }else if(operator === "-"){
        return sub(num1, num2);
    }else if(operator === "*"){
        return mul(num1, num2);
    }else if(operator === "/"){
        return div(num1, num2);
    }else {
        return console.log("Error! Enter correct math operator!");
    } 
    
}