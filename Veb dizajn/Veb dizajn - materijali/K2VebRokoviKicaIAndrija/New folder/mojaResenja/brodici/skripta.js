
let tabela = [];
let zeleni = null;



function refresh(){
    tabela = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    zeleni =0;

    for(let i =0; i< 16; i++){
        $(document.getElementById(i)).text("");
        $(document.getElementById(i)).css("background-color", "lavender");
    }
   

    broj = prompt("Unesite broj bombi: ");

    broj = parseInt(broj);
   
    let cnt =0;
    zeleni = 16-broj;

    while(cnt<broj){

        let poz = Math.floor(Math.random()*16);
        if(tabela[poz]==0){
            tabela[poz]=1;
            cnt++;
        }
        
    }

    let red = '';
    for (let i = 0; i < 16; i++) {
        if (tabela[i] == 1) {
            red += 'x ';
            
        } else {
            red += 'o ';
        }

        if ((i + 1) % 4 == 0) {
            console.log(red);
            red = '';
        }

        
    }

    console.log("#####################");
    return zeleni,tabela;
}




function bombeUOkolini(tabela,poz){

    let bombe = 0;
    let red = Math.floor(poz/4);
    let kolona = poz%4;

    if(red -1 >=0){
        if(tabela[(red - 1)*4 + kolona]==1){
            bombe++;
        }
    }

    if(kolona -1 >=0){
        if(tabela[(red)*4 + kolona-1]==1){
            bombe++;
        }
    }

    if(red +1 <4){
        if(tabela[(red + 1)*4 + kolona]==1){
            bombe++;
        }
    }

    if(kolona +1 <4){
        if(tabela[(red)*4 + kolona+1]==1){
            bombe++;
        }
    }

    if(red -1 >=0 && kolona -1>=0){
        if(tabela[(red - 1)*4 + kolona-1]==1){
            bombe++;
        }
    }

    if(kolona -1 >=0 && red +1 < 4){
        if(tabela[(red+1)*4 + kolona-1]==1){
            bombe++;
        }
    }

    if(kolona +1 < 4 && red + 1 < 4){
        if(tabela[(red+1)*4 + kolona+1]==1){
            bombe++;
        }
    }

    if(kolona +1 < 4 && red -1 >=0){
        if(tabela[(red-1)*4 + kolona+1]==1){
            bombe++;
        }
    }   

    return bombe;

}





$(document).ready(function(){

    

    zeleni, tabela = refresh();
   
    let klik =0;
    $("td").click(function(){
        if($(this).text()==""){
            klik++;
        let pozicija = parseInt($(this).attr("id"));

        if(tabela[pozicija]==1){
            for(let i =0; i< 16; i++){
                if(tabela[i]==1){
                    $(document.getElementById(i)).css("background-color", "red");
                    $(document.getElementById(i)).text("X");
                }
            }
           
            setTimeout(function(){
                alert("Izgubil ste!");
                klik = 0;
                zeleni, tabela =refresh();
            }, 500);
            

               
        }else{

            let broj = bombeUOkolini(tabela,pozicija);
            $(document.getElementById(pozicija)).css("background-color", "green");
            $(document.getElementById(pozicija)).text(broj);

           
            setTimeout(function(){
                if(klik == zeleni){
                    alert("Pobedili ste");
                    klik =0;
                   zeleni, tabela = refresh();
                }
            }, 500);
           

        }
        }
        
       
    })


});