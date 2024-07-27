let globalniCounter = 0;
let poslednjePolje = null;
$(document).ready(function() {
    let tabela = $("#tabela")
    let red;
    let celija;
    for (let i = 0; i < 3; i++) {
        red = $("<tr></tr>")
        for (let j = 0; j < 3; j++ ) {
            celija = $("<td></td>")
            celija.css("background-color", "white")  
            celija.css("border", "1px solid black")
            celija.attr("id", i * 3 + j)
           
            red.append(celija)
        }
        tabela.append(red);
    }

    function foo(trenutnoPolje) {        
        trenutnoPolje.css("background-color", "white")
    }
    let handler;
    $("td").on("click", function() {
        let trenutnoPolje = $(this)
   
        if (trenutnoPolje.attr("class") == "plavo") {
            if (trenutnoPolje.attr("name") == "cekaDrugiKlikPlavo") {
                trenutnoPolje.css("background-color", "white");
                return;
            }
            else {
                trenutnoPolje.attr("name", "cekaDrugiKlikPlavo")
                return;
            }
          
        }
        if (trenutnoPolje.attr("class") == "kliknuto")
        {
            clearTimeout(handler)
            trenutnoPolje.css("background-color", "blue")
            trenutnoPolje.attr("class", "plavo")
            return;
        }    
        trenutnoPolje.css("background-color", "green")
        trenutnoPolje.addClass("kliknuto")


        handler = setTimeout(function() {
            foo(trenutnoPolje)
        }, 2000);
    })

    $("#pokreni").on("click", function() {

        let tezina = $("#tezina").val()
        alert(tezina)
        if (!tezina) {
            alert("unesite tezinu");
              return;} 
        tezina = parseInt(tezina)
        
        var interval = setInterval(function() {
            mojaFunkcija(tezina, interval);
        }, 1000 )



    })

    function mojaFunkcija(brojIteracija,interval) {
        while(true) {
            if (brojIteracija == globalniCounter) return;
            if (poslednjePolje != null) poslednjePolje.css("background-color", "white");
            let randomPolje = Math.floor(Math.random() * 9)
            let svaPolja = $("td")
            let uspesno = false;

            for (let i = 0; i < svaPolja.length; i++) {
                let trenutnoPolje = $(svaPolja[i])
                if (trenutnoPolje.attr("id") == randomPolje && trenutnoPolje.attr("mojAtribut") != "VecZauzeto") {
                    trenutnoPolje.css("background-color", "red")
                    trenutnoPolje.attr("mojAtribut", "VecZauzeto")
                    poslednjePolje = trenutnoPolje;
                    uspesno = true;
                }
            }

            if (uspesno == true) {globalniCounter++; break;}
            if (globalniCounter >= brojIteracija) clearInterval(interval);
        }
    }
   



}) 

