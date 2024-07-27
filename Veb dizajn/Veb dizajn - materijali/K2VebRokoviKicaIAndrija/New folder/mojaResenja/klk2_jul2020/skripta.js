let klik = 1;

$(document).ready(function(){

    $("#unesiId").click(function(){
        let prev = localStorage.getItem("poruka");
       
        poruka = prompt("Unesi ime: ");
       
        localStorage.setItem("poruka", poruka+prev)
       
    })

    $("#unesiId").mouseout(function(){
    
        alert("Vrednost local Storega: " + localStorage.getItem("poruka"));
    })
})