let korpa = [];

function pokupiInformacije() {
    let sacuvanaKorpa = localStorage.getItem("korpa");

   
    if (sacuvanaKorpa == null) {
        localStorage.setItem("korpa", ""); // inicijalizacija praznim nizom kao string
    } else {
        korpa = sacuvanaKorpa.split(","); // deserializacija podataka
    }
}

function popuniStranicu() {
    let artikli = $("#artikli")


    for (let i = 1; i <= 10; i++) {
        let slika = $("<img>")
        slika.attr("src", "images/artikal_" + i + ".jpg")
        slika.attr("id", "artikal_" + i)   
        if (i <= 3)  slika.attr("class", "nike")
        else if (i <= 6) slika.attr("class", "adidas")
        else if (i <= 8) slika.attr("class", "puma")
        else if (i <= 10) slika.attr("class", "skechers")
        artikli.append(slika)
        // dodaje sliku po sliku u div        
    }    
}

function dodajDogadjaje() {
    // Ovo će ukloniti sve postojeće događaje 'click' na slikama pre dodavanja novih
    $("img").on("click", function() {
        let slika = $(this).attr('id');

        klikNaSliku(slika);
    });
    $("#filter").on("click", function() {
        filtirajPatike();
    })

    $("#prikaz").on("click", function() {
        alert(korpa)
    })

    $("#isprazni").on("click", function(){
        korpa = []
        localStorage.setItem("korpa", "")
    })
}   

function klikNaSliku(imeSlike) {    
    korpa.push(imeSlike);
 
    localStorage.setItem("korpa", korpa); // čuvanje niza kao string
}

function inicijalizujProdavnicu() {
 

    pokupiInformacije(); // povuci iz skladišta šta treba

    popuniStranicu();

    dodajDogadjaje();
}


function filtirajPatike() {
    let checkboxes = $("input[type = 'checkbox']")
    let brendoviZaSakrivanje = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (!($(checkboxes[i]).prop("checked"))) {
            brendoviZaSakrivanje.push($(checkboxes[i]).attr("id"))            
        }
    }

    let slike = $("#artikli img")

    for (let i = 0; i < slike.length; i++) {
        let trenutnaSlika = $(slike[i])
        if (brendoviZaSakrivanje.includes(trenutnaSlika.attr("class"))) {
            trenutnaSlika.css("display", "none")
        }
        else {
            trenutnaSlika.css("display", "inline-block")
        }
    }

    alert(brendoviZaSakrivanje)

  /*  let slike = $("img")

    for (let i = 0; i < slike.length; i++) {
        let trenutnaSlika = $(slike[i])
        if (trenutnaSlika.attr("class") == "nike" && nike == false)  {
            trenutnaSlika.css("display", "none")
        }
        else if (trenutnaSlika.attr("class") == "nike" && nike == true) {
            trenutnaSlika.css("display", "inline-block")
        }
        if (trenutnaSlika.attr("class") == "adidas" && adidas == false)  {
            trenutnaSlika.css("display", "none")
        }
        else if (trenutnaSlika.attr("class") == "adidas" && adidas == true) {
            trenutnaSlika.css("display", "inline-block")
        }
        if (trenutnaSlika.attr("class") == "puma" && puma == false)  {
            trenutnaSlika.css("display", "none")
        }
        else if (trenutnaSlika.attr("class") == "puma" && puma == true) {
            trenutnaSlika.css("display", "inline-block")
        }
        if (trenutnaSlika.attr("class") == "skechers" && skecers == false)  {
            trenutnaSlika.css("display", "none")
        }
        else if (trenutnaSlika.attr("class") == "skechers" && skecers == true) {
            trenutnaSlika.css("display", "inline-block")
        }
    }*/
    
    
    
    
}