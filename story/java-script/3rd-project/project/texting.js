


/*
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log("numberOfDrumButtons:"+ numberOfDrumButtons);
for(var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        this.style.color =" white ";
    });
}
*/
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log("numberOfDrumButtons:"+ numberOfDrumButtons);
for(var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function() {
        this.style.color =" white ";
        var buttonInnerHTML = this.innerHTML;
       makesound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);

    });
} 

document.addEventListener("keypress",function(event){
    /*      alert("key was pressed!");      */
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sound/crash.mp3");
            crash.play();
            break; 
        case "k":
            var snare = new Audio("sound/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sound/kick-bass.mp3");
            kick.play();
            break;    
       
        default: console.log(buttonInnerHTML);
       }
    
}

function buttonAnimation(currentKey){
    var actionButton = document.querySelector("." + currentKey);
    actionButton.classList.add("pressed");
    
    setTimeout(function() {
        actionButton.classList.remove("pressed");

    }, 100);

}
/*
document.querySelector(".drum").addEventListener("click",clickhandler);
function clickhandler() {
    alert("i am back");
}
  */ 