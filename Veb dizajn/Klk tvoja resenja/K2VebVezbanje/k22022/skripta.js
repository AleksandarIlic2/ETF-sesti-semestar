$(document).ready(function() {
    let nizPolja;
    let slajder;
    let tabela = $("#tabela")
    let red, celija;
    for (let i = 0; i < 3; i++) {
        red = $("<tr></tr>")
        for (let j = 0; j < 3; j++) {
            celija = $("<td></td>")
            celija.css("background-color", "gray")
            celija.css("width", "150px")
            celija.css("height", "150px")
            celija.css("border", "solid 1px black")
            celija.attr("id", i * 3 + j)
            red.append(celija);
        }
        tabela.append(red)
    }

   
    $("#pokreni").on("click", function() {
        slajder = $("#slajder").val()
        nizPolja = []
        for (let i = 0; i < slajder; i++) {
            let noviBr = Math.floor(Math.random() * 9)       
            if (nizPolja.includes(noviBr)) {i--; continue;}
            nizPolja.push(noviBr)
        }
        console.log(nizPolja)
        let prethodni = null;
        for (let i = 0; i < nizPolja.length; i++) {          
            let tr = $("td[id = '" + nizPolja[i] + "'] ")
            let fl = true;
            if (i == nizPolja.length - 1) fl = false;
            paliGasi(tr, prethodni, fl, i + 1)
            prethodni = tr;


        }

    })

    function paliGasi(staPali, staGasi, flag = true, j) {

        setTimeout(function(){
            if (staGasi != null) {staGasi.css('background-color', 'gray')}
            staPali.css("background-color", "blue")
          
        }, j * 1000)

        if (flag == false) {
           setTimeout(function() {
            staPali.css("background-color", "gray")
           }, (j + 1) * 1000)
    }
}
    let glBrojac = 0;
    $("td").on("click", function() {
        let tr = $(this)
        if (nizPolja[glBrojac] == tr.attr('id')) {
            glBrojac++;
            tr.css("background-color", "green")
            if (glBrojac == slajder) {
                alert("Bravo!")
                nizPolja = [];
                glBrojac = 0;
            }
        }
        else {
           
            let svaPolja = $("td")
            for (let i = 0; i < 9; i++) {
                let tr = $(svaPolja[i])
                tr.css('background-color', "red")
             
                glBrojac = 0;
                setTimeout(function() {
                    let svaPolja = $("td")
                    for (let i = 0;i < svaPolja.length; i++) {
                        let tr = $(svaPolja[i])
                        tr.css("background-color", "gray")
                    }
                }, 1000)
            }
          
        }
    })

})