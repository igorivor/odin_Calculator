let num = "";
let num1 = 0;
let operator = "";
const btn_Numbers = document.querySelectorAll("#btn_Number");
const display = document.querySelector("#display");
const btn_operator = document.querySelectorAll("#btn_Operator");
const clear = document.querySelector("#delet");


btn_Numbers.forEach(number => {
    number.addEventListener("click", (event) =>{
        num += event.target.textContent;
        display.value = num;
    });
});

btn_operator.forEach(element => {
    element.addEventListener("click", (event) =>{
        if(operator === ""){
            num1 = Number(num);
            operator = event.target.textContent;
            num = "";
        }else {
            let temp_resualt = calculator(num1, operator, Number(num));
            display.value = temp_resualt;
            num1 = temp_resualt;
            operator = event.target.textContent;
            num = "";           
        }
  
    });
});

equal.addEventListener("click", () =>{
    let resualt = calculator(num1, operator, Number(num));
    display.value = resualt;
    num = "";
    num1 = 0;
    operator = "";
    num = resualt;
});

clear.addEventListener("click",  () =>{
    display.value = ""
    num = "";
    num1 = 0;
    operator = "";
});

const add = ((num1, num2) => num1 + num2);
const sub = ((num1, num2) => num1 - num2);
const mul = ((num1, num2) => num1 * num2);
const div = ((num1, num2) => {
    if(num2 === 0){
        return display.value = "ERROR";
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
    }
}