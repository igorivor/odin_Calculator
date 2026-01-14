const add = ((num1, num2) => num1 + num2);
const sub = ((num1, num2) => num1 - num2);
const mul = ((num1, num2) => num1 * num2);
const div = ((num1, num2) => {
    if(num2 == 0){
        return console.log("Error! Divided by 0!");
    }
    return num1/num2;
});