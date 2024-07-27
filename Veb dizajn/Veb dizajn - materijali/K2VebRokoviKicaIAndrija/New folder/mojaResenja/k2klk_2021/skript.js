$(document).ready(function(){
    let regex1 = /^[A-Z]+$/;
    let regex2 = /^[1-9]\d*$/;

    let selektor = document.querySelectorAll("input[name='izbor']");
    $(selektor).change(function(){
        if ($(this).attr("id") === "mesajD") {
            $("#pomerajD").removeAttr("disabled");
        } else {
            $("#pomerajD").attr("disabled", "disabled")
        }
    });

    $("#pomerajD").click(function(){

    });
    $("#sifra").click(function(){

        let num =prompt("Unesite broj");
        console.log(num);
        let poruka = $("#poruka").val();
        
        if(!regex1.test(poruka)){
            alert("Nisu sve velika slova!");
        }
        
        if ($("#zamenaD").is(":checked")){
            let tekst = "";
            for(let i =0; i < poruka.length; i++){
                let slovo = poruka.charCodeAt(i);
               
                let pomerenoSlovo = (slovo -65 +3)%26 + 65;
                tekst +=  String.fromCharCode(pomerenoSlovo);
            }

            $("#resenje").val(tekst);
        }

        if ($(document.getElementById("mesajId").checked)){
            let tekst = "";
            $("#pomerajD").removeAttr("disabled");
            let pomeraj = parseInt($("#pomerajD").val());
            for(let i = 0; i < pomeraj; i++){
                let pozicija =i;
                while(pozicija < poruka.length){
                    tekst += poruka[pozicija];
                    pozicija+=pomeraj;
                }
            }

            $("#resenje").val(tekst);
                
        }
    });
});

// 65 - 91

90


90 => 66

(90 + 26) % 65 + 65

116
 65
	
51



4 
leva = (4 - 1 + N ) % N



(90 - 26)  % 65	+ 26

119
 65
 54



1 - 7


6 + 3 => 2

(br + 3) % 7





65 - 91
90 => 66

89 => 65 = 65 + 0
90 => 66 = 65 + 1
91 => 67 = 65 + 2

(91 + 3) % 91 + 65 => 68
(90 + 3) % 91 + 65 => 67
89 =? 66

(91 - 26 + 26 + 3) % 91 + 65
((91 + 91 + 3) % 91 + 65) % 65


1 - 7





 





