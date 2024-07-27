$(document).ready(function() {
    let bombe = prompt("Koliko bombi? ");

    let nizBombi = [];
    let nizCelija = [];

    while(nizBombi.length < bombe)
    {
        let r = Math.floor(Math.random() * 16);
        if(!(nizBombi.includes(r))){
            nizBombi.push(r);
        }
    }

    for(let i = 0; i < 4; i++){
        let red = $("<tr></tr>");
        for(let j = 0; j < 4; j++){
            let celija = $("<td></td>").attr("id", i*4 + j);
            if(nizBombi.includes(i * 4 + j))
            {
                celija.addClass("bomba");
            }
            else{
                celija.addClass("nijebomba");
            }
            nizCelija.push(celija);
            red.append(celija);
        }
        $("#tabla").append(red);
    }


    $("#tabla").css("border", "5px black solid");
    $("#tabla").css("width", "60%");
    $("td").css("width", "25%");
    $("td").css("height", "130px");
    $("td").css("border", "2px black solid");
    $("#tabla").css("margin", "auto");

    for(let i = 0; i < nizBombi.length; i++)
    {
        console.log(nizBombi[i] + " ");
    }
    
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(nizBombi.includes(i * 4 + j))
            {
                console.log("X");
            }
            else {
                console.log("O");
            }
        }
        console.log("\n");
    }

    $("td").click(function() {
        if($(this).hasClass("bomba"))
        {
            for(let i = 0; i < 16; i++)
            {
                document.getElementById(i).style.backgroundColor = "red";
                //setTimeout(izgubili, 1000);
            }
        }
        else {
            $(this).css("background-color", "green");
        }
    })

    
    function izgubili() {
        alert("Izgubili ste!");
    }

})