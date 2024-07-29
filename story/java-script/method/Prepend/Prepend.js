$(document).ready(function(){
    $("#prependButton").click(function(){
        $("#myDiv").prepend("<p> Prepended paragraph.</p>");
    });
});
$(document).ready(function(){
    $("#prependButton1").click(function(){
        $(" #item ").prepend("<h1> my first website 1. </h1>");
    });
});

