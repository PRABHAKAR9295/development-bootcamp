let a = 10;
let b = 5;

let result;
//let operation = "sub"                 
 function perform(operation) {          
    if (operation === 'add') {
        result = a + b;
    } else if (operation === 'sub') {
        result = a - b;
    } else if (operation === 'mul') {
        result = a * b;
    } else if (operation === 'div') {
        result = a / b;
    } else if (operation === 'mod') {
        result = a % b;
    }
 }                                        

 perform('mod');                          

console.log(result);