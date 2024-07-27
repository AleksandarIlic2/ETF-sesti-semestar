




function oboji(){
    $("#tabela td").each(function(){
        //console.log($(this).css("background-color"));
        //console.log("rgb(0,128,0)");
        if($(this).css("background-color")=="rgb(0, 128, 0)"){
            //console.log("tu sam");
            $(this).css("background-color","white");
        }

    });

}


let vreme=null;


$(document).ready(function(){


    //dodeljivanje id
    let s=0;
    let c=0;
    $("#tabela td").each(function(){

        $(this).attr("id",c);
        c++;

    });


    $("#tabela td").click(function(){
        

        $(this).css("background-color","green");
        let celija=$(this);

        vreme=$(this).data("timerId");
        clearTimeout(vreme);
  

        vreme=to=setTimeout(function(){

            celija.css("background-color","white")

        },1000);


        $(this).data("timerId",vreme)


    });


    
    

    $("#tabela td").dblclick(function(){

        clearTimeout(vreme);

        if($(this).css("background-color")=="blue"){
            $(this).css("background-color","white");
        }
        else{
            $(this).css("background-color","blue");
        }

        


    });

    $("#dugme").click(function(){

        let broj=document.getElementById("teht").value;
        if(!broj){
            alert("Niste uneli broj");
            return;
        }
        
        setInterval(function(){
            s++;
            let b=0;

            if(s%2==1){
                let indeksi=[];


                
                while(true){
                    let flag=0;
                    let j=parseInt(Math.floor(Math.random()*9));
                    for(let i=0;i<indeksi.length;i++){
                        if(j==indeksi.at(i)){
                            flag=1;
                            break;
                        }
                    }

                    if(flag==0){
                        indeksi.push(j);
                        ++b;
                    }
                
                
                    console.log(parseInt(broj));
                    if(b==parseInt(broj)){
                        break;
                    }

                }

                console.log(indeksi);

                for(let i=0;i<parseInt(broj);i++){
                    $("#tabela td").each(function(){
                        if(indeksi[i]==$(this).attr("id")){
                            $(this).css("background-color","red");
                        }
    
                    });
    
                }

                indeksi=[];

            }
            

            
            if(s%2==0){
                $("#tabela td").each(function(){
                    $(this).css("background-color","white");
                });
            }
            

            
            
            




        },1000);

        

        


        /*
        for(let i=0;i<parseInt(broj);i++){
            let j=parseInt(Math.floor(Math.random()*10));
            //provera dal postoji
            let flag=0;
            for(let k=0;k<parseInt(broj);k++){
                if(indeksi[k]==j){
                    flag=1;
                    i--;
                    break;
                }
            }
            if(flag==1){
                continue;
            }

            indeksi.push(j);

        }
        */

        //console.log(indeksi);



        


        


    });


 
    
    


});

