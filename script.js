var a;
var operator;
var b;
function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(a, operator, b){
    if(operator == '+'){
        console.log(add(a,b));
    }
    else if(operator == '-'){
        console.log(substract(a,b));
    }
    else if(operator == '*'){
        console.log(multiply(a,b));
    }
    else if(operator == '/'){
        console.log(divide(a,b));
    }
    else{
        console.log('Invalid Operation')
    }
}
 

