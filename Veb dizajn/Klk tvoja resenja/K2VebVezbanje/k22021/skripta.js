$(document).ready(function() {
  

    $("#sifruj").on("click", function() {
     
        let regexImaNezeljenih = /[^ABCDEFGHIJKLMNOPQRTSTUVWXYZ]/

        let tekst = $("#t1").val()
        console.log(tekst)
        if (regexImaNezeljenih.test(tekst) == true) {
            //alert("ima nedozvoljenih karaktera!")
        }
     
        let sifrovanjeZamenom = $("#radio1").prop("checked")
        let noviTekst = ""
     
        if (sifrovanjeZamenom == true) {
            for (let i = 0; i < tekst.length; i++) {
                // cca
                // fcc
                let tr = tekst.charCodeAt(i);
                tr = (tr - 65 + 3) % 26 + 65
                noviTekst += String.fromCharCode(tr)
            }             

            $("#t2").val(noviTekst);
        }
        else {
            let pom = $("#pomeraj").val();   
            pom = parseInt(pom)  
            let novaRec = ""
            let cnt = 0;       
            let br = tekst.length;
            for (let i = 0; i < tekst.length; i++) {
                if (tekst[i] == " ") br--;
            }
            br--;
      

            for (let i = 0; i < br ; i++) {
                if (cnt >= br) break;
                
               // novaRec += tekst[i];
              //  alert(novaRec)
                for (let j = i; j < br ; j+= pom) {
               
                    if (j >= br) break;

                    novaRec += tekst[j]
                    cnt++;   
                }
            }
            alert('cnt')
            alert(cnt)
            $("#t2").val(novaRec)
        }
        //cca
        //fcc

    })

  

    $("#radio2").on("click", function() {
       
        $("#pomeraj").removeAttr("disabled")
    })

    $("#radio1").on('click', function() {
      
        $("#pomeraj").attr("disabled", "true")
    })
})