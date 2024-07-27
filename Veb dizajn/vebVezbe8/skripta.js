$(document).ready(function() {
    popuniSlike();

    function promesaj(niz) {
        let indeks = niz.length - 1;
        while (indeks > 0){
            let nasumicnaPozicija = Math.floor(Math.random() * indeks);
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
            let red = $("<tr></tr>");
            for (let j = 0; j < 4; j++) { //.append radi kao dodavanje deteta 
                let celija = $("<td></td>").append(
                    $("<img>").attr("src", slike[i*4 + j]).attr("class", "otvorena").addClass("slika").css({
                        "width": "150px",
                        "height": "150px"
                    }).attr("name", slike[i*4 + j])
                    .hide()
                ).append(
                    $("<img>").attr("src", "images/0.png").attr("class", "zatvorena").addClass("slika").css({
                        "width": "150px",
                        "height": "150px"
                    }).show()
                );
                red.append(celija);
            }
            $("#tabela").append(red);
        }

    }

    $("img").on({
        mouseenter: function() {
            $(this).css("border-color", "red"); // this znaci kad se KLIKNE BAS NA JEDNU SLIKU tj kad se predje preko jedne
            //slike a ta slika je this, ona ce da promeni border u red, a svojstvo vazi za sve img ali TEK KAD SE predje
            // misem preko njih
        },
        mouseleave : function() {
            $(this).css("border-color", "black");
        }
    })

    let otvorena = false; // da li je bilo koja slika otvorena, prvi put kad se otvori slika prelazi na true, i sl put kad je true
    let prva = null;
    let zatvorenaPrva = null;
    let blokada = false; // blokada sluzi da spreci nekog da klikce u onih 1.5s kad slike nisu jednake!
    // vec onda odmah poredi
    $("td").click(function() {
        if (blokada) return;
        if ($(this).find("img").filter(".otvorena").css("display") != "none") return; // ukoliko je vec prikazana

        if (!otvorena) { // find trazi decu (a td je appendovao img pa su mu to deca), filter filtrira po nazivu klasa (moze i po vise klasa da filtrira)
            prva = $(this).find("img").filter(".otvorena").show();
            zatvorenaPrva = $(this).find("img").filter(".zatvorena").hide();
            otvorena = true;
        }
        else {
            let druga = $(this).find("img").filter(".otvorena").show();
            let zatvorenaDruga = $(this).find("img").filter(".zatvorena").hide();
            if (prva.attr("name") != druga.attr("name")) {
                blokada = true;
                setTimeout(function() {
                    prva.hide();
                    druga.hide();
                    zatvorenaPrva.show();
                    zatvorenaDruga.show();
                    otvorena = false;
                    prva = null;
                    zatvorenaPrva = null;
                    blokada = false;
                } , 1500)         
            }
            else {
                prva = zatvorenaPrva = null;
                otvorena = false;
            }
        }
    })

    $("#sakrij").click(function() {
        //$("h1").hide(3000);
        $("#slike").hide(3000);
    });
    
    $("#prikazi").click(function() {
        $("h1").show(3000);
    });

    $("#prikazi-sakrij").click(function() {
        $("h1").toggle(3000);
    });

});