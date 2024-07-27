$(document).ready(function(){
    
    $("#ukupno").click(function(){
        let sifra = $("#sifra").val();
        let skola = $("#skola").val();
        let prijemni = $("#prijemni").val();

        let regex = /^(?:0|7|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/;
        let regex1 = /^(?:1[6-9]|[2-3][0-9]|40)$/;
        let regex2=/^(?:[0-9]|[1-5][0-9]|60)$/;

        if(regex.test(sifra) && regex1.test(skola) && regex2.test(prijemni)){

            if(parseInt(sifra)%7==0){

                let red = $("<tr></tr>");
                red.append($("<td></td>").append(sifra));
                red.append($("<td></td>").append(skola));
                red.append($("<td></td>").append(prijemni));
                red.append($("<td></td>").append(parseInt(skola)+parseInt(prijemni)));

                $("#tabela").append(red);
            }else{

                alert("Neispravno uneti podaci!");
                return;
            }
        }else{
            
            alert("Neispravno uneti podaci!");
            return;
        }

        $(".table tr").each(function(){

            let cells = $(this).find("td");

            if($(cells[3]).text()>80){
                $(cells[0]).css("background-color","green");
                $(cells[1]).css("background-color","green");
                $(cells[2]).css("background-color","green");
                $(cells[3]).css("background-color","green");

            }

        })

    })

    $("#najbolji").click(function(){

        let sifra = null;
        let skola = null;
        let prijemni = null;
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
        localStorage.setItem("teht","Najbolji kandidat je: "+sifra+" Broj poena iz skole je: "+skola+" Broj poena na prijemnom: "+prijemni);
        window.location.href="k2jul2021_2.html";
    })

   
})