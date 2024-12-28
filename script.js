function add(num1,num2)
{
    return (num1,num2);
}
function subtract(num1,num2)
{
    return(num1-num2);
}
function multiply(num1,num2)
{
    return (num1 * num2);
}
function divide(num1,num2)
{
    return (num1/num2);
}
console.log(add(2,3));
console.log(divide(6,3));
let num1,num2,operator;
function operate(num1,num2,operator)
{
    switch(operator)
    {
        case '+': add(num1,num2);
        break;
        case '-': subtract(num1,num2);
        break;
        
    }    
}

const calcbody = document.querySelector(".body");
const buttons = document.querySelector(".buttons");
const operands = document.querySelector(".operands");
const operations = document.querySelector(".operations");

let symb = ['.','+','-','*','/','=','AC','del'];
for(let i = 0; i < 10; i++)
{
    let operandbutton = document.createElement("button");
    operandbutton.classList.add(`btn${i}`);
    operandbutton.classList.add(`operandbtn`);
    operandbutton.textContent = i;
    operands.append(operandbutton);
}

for(i of symb)
{
    let operatorbutton = document.createElement("button");
    operatorbutton.classList.add(`btn${i}`);
    operatorbutton.classList.add('operatorbtn');
    operatorbutton.textContent = `${i}`;
    operations.append(operatorbutton);
}
