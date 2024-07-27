

$(document).ready(function() {

    let tabela = $("#tabela")
    let celija;
    let red;
    for (let i = 0; i < 3; i++) {
        red = $("<tr></tr>")
        for (let j = 0; j < 3; j++) {
            celija = $("<td></td>");
            celija.css("background-color", "gray")
            celija.css("width", "150px")
            celija.css("height", "150px")
            celija.css("border", "1px solid black")
            celija.attr("class", "nijeKliknuto")
            celija.attr("id", i *3 + j);


            red.append(celija);
        }

        tabela.append(red)
    }
    let trenutniIgrac = "X"

    $("td").on("click", function() {
        let trenutniBlok = $(this)
      
        if (trenutniBlok.attr("class") == "X" || trenutniBlok.attr("class") == "O" ) return;
        trenutniBlok.text(trenutniIgrac)
        trenutniBlok.attr("class", trenutniIgrac)
        proveraPobednika(trenutniIgrac)
        if (trenutniIgrac == "X") trenutniIgrac = "O"
        else trenutniIgrac = "X"
       
        


    })
 

    function proveraPobednika(trIgrac) {
        let svaPolja = $("td")
        let cnt = 0;
        let polja = []
        for (let i = 0; i < 3; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if (trenutnoPolje.attr("id") < 3 && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;                
            }           
        }
        
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }
           // proveren prvi red
        cnt = 0;
        polja = []
        for (let i = 0; i < 6; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if (trenutnoPolje.attr("id") > 2 && trenutnoPolje.attr("id") < 6 && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;      
            }           
        }
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }
           // proveren drugi red
        cnt = 0;
        polja = []
        for (let i = 0; i < 9; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if (trenutnoPolje.attr("id") > 5 && trenutnoPolje.attr("id") < 9 && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;         
            }           
        }
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }
          // proveren treci red

        cnt = 0;
        polja = []
        for (let i = 0; i < 9; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if ((trenutnoPolje.attr("id") == 0 || trenutnoPolje.attr("id") == 3 || trenutnoPolje.attr("id") == 6) && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;             
            }           
        }
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }
        // proverena prva kolona  

        cnt = 0;
        polja = []
        for (let i = 0; i < 9; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if ((trenutnoPolje.attr("id") == 1 || trenutnoPolje.attr("id") == 4 || trenutnoPolje.attr("id") == 7) && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;             
            }           
        }
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }
        // proverena druga kolona  

        cnt = 0;
        polja = []
        for (let i = 0; i < 9; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if ((trenutnoPolje.attr("id") == 2 || trenutnoPolje.attr("id") == 5 || trenutnoPolje.attr("id") == 8) && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;             
            }           
        }
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }
        // proverena treca kolona  


        cnt = 0;
        polja = []
        for (let i = 0; i < 9; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if ((trenutnoPolje.attr("id") == 2 || trenutnoPolje.attr("id") == 4 || trenutnoPolje.attr("id") == 6) && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;             
            }           
        }
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }


        cnt = 0;
        polja = []
        for (let i = 0; i < 9; i++) {            
            let trenutnoPolje = $(svaPolja[i])            
            if ((trenutnoPolje.attr("id") == 0 || trenutnoPolje.attr("id") == 4 || trenutnoPolje.attr("id") == 8) && trenutnoPolje.attr("class") == trIgrac) {
                polja.push(trenutnoPolje)
                cnt++;             
            }           
        }
        if (cnt == 3) {
            for (let i = 0; i < polja.length; i++) 
                polja[i].css("background-color", "green")        
        }

        cnt = 0;
        for (let i = 0; i < svaPolja.length; i++) {
            let trenutnoPolje = $(svaPolja[i])
            if (trenutnoPolje.attr("class") == "X" || trenutnoPolje.attr("class") == "O") {
                cnt++;
            }
        }
        if (cnt == 9) {
            for (let i = 0; i < 9; i++) {
                ($(svaPolja[i])).css("background-color", "red")
            }
        }
    }


})

