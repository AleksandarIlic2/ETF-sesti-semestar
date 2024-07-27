$(document).ready(function() {


    let tabela = $("#tabela")
    let red, celija;
    let brojBombi = prompt("Unesite broj bombi")
    if (brojBombi == null) alert("Niste uneli bombe! Ucitajte opet stranicu")
    brojBombi = parseInt(brojBombi)
    let poljaSaBombama = []
    for (let i = 0; i < brojBombi; i++) {
        let polje = Math.floor(Math.random() * 16)
        if (poljaSaBombama.includes(polje)) {i--; continue;}
        poljaSaBombama.push(polje)
    }

    for (let i = 0; i < 4; i++) {
        red = $("<tr></tr>")
        for (let j = 0; j < 4; j++) {
            celija = $("<td></td>")
            celija.attr("redniBroj", i * 4 + j)
            celija.attr("imaBombu", "false")
            celija.attr("otkrivenoPolje", "false")
            celija.css("width", "140px")
            celija.css("height", "140px")
            celija.css("background-color", "gray")
            celija.css("border", "1px solid black")               
            red.append(celija)
        }
        tabela.append(red);        

    }
    // postavljanje bombi
    let svaPolja = $("td")
  
    for (let i = 0; i < svaPolja.length; i++) {
        let trPolje = $(svaPolja[i])
        
        if (poljaSaBombama.includes(parseInt(trPolje.attr("redniBroj")))) {
            trPolje.attr("imaBombu", "true")
        }
    }

    let tekst = ""
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++ ) {
            if (poljaSaBombama.includes(i * 4 + j)) {           
              tekst += "X ";
            }
            else {              
                tekst += "O "
            }
        }        
        tekst += "\n"
    }

    console.log(tekst)
    let handler;
    
    $("td").on("click", function() {
        let trenutnoPolje = $(this)
        if (trenutnoPolje.attr("imaBombu") == "true") {
            trenutnoPolje.css("background-color", "red");
            for (let j = 0; j < poljaSaBombama.length; j++) {
                let cel = ($("td[redniBroj='" + poljaSaBombama[j] + "']"))
                cel.css("background-color", "red")
            }   
           /* let svPolja = $("td")
            for (let i = 0; i < svPolja.length; i++) {
                let trPolje = $(svPolja[i])
                if (trPolje.attr("imaBombu") == "true") {
                    trPolje.css("background-color", "red")
                }
            }*/
            handler = setTimeout(function() {
                alert("Kraj igre, izgubili ste!")
            }, 1000)


        }

        else {
            trenutnoPolje.css("background-color", "green")
            trenutnoPolje.attr("otkrivenoPolje", "true")
            let svaPolja1 = $("td")
            let flag = false;
            for (let i = 0; i < svaPolja1.length; i++ ) {
                let tr = $(svaPolja1[i])
                if (tr.attr("otkrivenoPolje") == "false" && tr.attr("imaBombu") == "false") { flag = true; break;}
            }
            if (flag == false) {
                setTimeout(function() {
                    alert("Cestitamo, pobedili ste!");
                }, 1000)
                return;
            }
            poljaSaBombamaFunkcija(trenutnoPolje);
        }



       
    })

    function poljaSaBombamaFunkcija(polje) {
        let rb = polje.attr("redniBroj")

        let susedi = []
        let trRed = Math.floor(rb / 4);
        let trKolona = rb % 4;

        kordinateSuseda = []
        kordinateSuseda.push([trRed, trKolona - 1])
        kordinateSuseda.push([trRed, trKolona + 1])
        kordinateSuseda.push([trRed - 1, trKolona])
        kordinateSuseda.push([trRed + 1, trKolona])
        kordinateSuseda.push([trRed + 1, trKolona + 1])
        kordinateSuseda.push([trRed + 1, trKolona - 1])
        kordinateSuseda.push([trRed - 1, trKolona - 1])
        kordinateSuseda.push([trRed - 1, trKolona + 1])
        let cnt = 0;
        for (let i = 0; i < 8; i++) {

            if (kordinateSuseda[i][0] < 0 || kordinateSuseda[i][0] > 3 || kordinateSuseda[i][1] < 0 || kordinateSuseda[i][1] > 3 ) {               
                continue; 
            }
            else {      
                let rbSuseda =  kordinateSuseda[i][0] * 4 + kordinateSuseda[i][1]
                let potecSusedSaBombom = $("td[redniBroj= '" + rbSuseda + "']")
                if (potecSusedSaBombom.attr("imaBombu") == "false") {
                    continue; 
                }            
                cnt++;
               // seusedi.push()
            }
        }
        polje.text(cnt)
 
      

    }



    

})