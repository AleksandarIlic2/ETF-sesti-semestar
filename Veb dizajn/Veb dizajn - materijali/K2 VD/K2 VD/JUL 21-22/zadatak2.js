$(document).ready(function() {
    for(let i = 0; i < 3; i++) {
        let red  = $("<tr></tr>");
        for(let j = 0; j < 3; j++) {
            let celija = $("<td></td>").addClass("polje").attr("id", i*3 + j );
            red.append(celija);
        }
        $("#tabla").append(red);
    }

    $("#tabla").css("width", "80%");
    $("#tabla").css("height", "700px");
    $("#tabla").css("border-radius", "3px");
    $(".polje").css("text-align", "center");
    $(".polje").css("border", "3px black solid");
    $(".polje").css("font-size", "100px");
    $(".polje").css("width", "33.3%");
    $(".polje").css("height", "33.3%");
    //let niz = document.getElementsByClassName("polje");
    //for(let i = 0; i < niz.length; i++){
     //   niz[i].innerHTML = "";
    //}

    let iks = 1;
    let kraj = 0;

    $(".polje").click(function() {
        if(this.innerHTML != "" || kraj) return;
        if(iks) {
            this.innerHTML = "X";
            iks = 0;
            proveriPobedu();
        }
        else {
            this.innerHTML = "O";
            iks = 1;
            proveriPobedu();
        }

    })

    function proveriPobedu() {

        for(let i = 0; i < 3; i++)
        {

            if((document.getElementById(i).innerText == "X" && document.getElementById(i + 3).innerText == "X" && 
            document.getElementById(i + 6).innerText == "X") || (document.getElementById(i).innerText == "O" && document.getElementById(i + 3).innerText == "O" && 
            document.getElementById(i + 6).innerText == "O"))
            {
                document.getElementById(i).style.backgroundColor = "green";
                document.getElementById(i + 3).style.backgroundColor = "green";
                document.getElementById(i + 6).style.backgroundColor = "green";
                kraj = 1;
                return;
            }

            if((document.getElementById(i * 3).innerText == "X" && document.getElementById(i * 3 + 1).innerText == "X" && 
            document.getElementById(i *3 + 2).innerText == "X") || (document.getElementById(i * 3).innerText == "O" && document.getElementById(i*3 + 1).innerText == "O" && 
            document.getElementById(i * 3 + 2).innerText == "O"))
            {
                document.getElementById(i * 3).style.backgroundColor = "green";
                document.getElementById(i * 3 + 1).style.backgroundColor = "green";
                document.getElementById(i * 3 + 2).style.backgroundColor = "green";
                kraj = 1;
                return;
            }

            if((document.getElementById(0).innerText == "X" && document.getElementById(4).innerText == "X" && 
            document.getElementById(8).innerText == "X") || (document.getElementById(0).innerText == "O" && document.getElementById(4).innerText == "O" && 
            document.getElementById(8).innerText == "O"))
            {
                document.getElementById(0).style.backgroundColor = "green";
                document.getElementById(4).style.backgroundColor = "green";
                document.getElementById(8).style.backgroundColor = "green";
                kraj = 1;
                return;
            }

            if((document.getElementById(6).innerText == "X" && document.getElementById(4).innerText == "X" && 
            document.getElementById(2).innerText == "X") || (document.getElementById(6).innerText == "O" && document.getElementById(4).innerText == "O" && 
            document.getElementById(2).innerText == "O"))
            {
                document.getElementById(6).style.backgroundColor = "green";
                document.getElementById(4).style.backgroundColor = "green";
                document.getElementById(2).style.backgroundColor = "green";
                kraj = 1;
                return;
            }

        }

        for(let k  = 0; k < 9; k++){
            if(document.getElementById(k).innerText != "X" && document.getElementById(k).innerText != "O")
            {
                return;
            }
        }
        for(let k = 0; k < 9; k++){
            document.getElementById(k).style.backgroundColor = "red";
        }

    }


})