




let vreme = null;

$(document).ready(function(){
    //dodeljivanje id
    let s =0;
    let c =0;

    $("#tabela td").each(function(){
        $(this).attr("id", c);
        c++;
    });

    $("#tabela td").click(function(){
        let celija = $(this);
        let bojaPozadine = celija.css("background-color");
    
        if (bojaPozadine !== "rgb(0, 0, 255)" && bojaPozadine !== "blue") { // Proverite da li je boja pozadine već plava
            celija.css("background-color", "green");
    
            clearTimeout(vreme); // Očistite tajmer ako postoji
    
            vreme = setTimeout(function(){
                celija.css("background-color", "white");
            }, 1000);
        } else {
            clearTimeout(vreme); // Očistite tajmer ako postoji
        }
    });
    
    $("#tabela td").dblclick(function(){
        let celija = $(this);
        clearTimeout(vreme); // Očistite tajmer ako postoji
    
        let bojaPozadine = celija.css("background-color");
        if (bojaPozadine === "rgb(0, 0, 255)" || bojaPozadine === "blue") { // Provera boje u RGB formatu
            celija.css("background-color", "white");
        } else {
            celija.css("background-color", "blue");
        }
    });

    $("#dugme").click(function(){
        let broj = $("#tekst").val(); // Pravilno dobijanje vrednosti iz polja za unos teksta
    
        if(!broj){
            alert("Niste uneli broj!"); // Provera da li je uneta validna vrednost
            return;
        }
    
        broj = parseInt(broj); // Pretvaranje unete vrednosti u broj
    
        let indeksi = 0; // Inicijalizacija brojača
        let prethodni= null;
        let j = null;
    
        let intervalId = setInterval(function(){ // Postavljanje tajmera samo ako je unet validan broj
            $("#tabela td").each(function(){ // Resetovanje prethodno označenih ćelija
                $(this).css("background-color", "white");
            });
    
            if(indeksi < broj){
                let j = Math.floor(Math.random() * 9); // Generisanje slučajnog broja između 0 i 8
                
                $("#tabela td").each(function(){ // Označavanje slučajno izabrane ćelije u crveno
                    if($(this).attr("id") == j){ // Provera da li je ID ćelije jednak slučajno izabranom indeksu
                        $(this).css("background-color", "red");
                    }
                });
    
                indeksi++;
            }else{
                alert("Kraj!");
                clearInterval(intervalId); // Zaustavljanje intervala kada je dostignut broj željenih promena
            }
        }, 1000);
    });
});