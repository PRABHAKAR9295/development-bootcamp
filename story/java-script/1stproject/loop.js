//     print all even number 1 to 100.



//for(let i=1;i<=100;i++){
//    if(i%2===0){
  //      console.log("i="i);
  //  }
//}
let gameNum = 25;
let userNum = prompt("guess the gameNum :");

while(userNum != gameNum){
    userNum = prompt("you enter wrong number : guess again");
}
console.log("congratulation you guess the right number");
