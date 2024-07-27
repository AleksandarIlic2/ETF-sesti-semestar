$(document).ready(function(){

    let poslednji = document.getElementById("#procenat");


    $("#procenat").click(function(){
        document.getElementById("forma").innerHTML += '<div style="margin: 10px;"> <div> <input type="text" style="width: 100px; margin: 10px;" id="ime"> <input type="text" style="width: 100px;" id="procenat"> </div></div>';

    });


})