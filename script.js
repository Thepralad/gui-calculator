let btnsNum = [];
var display = document.querySelector('#display');

//array of all id
const btnIDsNum = ['n1', 'n2', 'n3', 'n4',
                'n5', 'n6', 'n7', 'n8',
                'n9', 'n0', 'ac', 'p',
                's', 'd', 'm','eq'];

//Selecting all the buttons using an array of id names
for(let i = 0; i < btnIDsNum.length; i++){
    btnsNum[i] = document.querySelector('#' + btnIDsNum[i])
}

//button listeners
btnsNum.forEach((btn) =>{
    btn.addEventListener('click', () => {
        updateDisplay(btn.id);
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
            console.log(add(a,b));
            break;
        case '-':
            console.log(substract(a,b));
            break;
        case '*':
            console.log(multiply(a.b));
            break;
        case '/':
            console.log(divide(a,b));
            break;
    }
} 

//function to update the display.
function updateDisplay(id){
    if(id[1] > 0 && id[1] <= 10)
        display.textContent += id[1];
}

function takingInput(){

}



