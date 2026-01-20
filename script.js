let num = "";
let num1 = 0;
let operator = "";
const btn_Numbers = document.querySelectorAll("#btn_Number");
const display = document.querySelector("#display");
const btn_operator = document.querySelectorAll("#btn_Operator");
const equal = document.querySelector("#equal");
const all_Clear = document.querySelector("#all_Clear");
const clear = document.querySelector("#clear");
const comma = document.querySelector("#btn_Comma");

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

all_Clear.addEventListener("click",  () =>{
    display.value = "";
    num = "";
    num1 = 0;
    operator = "";
});

clear.addEventListener("click", () =>{
    if (operator === "") {
        // Ako nema operatora, obrisi trenutni unos (num)
        num = "";
        display.value = "";
    } else {
        // Ako ima operatora, obrisi drugi broj (num)
        num = "";;
        display.value = "";
    }
});

comma.addEventListener("click", () =>{
    if(!num.includes(".")){
        num += "."
    }
    display.value = num;
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