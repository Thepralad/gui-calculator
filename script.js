let a = 0, b = 0, op;
let btnsNum = [];
var display = document.querySelector('#display');

//array of all id
const btnIDsNum = ['n1', 'n2', 'n3', 'n4',
                'n5', 'n6', 'n7', 'n8',
                'n9', 'n0', 'ac', 'p',
                's', 'd', 'm','eq', 'del'];

//Selecting all the buttons using an array of id names
for(let i = 0; i < btnIDsNum.length; i++){
    btnsNum[i] = document.querySelector('#' + btnIDsNum[i])
}

//button listeners
btnsNum.forEach((btn) =>{
    btn.addEventListener('click', () => {
        updateDisplay(btn.id);
        takingInput(btn.id);
        console.log(btn.id);
    })
});

//All four operation arrow functions
const add = (a, b) => a + b;
const substract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

//Operate functions which take 3 parameters, and returns result depending upon the operator
function operate(a, operator, b){
    switch (operator){
        case '+':
            display.textContent = add(Number(a),Number(b));
            break;
        case '-':
            display.textContent = substract(Number(a),Number(b));
            break;
        case '*':
            display.textContent = multiply(Number(a),Number(b));
            break;
        case '/':
            if(b == 0){
                display.textContent = 'err';
                break;
            }
            display.textContent = divide(Number(a),Number(b));
            break;
    }
} 

//function to update the display.
function updateDisplay(id){
    if(id[1] >= 0 && id[1] <= 10)
        display.textContent += id[1];
}

function takingInput(input){
    let opPressed = false;
    switch (input) {
        case 'ac':
            display.textContent = '';
            a = 0;
            b = 0;
            op = false;
            break;

        case 'p':
            if(!opPressed){
                a = display.textContent;
                op = '+';
                opPressed = true;
                display.textContent = '';
            }  
            break;
        
        case 's':
            if(!opPressed){
                a = display.textContent;
                op = '-';
                opPressed = true;
                display.textContent = '';
            }  
            break;
        
        case 'm':
            if(!opPressed){
                a = display.textContent;
                op = '*';
                opPressed = true;
                display.textContent = '';
            }  
            break;

        case 'd':
            if(!opPressed){
                a = display.textContent;
                op = '/';
                opPressed = true;
                display.textContent = '';
            }  
            break;
        case 'eq':
            b = display.textContent;
            operate(a,op,b);
            break;
        case 'del':
            display.textContent = display.textContent.replace(display.textContent[display.textContent.length - 1], '');
        default:
            break;
    }
    
    
}



