
let running=false;
let vrednosti=[];
let done=false;
let num=0;

$(document).ready(function(){

    $("td").css("background-color","#facdea");


    $("#pokreni").click(function(){
        vrednosti=[];
        num=0;

        if(running){
            return;
        }

        running=true;

        let broj=parseInt(document.getElementById("slider").value);

        
        let last=0;
        

        let handler=setInterval(function(){
            
            
            let j=Math.floor(Math.random()*9+1);

            while(j==last){
                j=Math.floor(Math.random()*9+1);
            }

            console.log(j);

            

            $("#"+j).css("background-color","blue");
            $("#"+last).css("background-color","#facdea");

            

            vrednosti[num]=j;
            last=j;
            num++;


            if(broj==num){
                clearInterval(handler);
                console.log(vrednosti);

                setTimeout(function(){
                    $("td").css("background-color","#facdea");
                    running=false;
                    done=true;
                    


                },1000);
                
                
            }

            
            



        },1000);

       


    });

    let count=0;

    $("td").click(function(){

        

        if(running){
            return;
        }

        console.log($(this).attr("id"));
        console.log(vrednosti[count]);
        console.log(vrednosti);
        
        if($(this).attr("id")==vrednosti[count]){
            $(this).css("background-color","green");
            count++;

            if(count==vrednosti.length){
                setTimeout(function(){
                    alert("Bravo");
                    $("td").css("background-color","#facdea");
                    vrednosti=[];
                    count=0;
                    num=0;
                    return;

                },1000)
                
            }
        }
        else{
            count=0;
            $("td").css("background-color","red");
            setTimeout(function(){
                $("td").css("background-color","#facdea");
                console.log("tu sam");
                return;

            },1000)
        }





    });




});