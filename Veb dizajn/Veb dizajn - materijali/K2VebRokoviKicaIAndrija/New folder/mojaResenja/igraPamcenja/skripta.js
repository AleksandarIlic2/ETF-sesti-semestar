let igraPokrenuta = false;
let klik = 0;
let tabela = [];
let crveni = [0,0,0,0,0,0,0,0,0];
let broj = null;

$(document).ready(function(){

    $("#pokreniId").click(function(){
        igraPokrenuta = true;

        broj =parseInt($("#sliderId").val());
        
        let cnt =0;

       
        let prev = null;

       
        
        
        
        handler = setInterval(function(){

            let j = Math.floor(Math.random()*9);

            while(j == prev){
                j = Math.floor(Math.random()*9);
                
            }

            $(document.getElementById(j)).css("background-color", "red");
            $(document.getElementById(prev)).css("background-color", "white");

            //tabela[cnt] = j;
            tabela.push(j);
            crveni[j] =1;
            prev = j;
            

            if(cnt == broj){
                igraPokrenuta = false;
                $(document.getElementById(prev)).css("background-color", "white");
                clearInterval(handler);
                return;
            }
            cnt++;

        }, 1000)


        
    })

    $("td").click(function(){

        if(!igraPokrenuta){

            console.log("atribut je: " + $(this).attr("id"));
            console.log("tabela[klik]: " + tabela[klik]);
            
            if(tabela[klik] != $(this).attr("id")){
                for( let i =0; i<9;i++){
                    if(crveni[i] == 1){
                        $(document.getElementById(i)).css("background-color", "red");
                    }
                }

                setTimeout(function(){
                    klik =0;
                    tabela =[];
                    crveni = [];
                    
                    for( let i =0; i<9;i++){
                        
                        $(document.getElementById(i)).css("background-color", "white");
                        
                    }
                    
                    alert("Izgubili ste!");
                }, 1000)
            }else{
                
                $(this).css("background-color", "green");
                
                klik++;
                if(klik == broj){

                    setTimeout(function(){
                        alert("Bravo!!!!!");
                    }, 1000);
                }


            }

           
        }
       
    })


})