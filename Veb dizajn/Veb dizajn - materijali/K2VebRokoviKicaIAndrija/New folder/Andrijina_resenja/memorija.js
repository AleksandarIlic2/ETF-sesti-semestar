


function mesaj(slike){

    for (let i = slike.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [slike[i], slike[j]] = [slike[j], slike[i]]; 
    }


}


function dodajListenere(slikeDiv){
    /*
    for(let i=0;i<slikeDiv.length;i++){
        slikeDiv.eq(i).click(function(){

            akcija(i);
        });

    }
    */

    for(let i=0; i<slikeDiv.length; i++){
        (function(indeks){
            slikeDiv.eq(indeks).click(function(){
                akcija(indeks);
            });
        })(i);
    }
    
}


function akcija(indeks){

    //indeks=parseInt(indeks);
    if(indeks==0){
        poeni=poeni+2;
        
    }
    else if(indeks==1){
        poeni=poeni+3;
    }
    else if(indeks==2){
        poeni=poeni+4;
    }


    document.getElementById("p").value=toString(poeni);


}


let prva=null;
let druga=null;


$(document).ready(function(){

    let slike=[];
    let otkrivene=[];
    let t=0;
   
    let poeni=0;
    document.getElementById("p").value=poeni;

    let apartmani = $('#dole img');

    $('#dole img').click(function(){

        for(let i=0;i<apartmani.length;i++){
            if($(this).is(apartmani.eq(0))){
                poeni += 5;
            }
            if($(this).is(apartmani.eq(1))){
                poeni += 4;
            }
            if($(this).is(apartmani.eq(2))){
                poeni += 3;
            }
            break;
        }
        
        document.getElementById("p").value=poeni;
    });

    



    $('#tabela td img').each(function() {  
        slike.push($(this).attr('src'));
        $(this).attr('id',t);
        otkrivene[t]=0;
        t++;
    });


    mesaj(slike);

    let m=0;
    $('#tabela td img').each(function() {  
        $(this).attr('src',slike[$(this).attr('id')]);
    });
    



    
    $('#tabela td img').each(function() {  
        $(this).attr('src','aky7.jpg');
    });
    



    $('#tabela td img').click(function(){
        let tr=$(this);
        
        if(druga!=null){
            return;
        }

        if(prva!=null){
            if($(this).attr('id')==prva.attr('id')){
                return;
            }
            druga=tr;
            druga.attr('src',slike[druga.attr('id')]);
            
            setTimeout(function(){
                if(prva.attr('src')!=druga.attr('src') && otkrivene[prva.attr('id')]==0 && otkrivene[druga.attr('id')]==0 && prva.attr('id')!=druga.attr('id')){
                    prva.attr('src','aky7.jpg');
                    druga.attr('src','aky7.jpg');
    
                   
                }
                else if(prva.attr('src')==druga.attr('src') && otkrivene[prva.attr('id')]==0 && otkrivene[druga.attr('id')]==0 && prva.attr('id')!=druga.attr('id')){
                    prva.attr('src',slike[prva.attr('id')]);
                    druga.attr('src',slike[druga.attr('id')]);
                    otkrivene[prva.attr('id')]=1;
                    otkrivene[druga.attr('id')]=1;
                    poeni++;
                    document.getElementById("p").value=poeni;

                }
    
                prva=null;
                druga=null;


            },500);
            

            
        }
        else{
            prva=tr;
            prva.attr('src',slike[prva.attr('id')]);
        }


        
       

    });



});