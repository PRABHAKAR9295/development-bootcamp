


/*
var randomNumber1 =Math.floor(Math.random()*6);
randomNumber1 = Math.floor(randomNumber1) +1;
console.log(randomNumber1);
*/
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage ="dice" + randomNumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource); 
