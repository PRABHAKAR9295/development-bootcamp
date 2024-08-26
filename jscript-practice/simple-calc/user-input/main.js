function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {    
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function main() {
    const operation = parseInt(prompt("Please enter the action to perform: 1. Add, 2. Sub, 3. Mul, 4. Div, 5. Mod"));
    
    if (operation >= 1 && operation <= 5) {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));
        
        let result;

        switch (operation) {
            case 1:
                result = add(num1, num2);
                break;
            case 2:
                result = sub(num1, num2);
                break;
            case 3:
                result = mul(num1, num2);
                break;
            case 4:
                result = div(num1, num2);
                break;
            case 5:
                result = mod(num1, num2);
                break;
            default:
                alert("this option is not acceptable");
                console.log("this option is not acceptable");
                break;
        }

        alert(`The result is: ${result}`);
        console.log(`The result is: ${result}`);
    }else{
        alert("Please enter the value between 1 to 5");
        console.log("Please enter the value between 1 to 5");
    }
}

// Start application - by Calling main function
main();

