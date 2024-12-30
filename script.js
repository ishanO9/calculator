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
    if(num2 === 0)
    {
        return "too bad";
    }
    if(num1%num2 === 0 && typeof(num1) !== 'float')
    {
        return (num1/num2);
    }
    if(num1%num2 !== 0)
    {
        return ((num1/num2).toFixed(6));
    }
}
console.log(add(2,3));
console.log(divide(6,3));
let num1,num2,operator;

function operate(num1,num2,operator)
{
    maxsign = 0;

    switch(operator)
    {
        case '+': screen.textContent = add(num1,num2);
        break;
        case '-': screen.textContent = subtract(num1,num2);
        break;
        case '*': screen.textContent = multiply(num1,num2);
        break;
        case '/': console.log(`${num1} ${num2}`);
        screen.textContent = divide(parseFloat(num1),parseFloat(num2));
        if(screen.textContent === 'too bad')
        {
            setTimeout(() =>{
                screen.textContent = "";
            },2000)
        }
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


let num = [];
let sign;
let maxsign = 0;
screen.textContent = '';
let x = 1;


operandinputbts.forEach((operandbutton) => {
    operandbutton.onclick = ()=>{

        num += operandbutton.textContent;
        if(num.length < 13)
        {
            screen.textContent += operandbutton.textContent;
        }          
    }
})
operatorinputbts.forEach((operatorbutton) => {
    operatorbutton.onclick = ()=>{

            num = [];
            //if(screen.textContent.length < 14)
            if(screen.textContent === '')
            {
                if(operatorbutton.textContent === '-')
                {
                    screen.textContent += operatorbutton.textContent;
                    operatorbutton.stopPropogation();
                }
            }
            if(valid.includes(operatorbutton.textContent) && maxsign < 1 && screen.textContent !== '' && operatorbutton.textContent !== "=" && screen.textContent !== '-')
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

    if(array[0] === '-')
    {
        num1[0] = '-';
        i++;
    }
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
    console.log(`${num1} this`);
    console.log(num2);
    console.log(op);
    console.log(num1);
    if(num2.length !== 0)
        operate(parseFloat(num1),parseFloat(num2),op);

}
