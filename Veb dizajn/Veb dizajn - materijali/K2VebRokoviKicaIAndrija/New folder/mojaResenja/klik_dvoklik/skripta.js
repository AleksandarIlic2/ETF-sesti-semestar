
let vreme = null;
let intervalPokrenut = false;
$(document).ready(function(){

   
    $("#tabela td").click(function(){
        if(!intervalPokrenut){
            let celija = $(this);
          
            if ( celija.css("background-color") !== "rgb(0, 0, 255)") { // Proverite da li je boja pozadine već plava
                celija.css("background-color", "green");
        
                clearTimeout(vreme); // Očistite tajmer ako postoji
        
                vreme = setTimeout(function(){
                    celija.css("background-color", "white");
                }, 1000);
            } else {
                clearTimeout(vreme); // Očistite tajmer ako postoji
            }
        }
    });
    

    $("td").dblclick(function(){
      if(!intervalPokrenut){
            let celija = $(this);
            
            clearTimeout(vreme);
            if(celija.css("background-color") == "rgb(0, 0, 255)"){
            
                celija.css("background-color", "white");
            }else{
                
                celija.css("background-color", "blue");
            }
        }
    })


    $("#pokreniD").click(function(){
        if($("#tezina").val() == ""){
            alert("Niste nista uneli!!");
            return;
           
        }
        intervalPokrenut = true;
        let broj = parseInt($("#tezina").val());
       
        let prev = null;
        let cnt = 0;

        let handler = setInterval(function(){
            if (cnt === broj) {
                $(document.getElementById(prev)).css("background-color", "white");
                clearInterval(handler);
                intervalPokrenut = false;
                return;
            }

            let j = Math.floor(Math.random() * 9);
            while (j === prev) {
                j = Math.floor(Math.random() * 9);
            }
            
            if (prev !== null) {
                $(document.getElementById(prev)).css("background-color", "white");
            }
            $(document.getElementById(j)).css("background-color", "red");
            prev = j;
            cnt++;
        }, 1000);
    });
})