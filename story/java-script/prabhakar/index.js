alert("is my web page");
$("p").css("color","yellow");
//$("button").text("don't click me");
//$("button").html("<em> hey </emp>");
$("a").attr("href", "http://www.yahoo.com");
$("a").css("color","red");
$("h1").click(function(){
    $("h1").css("color","purple");
})
$("button").click(function() {
    $("p").css("color","blue");
})

