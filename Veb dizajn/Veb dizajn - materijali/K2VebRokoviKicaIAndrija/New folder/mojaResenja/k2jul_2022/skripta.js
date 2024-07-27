function proveraPobede(tabela, id) {
    
    let pobeda =0;
    let red = Math.floor(id / 3); // Dobijanje reda
    let kolona = id % 3; // Dobijanje kolone
    let simbol = tabela[id];
    //pobeda red
    if(red + 1 < 3 && red + 2 < 3){
        if(tabela[(red+1)*3 + kolona]==simbol && tabela[(red+2)*3 + kolona]== simbol ){

           
           $("#tabela td").each(function() {
            if ($(this).attr("id") == (red+1)*3 + kolona || $(this).attr("id") ==(red+2)*3 + kolona || $(this).attr("id") ==red*3 + kolona) {
                $(this).css("background-color", "green");
            }
            pobeda =1;
        });
        }
    }

    if(red + 1 < 3 && red -1  >= 0){
        if(tabela[(red+1)*3 + kolona]==simbol && tabela[(red-1)*3 + kolona]== simbol ){
            
            $("#tabela td").each(function() {
                if ($(this).attr("id") == (red+1)*3 + kolona || $(this).attr("id") ==(red-1)*3 + kolona || $(this).attr("id") ==red*3 + kolona) {
                    $(this).css("background-color", "green");
                }
            });
            pobeda =1;
        }
    }

    if(red -1 >= 0 && red -2 >=0){
        if(tabela[(red-1)*3 + kolona]==simbol && tabela[(red-2)*3 + kolona]== simbol ){
            
            $("#tabela td").each(function() {
                if ($(this).attr("id") == (red-1)*3 + kolona || $(this).attr("id") ==(red-2)*3 + kolona || $(this).attr("id") ==red*3 + kolona) {
                    $(this).css("background-color", "green");
                }
            });
            pobeda =1;
        }
    }


    //pobeda kolona
    if(kolona + 1 < 3 && kolona + 2 < 3){
        if(tabela[red*3 + (kolona+1)]==simbol && tabela[red*3 + (kolona +2)]== simbol ){
            
            $("#tabela td").each(function() {
                if ($(this).attr("id") == (red)*3 + kolona+1 || $(this).attr("id") ==(red)*3 + kolona+2 || $(this).attr("id") ==red*3 + kolona) {
                    $(this).css("background-color", "green");
                }
            });
            pobeda =1;
        }
    }

    if(kolona + 1 < 3 && kolona -1 >= 0 ){
        if(tabela[red*3 + (kolona+1)]==simbol && tabela[red*3 + (kolona -1)]== simbol ){
            
            $("#tabela td").each(function() {
                if ($(this).attr("id") == (red)*3 + kolona+1 || $(this).attr("id") ==(red)*3 + kolona-1 || $(this).attr("id") ==red*3 + kolona) {
                    $(this).css("background-color", "green");
                }
            });
            pobeda =1;
        }
    }

    if(kolona -1 >=0 && kolona -2 >=0){
        if(tabela[red*3 + (kolona-1)]==simbol && tabela[red*3 + (kolona -2)]== simbol ){
            
            $("#tabela td").each(function() {
                if ($(this).attr("id") == (red)*3 + kolona-1 || $(this).attr("id") ==(red)*3 + kolona-2 || $(this).attr("id") ==red*3 + kolona) {
                    $(this).css("background-color", "green");
                }
            });
            pobeda =1;
        }
    }

    //dijagonala 
    if (red === kolona){

        if(kolona + 1 < 3 && red +1 < 3 && kolona + 2 < 3 && red + 2 < 3 ){
            if(tabela[(red+1)*3 + kolona+1]==simbol && tabela[(red+2)*3 + kolona+2]==simbol){
                
                $("#tabela td").each(function() {
                    if ($(this).attr("id") == (red+1)*3 + kolona+1 || $(this).attr("id") ==(red+2)*3 + kolona+2 || $(this).attr("id") ==red*3 + kolona) {
                        $(this).css("background-color", "green");
                    }
                });
                pobeda =1;
            }
            

        }

        if(kolona -1 >=0 && red -1 >=0 && kolona -2 >=0 && red -2 >=0 ){
            if(tabela[(red-1)*3 + kolona-1]==simbol && tabela[(red-2)*3 + kolona-2]==simbol){
                
                $("#tabela td").each(function() {
                    if ($(this).attr("id") == (red-1)*3 + kolona-1 || $(this).attr("id") ==(red-2)*3 + kolona-2 || $(this).attr("id") ==red*3 + kolona) {
                        $(this).css("background-color", "green");
                    }
                });
                pobeda =1;
            }

        }
        if(kolona + 1 < 3 && red +1 < 3 && kolona -1 >=0 && red -1 >=0){
            if(tabela[(red+1)*3 + kolona+1]==simbol && tabela[(red-1)*3 + kolona-1]==simbol){
                
                $("#tabela td").each(function() {
                    if ($(this).attr("id") == (red+1)*3 + kolona+1 || $(this).attr("id") ==(red-1)*3 + kolona-1 || $(this).attr("id") ==red*3 + kolona) {
                        $(this).css("background-color", "green");
                    }
                });
                pobeda =1;
            }

        }

        //sporedna dijagonala
        if (red + kolona == 2) {

            if( red +1 < 3 && kolona -1 >=0 && red + 2 < 3 && kolona -2 >=0){
                if(tabela[(red+1)*3 + kolona -1]== simbol && tabela[(red+2)*3 + kolona -2]== simbol){
                    
                    $("#tabela td").each(function() {
                        if ($(this).attr("id") == (red+1)*3 + kolona-1 || $(this).attr("id") ==(red+2)*3 + kolona-2 || $(this).attr("id") ==red*3 + kolona) {
                            $(this).css("background-color", "green");
                        }
                    });
                    pobeda =1;
                }
            }

            if( red +1 < 3 && kolona -1 >=0 && red -1 >=0 && kolona +1 >3){
                if(tabela[(red+1)*3 + kolona -1]== simbol && tabela[(red-1)*3 + kolona +1]== simbol){
                    
                    $("#tabela td").each(function() {
                        if ($(this).attr("id") == (red+1)*3 + kolona-1 || $(this).attr("id") ==(red-1)*3 + kolona+1 || $(this).attr("id") ==red*3 + kolona) {
                            $(this).css("background-color", "green");
                        }
                    });
                    pobeda =1;
                }
            }

            if( red -1 >=0 && kolona + 1 < 3 && red - 2 >=0 && kolona +2 <3 ){
                if(tabela[(red+1)*3 + kolona -1]== simbol && tabela[(red+2)*3 + kolona -2]== simbol){
                    
                    $("#tabela td").each(function() {
                        if ($(this).attr("id") == (red-1)*3 + kolona+1 || $(this).attr("id") ==(red-1)*3 + kolona+2 || $(this).attr("id") ==red*3 + kolona) {
                            $(this).css("background-color", "green");
                        }
                    });
                    pobeda =1;
                }
            }
        }

       
    }

    for(let i =0; i< 9; i++){
        if(tabela[i] ==null){
            return pobeda;
        }
    }

    pobeda =2;

    $("#tabela td").each(function() {
        
        $(this).css("background-color", "red");
        
    });
    
    return pobeda;

}

let tabela = [];
$(document).ready(function() {
    let turn = 1;
    let c = 0;

    $("#tabela td").each(function() {
        $(this).attr("id", c);
        c++;
        $(this).text("");
    })

    $("#tabela td").click(function() {
        let id = $(this).attr("id");
        let simbol ="";

        if ($(this).text() === "") {

            if (turn === 1) {
                tabela[id] = "X";
                $(this).text("X");
                turn = 2;
                simbol ="X";
            } else {
                tabela[id] = "O";
                $(this).text("O");
                turn = 1;
                simbol="O";
            }
           
            
        }
        if (proveraPobede(tabela, id)==1) {
            setTimeout(function() {
                alert("Kraj Igre! Pobedio je: " + simbol);
            }, 100); // Odlaže alert za 100ms kako bi se promenila boja pozadine
        }else if(proveraPobede(tabela, id)==2){
            setTimeout(function() {
                alert("Kraj Igre! Nereseno je.");
            }, 100);

        }
        
    })
})