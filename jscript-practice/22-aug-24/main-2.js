let a = 10;
let b =5;

let result;
function perform(operation){
    switch(operation.toLowerCase()){
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'mul':
            result = a * b;
            break;
        case 'div':
            result = a / b;
            break;
        case 'mod':
            result = a % b;
            break;
        case 'default':
            result = 'this value is not  accupide';   
    }  
    console.log(operation);   
}
perform('ADd');
console.log(result);