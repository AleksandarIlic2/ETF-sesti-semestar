$(document).ready(function() {

    let poslednjePolje1 = null;
    let poslednjePolje2 = null;
    let trRedovi = 1;
    let br = 1;
    $("#polje" + br).on({
        mouseenter: function(){
            poslednjePolje1 = $("#polje" + br).val();
            poslednjePolje2 = $("#polje" + (br + 1)).val();
           

        },
        mouseleave: function(){
           
            poslednjePolje1 = $("#polje" + br).val();
            poslednjePolje2 = $("#polje" + (br + 1)).val();
    
            if (poslednjePolje1 && poslednjePolje2) {
                let tabela = $("#tabela")
                let red, celija1, celija2;
                poslednjePolje1 = null;
                poslednjePolje2 = null;
                br++;  
                br++;              
                let id = "polje" + br;               
                celija1 = $("<td><input type='text'></td>");

                celija1.find('input').attr("id", id);
                
                celija1.find('input').attr("class", "ime");
                id = "polje" + (br + 1);
                celija2 = $("<td><input type='text'></td>")
                celija2.find('input').attr("id", id);

                red = $("<tr></tr>")
            
            
                red.append(celija1)
                red.append(celija2);
                tabela.append(red);
                postaviOsluskivace()
                }
        },
        click: function(){
            poslednjePolje1 = $("#polje" + br).val();
            poslednjePolje2 = $("#polje" + (br + 1)).val();
            if (poslednjePolje1 && poslednjePolje2) {
               
            }
        }
        });

        $("#polje" + (br + 1)).on({
            mouseenter: function(){
                poslednjePolje1 = $("#polje" + br).val();
                poslednjePolje2 = $("#polje" + (br + 1)).val();
    
            },
            mouseleave: function(){
                poslednjePolje1 = $("#polje" + br).val();
                poslednjePolje2 = $("#polje" + (br + 1)).val();
              
                if (poslednjePolje1 && poslednjePolje2) {
                    let tabela = $("#tabela")
                    let red, celija1, celija2;
                    poslednjePolje1 = null;
                    poslednjePolje2 = null;
                    br++;  
                    br++;              
                    let id = "polje" + br;               
                    celija1 = $("<td><input type='text'></<td>")
                    celija1.find('input').attr("id", id);
                    celija1.find('input').attr("class", "ime");
                    id = "polje" + (br + 1);
                    celija2 = $("<td><input type='text'></td>")
                    celija2.find('input').attr("id", id);
    
                    red = $("<tr></tr>")
                
                
                    red.append(celija1)
                    red.append(celija2);
                    tabela.append(red);
                    postaviOsluskivace()
                    }
            },
            click: function(){
                poslednjePolje1 = $("#polje" + br).val();
                poslednjePolje2 = $("#polje" + (br + 1)).val();
                if (poslednjePolje1 && poslednjePolje2) {
                   
                }
            }
            });
    
        function  postaviOsluskivace() {
            $("#polje" + br).on({
                mouseenter: function(){
                    poslednjePolje1 = $("#polje" + br).val();
                    poslednjePolje2 = $("#polje" + (br + 1)).val();
                   
        
                },
                mouseleave: function(){
                    
                    poslednjePolje1 = $("#polje" + br).val();
                    poslednjePolje2 = $("#polje" + (br + 1)).val();
            
                    if (poslednjePolje1 && poslednjePolje2) {
                        let tabela = $("#tabela")
                        let red, celija1, celija2;
                        poslednjePolje1 = null;
                        poslednjePolje2 = null;
                        br++;  
                        br++;              
                        let id = "polje" + br;               
                        celija1 = $("<td><input type ='text'></<td>")
                        celija1.find('input').attr("id", id);
                        celija1.find('input').attr("class", "ime");
                        id = "polje" + (br + 1);
                        celija2 = $("<td><input type ='text'></td>")
                        celija2.find('input').attr("id", id)
        
                        red = $("<tr></tr>")
                    
                    
                        red.append(celija1)
                        red.append(celija2);
                        tabela.append(red);
                        postaviOsluskivace()
                        }
                },
                click: function(){
                    poslednjePolje1 = $("#polje" + br).val();
                    poslednjePolje2 = $("#polje" + (br + 1)).val();
                    if (poslednjePolje1 && poslednjePolje2) {
                       
                    }
                }
                });
        
                $("#polje" + (br + 1)).on({
                    mouseenter: function(){
                        poslednjePolje1 = $("#polje" + br).val();
                        poslednjePolje2 = $("#polje" + (br + 1)).val();
            
                    },
                    mouseleave: function(){
                        poslednjePolje1 = $("#polje" + br).val();
                        poslednjePolje2 = $("#polje" + (br + 1)).val();
                      
                
                       
                        if (poslednjePolje1 && poslednjePolje2) {
                            let tabela = $("#tabela")
                            let red, celija1, celija2;
                            poslednjePolje1 = null;
                            poslednjePolje2 = null;
                            br++;  
                            br++;              
                            let id = "polje" + br;               
                            celija1 = $("<td><input type='text'></<td>")
                            celija1.find('input').attr("id", id);
                            celija1.find('input').attr("class", "ime")
                            id = "polje" + (br + 1);
                            celija2 = $("<td><input type='text'></td>")
                            celija2.find('input').attr("id", id)
            
                            red = $("<tr></tr>")
                        
                        
                            red.append(celija1)
                            red.append(celija2);
                            tabela.append(red);
                            postaviOsluskivace()
                            }
                    },
                    click: function(){
                        poslednjePolje1 = $("#polje" + br).val();
                        poslednjePolje2 = $("#polje" + (br + 1)).val();
                        if (poslednjePolje1 && poslednjePolje2) {
                           
                        }
                    }
                    });
            
        }


    $("#unesi").on("click", function(event){
        event.preventDefault();
        let racun = prompt("Unesite cenu racuna:");
        let platio = prompt("Ko je platio? ")
        let svaImena = $('.ime');
        for (let i = 0; i < svaImena.length; i++) {
            alert($(svaImena[i]).val())
        }
        alert(svaImena)
        return;
        let dugovanja = [];
        
        let svaPolja = $("td")
        alert(svaPolja.length)
        for (let i = 0; i < svaPolja.length; i+=2) {
            let trenutnoPolje = $(svaPolja[i])
            if (trenutnoPolje.find('input').val()) {
                if (i % 2 == 0) {
                    let trenutnoPoljeZaProcenat = $(svaPolja[i + 1])
                    let procenat = (trenutnoPoljeZaProcenat.find('input').val())
                    if (localStorage.getItem("dugovanja")) {
                        dugovanja = JSON.parse(localStorage.getItem("dugovanja"))
                        for (let k = 0; k < dugovanja.length; k++) {
                            if (dugovanja[k]['Ime'] == platio) {
                                dugovanja[k]['Dug'] -= (racun - ((procenat / 100) * racun))
                            }
                            else {
                                dugovanja[k]['Dug'] += procenat/1000*racun
                            }
                        }
                    }
                    else {

                        dugovanja = [

                        ]
                    }

                    alert(trenutnoPolje.find('input').val())
                }
            }
           
            
        }


    })


})


