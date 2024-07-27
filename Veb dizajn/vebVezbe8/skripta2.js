$(document).ready(function() {
    popuniSlike() 

    function promesaj(niz) {
        let indeks = niz.length - 1;
        while (indeks > 0) {
            let nasumicnaPozicija = Math.floor(Math.random() * indeks) 
            let tmp = niz[indeks];
            niz[indeks] = niz[nasumicnaPozicija];
            niz[nasumicnaPozicija] = tmp;
            indeks--;
        }
        return niz;
    }

    function popuniSlike() {
        let slike = [];
        for (let i = 1; i <= 6; i++) {
            slike.push("images/" + i + ".png");
            slike.push("images/" + i + ".png");
        }
        slike = promesaj(slike);

        for (let i = 0; i < 3; i++) {
            let red = $("<tr></tr>")
            for (let j = 0; j < 4; j++) {
                let celija = $("<td></td>").append(
                    $("<img>").attr("src", slike[i*4 + j]).attr("class", "otvorena").addClass("slika").css( {
                        "width" : "150px",
                        "height" : "150px"
                    }).attr("name", slike[i*4 + j])
                    .hide()
                ).append(
                    $("<img>").attr("src", "images/0.png").attr("class", "zatvorena").addClass("slika").css( {
                        "width" : "150px",
                        "height" : "150px"
                    }).show()
                )                
                red.append(celija);
            }
            $("#tabela").append(red);
        }
    }

    let otvorena = false;
    let prva = null;
    let zatvorenaPrva = null;
    let blokada = false;
    $("td").on("click", function() {

        let sveSlike = $("img")

        for (let i = 0; i < sveSlike.length; i++) {
            if (($sveSlike[i]).is(":visible")) alert()
        }

       if(($("img").is(":visible"))) return;
      

        if (!otvorena) {
            prva = $(this).find("img").filter(".otvorena").show();
            zatvorenaPrva = $(this).find("img").filter(".zatvorena").hide();
            otvorena = true;
        }
        else {
            let druga = $(this).find("img").filter(".otvorena").show();
            let zatvorenaDruga = $(this).find("img").filter(".zatvorena").hide();
            if (prva.attr("name") != druga.attr("name")) {
                blokada = true;
                setTimeout( function() {
                    prva.hide();
                    druga.hide();
                    zatvorenaPrva.show();
                    zatvorenaDruga.show();
                    otvorena = false;
                    prva = null;
                    zatvorenaPrva = null;
                    blokada = false;
                }, 1500)
            } else {
                prva = zatvorenaPrva = null;
                otvorena = null;
            }
        }
    })

    $("#prikazi").on("click", function() {
        $("#slike").show(300);
    })

    $("#sakrij").on("click", function() {
        $("#slike").hide(300)
    })

    $("#prikazi-sakrij").on("click", function() {
        $("#slike").toggle(300);
    })



})