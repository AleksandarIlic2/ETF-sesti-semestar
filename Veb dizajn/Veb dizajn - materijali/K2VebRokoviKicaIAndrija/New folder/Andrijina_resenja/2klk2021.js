function Sifruj(){

    document.getElementById("unostekstane").value="";
    let poruka=document.getElementById("zaporuku").value;
    let r="";
    let z="Z";
    for(let i=0;i<poruka.length;i++){
        let slovo=poruka[i];
        let regex=/[A-Z]+/;
        if(!(slovo.match(regex))){
            document.getElementById("zaporuku").value="";
            return;
        }
        
        
        let b=slovo.charCodeAt(0) +3;
        if(b>z.charCodeAt(0)){
            b=b-26;
        }
        let c=String.fromCharCode(b);
        r+=c;
    }

   

    document.getElementById("unostekstane").value=r;

}


function Mesanje(){
    
    let z="Z";
    

    let poruka=document.getElementById("unostekstane").value;
    let regex=/[1-9][0-9]*/;
    if(!(poruka.match(regex))){
        document.getElementById("unostekstane").value="";
        return;
    }


    let teht=document.getElementById("zaporuku").value;
    let rez="";
    for(let i=0;i<teht.length;i++){
        let slovo=teht[i];
        let regex1=/[A-Z]+/;
        if(!(slovo.match(regex1))){
            document.getElementById("zaporuku").value="";
            return;
        }

        let x=parseInt(poruka);

        let b=slovo.charCodeAt(0)+x;
        while(b>z.charCodeAt(0)){
            b=b-26;
        }

        let c=String.fromCharCode(b);
        rez+=c;


    }

    document.getElementById("zaporuku").value=rez;
    document.getElementById("unostekstane").value="";


}

$(document).ready(function(){
   
    $('input[name="prvo"]').change(function(){
        if ($("#b").is(":checked")) {
            $("#unostekstane").prop("disabled", false);
            $("#dugme").click(function(){
                Mesanje();
            });

        } else if($("#a").is(":checked")) {
            $("#unostekstane").prop("disabled", true);
            $("#dugme").click(function(){
                Sifruj();
            });
        }
    });
    
});





