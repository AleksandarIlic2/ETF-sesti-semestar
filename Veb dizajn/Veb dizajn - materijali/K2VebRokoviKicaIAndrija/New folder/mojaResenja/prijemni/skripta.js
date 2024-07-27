$(document).ready(function(){

    

    $("#unesiId").click(function(){
        
        let regex1 = /^(0|7|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/;
        let regex2 = /^(1[6-9]|[2-3][0-9]|40)$/;
        let regex3 = /^([0-9]|[1-5][0-9]|60)$/;

        let sifra = $("#sifraId").val();
        let skola = $("#skolaId").val();
        let prijemni = $("#prijemniId").val();

        if(!(regex1.test(sifra) && parseInt(sifra)%7 ==0 && regex2.test(skola) && regex3.test(prijemni))){
            alert("Niste lepo popunili polja!");
            $("#sifraId").val("");
            $("#skolaId").val("");
            $("#prijemniId").val("");
            return;
        }

        

        if(parseInt(skola)+parseInt(prijemni)>=80){
            let red = $("<tr></tr>");
            red.append($("<td></td>").css("background-color", "green").append(sifra));
            red.append($("<td></td>").css("background-color", "green").append(skola));
            red.append($("<td></td>").css("background-color", "green").append(prijemni));
            red.append($("<td></td>").css("background-color", "green").append(parseInt(skola)+parseInt(prijemni)));

            $("#tabela").append(red);
        }else{
            let red = $("<tr></tr>");
            red.append($("<td></td>").append(sifra));
            red.append($("<td></td>").append(skola));
            red.append($("<td></td>").append(prijemni));
            red.append($("<td></td>").append(parseInt(skola)+parseInt(prijemni)));

            $("#tabela").append(red);
        }


      

    })

    $("#najboljiId").click(function(){
   

        sifra = null;
        skola = null;
        prijemni = null;
        let ukupno = null;

        $(".table tr").each(function(){

            let cells = $(this).find("td");

            if(ukupno < $(cells[3]).text()){
                sifra=$(cells[0]).text();
                skola=$(cells[1]).text();
                prijemni=$(cells[2]).text();
                ukupno=$(cells[3]).text();
            }
        })

        localStorage.setItem("tekst", "Najbolji je ucenik sa sifrom " + sifra+ " imao je osvojenih ukupno"+ ukupno+" poena!!");
        window.open("stranica.html");
    })

})