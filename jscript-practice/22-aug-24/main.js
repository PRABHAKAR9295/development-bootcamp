// let a = 10;
// let b = 5;

// console.log("Sum: " + (a + b));           
// console.log("sub: " + (a - b));    
// console.log("multiplication: " + (a * b));       
// console.log("division: " + (a / b));      
// console.log("Remainder: " + (a % b));     

/*
let a = 10;
let b = 5;

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let remainder = a % b;

console.log("Sum: " + sum );
console.log("sub: " + sub );
console.log("mul: " + mul );
console.log("div: " + div );
console.log("Remainder: " + remainder);``
*/

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