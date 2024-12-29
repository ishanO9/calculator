function add(num1,num2)
{
    return (num1+num2);
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
        case '+': console.log(add(num1,num2));
        break;
        case '-': subtract(num1,num2);
        break;
        
    }    
}

const calcbody = document.querySelector(".body");
const buttons = document.querySelector(".buttons");
const operands = document.querySelector(".operands");
const operations = document.querySelector(".operations");
const screen = document.querySelector(".screen");
let operandinputbts = [];
let operatorinputbts = [];
let symb = ['+','-','*','/','=','AC','del'];
let valid = symb.slice(0,5);
for(let i = 1; i <= 10; i++)
{
    let operandbutton = document.createElement("button");
    operandbutton.classList.add(`btn${i}`);
    operandbutton.classList.add(`operandbtn`);
    operandbutton.textContent = i%10;
    operandinputbts[i-1] = operandbutton;
    operands.append(operandbutton);
}
console.log(operands);
let decimalbutton = document.createElement("button");
decimalbutton.classList.add('operatorbtn');
decimalbutton.textContent = ".";
operations.append(decimalbutton);
let j =0;
for(i of symb)
{
    let operatorbutton = document.createElement("button");
    operatorbutton.classList.add(`btn${i}`);
    operatorbutton.classList.add('operatorbtn');
    operatorbutton.textContent = `${i}`;
    operatorinputbts[j] = operatorbutton;
    operations.append(operatorbutton);
    j++;
}


let num ;
let sign;
let maxsign = 0;
screen.textContent = '';


operandinputbts.forEach((operandbutton) => {
    operandbutton.onclick = ()=>{
            screen.textContent += operandbutton.textContent;
            num = screen.textContent;
    }
})
operatorinputbts.forEach((operatorbutton) => {
    operatorbutton.onclick = ()=>{
            if(valid.includes(operatorbutton.textContent) && maxsign < 1 && screen.textContent !== '' && operatorbutton.textContent !== "=")
            {

                screen.textContent += operatorbutton.textContent;
                if(operatorbutton.textContent !== '.')
                {
                    maxsign++;
                }  
                sign = screen.textContent;
            }
            else if(operatorbutton.textContent === "AC")
            {
                screen.textContent = '';
                maxsign = 0;
            }
            else if(operatorbutton.textContent === "del")
            {
                let txt = screen.textContent.slice(0,-1);
                screen.textContent = txt;
                maxsign = 0;
            }
            else if(operatorbutton.textContent === "=")
            {
                let arr = screen.textContent.split('');
                console.log(arr);
                convertor(arr);
               
            }
    }
})
let ops = "+-/*";
function convertor(array)
{
    console.log(array);
    let num1 = [];
    let num2 = [];
    let i =0;
    while(!ops.includes(array[i]))
    {
        num1 += array[i];
        i++;
    }
    let op = array[i];
    i++;
    while(i < array.length)
    {
        num2 += array[i];
        i++;
    }

    operate(parseInt(num1),parseInt(num2),op);

}
