let Num = prompt("enter the source(0-100)");
let grade;
if(Num >= 90 && Num <= 100){
    console.log("grade A");
}
    else if (Num >= 70 && Num <= 89) {
        console.log("grade B");
    }
        else if (Num >= 50 && Num <= 69) {
            console.log(" grade C");
        }
            else if (Num >= 40 && Num <= 49) {
                console.log("grade D")
            }
else{
    console.log("fail");
}
