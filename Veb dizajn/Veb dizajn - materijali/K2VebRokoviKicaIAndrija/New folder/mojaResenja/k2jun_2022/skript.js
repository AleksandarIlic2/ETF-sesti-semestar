function restartuj(tabela, broj){
    for(let i =0; i<16;i++){
        tabela[i]=0;
    }

    for(let i =0; i< broj; i++){
        let j = Math.floor(Math.random()*16);
        j = parseInt(j);
        if(tabela[j]!= 100){
            tabela[j]=100;
        }else{
            i--;
        }
    }

    let red ='';
    for(let i =0; i < 16; i++){
        if(tabela[i] ==100){
            red+='x';
        }else{
            red+='o';
        }

        if((i+1)%4 == 0){
            console.log(red);
            red = '';
        }
    }

    $('#minesweepertabela td').each(function(){
        $(this).text(null);
        $(this).css('background-color', 'beige')
    });

    for(let x =0; x<16; x++){
        let i = Math.floor(x/4);
        let j = x%4;
        let b =0;

        if(tabela[x]==100){
            continue;
        }

        if(i-1>=0){
            if(tabela[(i-1)*4+j]==100){
                b+=1;
            }

        }
        if(j-1>=0){
            if(tabela[i*4+j-1]==100){
                b+=1;
            }
        }
        if(i+1<4){
            if(tabela[(i+1)*4+j]==100){
                b+=1;
            }
        }
        if(j+1<4){
            if(tabela[i*4+j+1]==100){
                b+=1;
            }
        }
        if(i-1>=0 && j-1>=0){
            if(tabela[(i-1)*4+j-1]==100){
                b+=1;
            }
        }

        if(i-1>=0 && j+1<4){
            if(tabela[(i-1)*4+j+1]==100){
                b+=1;
            }
        }


        if(i+1<4 && j+1<4){
            if(tabela[(i+1)*4+j+1]==100){
                b+=1;
            }
        }

        if(i+1<4 && j-1>=0){
            if(tabela[(i+1)*4+j-1]==100){
                b+=1;
            }
        }

        tabela[x]=b;

    }

    let k =0;

    $('#minesweepertabela td').each(function(){
        $(this).attr('id',k);
        k++;
    });
}






$(document).ready(function(){
    let tabela =[];

    let broj = null;
    broj = prompt("Unesite broj bombi");

    restartuj(tabela, broj);
    let poseceni = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let ukupno = 16-broj;

    let otkrivene =0;

    $('#minesweepertabela td').click(function(){
        if(tabela[$(this).attr('id')]!=100){
            $(this).css('background-color', '#bfff00').css('width','150px').css('height','150px');
            $(this).text(tabela[$(this).attr('id')]);
            if(poseceni[$(this).attr('id')]==0){
                otkrivene++;
                console.log(otkrivene);
                poseceni[$(this).attr('id')]=1;
            }
        }else if(tabela[$(this).attr('id')]==100){
            let mine = $('#minesweepertabela td');
            mine.each(function(){
                if(tabela[$(this).attr('id')]==100){
                    $(this).css('background-color', 'red').css('width','150px').css('height','150px');
                    $(this).text('x');
                }
            });

            setTimeout(function(){
                alert("Izgubili ste");
            }, 1000);

            setTimeout(function(){
                broj=prompt("Unesite broj bombi");
                restartuj(tabela,broj);
                ukupno=16-broj;
                otkrivene=0;
                for(let x=0;x<16;x++){
                    poseceni[x]=0;
                }

            },2000);
        }

        if(otkrivene==ukupno){
            console.log(otkrivene);
            setTimeout(function(){
                alert("Pobedili ste!");
            }, 1000)

            setTimeout(function(){
                broj=prompt("Unesite broj bombi");
                restartuj(tabela,broj);
                ukupno=16-broj;
                otkrivene=0;
                for(let x=0;x<16;x++){
                    poseceni[x]=0;
                }

            },2000);
        }
    })


})