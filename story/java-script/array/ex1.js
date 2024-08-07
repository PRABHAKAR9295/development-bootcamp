// Move all negative numbers to beginning and positive to end with constant extra space
// Examples : 

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5
          
let numbers = [12,-4,-5,-11,7,10,-9,13,-14 ];
function value(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp=arr[j];
                arr [j]= arr[j+1];
                arr[j+1]= temp;
                
            }
        }
    }
    return arr;
}
let sort_Numbers = value(numbers);

console.log(sort_Numbers);
