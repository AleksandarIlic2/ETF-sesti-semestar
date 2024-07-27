let cnt = 0;

$(document).ready(function() {
    let tabela = $("#tabela")
   
    $("#unesi").on("click", function() {
        unesi();
    })
    let sifra;
    let skola;
    let prijemni;


    function unesi() {
        skola = $("#skola").val();
        sifra = $("#sifra").val();
        prijemni = $("#prijemni").val();
        let regex1 = /^(?:[0-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/;
        let regex2 = /^(1[6-9]|[2-3][0-9]|40)$/;
        let regex3 = /^([1:9]|[1-5][0-9]|60)$/ // jednocifre, pa 10-59, pa 60 to su moguce opcije
     
        if (regex1.test(sifra) == false || parseInt(sifra) % 7 != 0){
            alert("neuspesno sifra")     
            return;   
        }
        if (regex2.test(skola) == false){
            alert("neuspesno skola")       
            return; 
        }

        if (regex3.test(prijemni) == false){
            alert("neuspesan prijemni")        
            return;
        }

        let noviRed = $("<tr></tr>")

        for (let i = 0; i < 4; i++) {
            celija = $("<td></td>")
            if ((parseInt(skola) + parseInt(prijemni)) >= 80 ) celija.css("background-color", "green")
            if (i == 0) {celija.text(skola)}
            if (i == 1) {celija.text(sifra)}
            if (i == 2) {celija.text(prijemni)}
            if (i == 3) {celija.text(parseInt(skola) + parseInt(prijemni))}
            noviRed.attr("brojPoena", parseInt(skola) + parseInt(prijemni));
           // cnt++;
            noviRed.append(celija);
        }
        $("#tabela").append(noviRed);






   
    }

    $("#nadjiNajboljeg").on("click", function() {
       
        let sviRedovi = $("tr")
        let trMax = 0;
        let student;
        for (let i = 0; i < sviRedovi.length; i++) {
            let trenutniRed = $(sviRedovi[i])
            if (trenutniRed.attr("brojPoena") > trMax) {
                trMax = trenutniRed.attr("brojPoena");
                student = {
                    "SifraStudenta" : sifra,
                    "PoeniSkola" : skola,
                    "PoeniPrijemni" : prijemni
                }
            }
        }

        localStorage.setItem("najbolji", JSON.stringify(student))
        window.location.href = "drugaStranica.html"

    })



})

function inicijalizuj() {
    let sifra = $("#sifra2")
    let skola = $("#poeniSkola2")
    let prijemni = $("#poeniPrijemni2")

    let najboljiStudent = JSON.parse(localStorage.getItem("najbolji"))
    sifra.text(najboljiStudent['SifraStudenta'])
    skola.text(najboljiStudent['PoeniSkola'])
    prijemni.text(najboljiStudent['PoeniPrijemni'])

}