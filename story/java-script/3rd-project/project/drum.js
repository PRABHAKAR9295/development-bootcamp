


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
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        this.style.color =" white ";
        var buttonInnerHTML = this.innerHTML;
       
        switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("sound/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sound/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sound/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sound/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sound/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sound/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sound/kick-bass.mp3");
            audio.play();
            break;    
       
        default:
            break;
       }
    });
} 


/*
document.querySelector(".drum").addEventListener("click",clickhandler);
function clickhandler() {
    alert("i am back");
}
  */ 