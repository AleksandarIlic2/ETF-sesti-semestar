let rezultat = 50;
function igrajIgru() {
 
    while(true) {
        let nivo = document.getElementById("nivo").value;
        let negativno = document.getElementById("negativni").checked;
        let brojA = Math.floor((Math.random() - (negativno ? 0.5: 0)) * Math.pow(10, nivo))

        let brojB = Math.floor(Math.random() * 10);;
    
        alert ("Koliko je "  + brojA + " + " + brojB + "?")
        let odgovor = prompt("Unesite rezultat")
       
        if (odgovor == null) {
            let napusti = confirm("Da li zelite da zavrsite igru?");
            if (napusti) break;
            else continue;
        }
        odgovor = parseInt(odgovor);
        if (brojA + brojB == odgovor) {
            alert("Tacan odgovor");
            rezultat += 50;
        }
        else {
            alert("Netacan odgovor!")
            dodajRezultat(rezultat);
            break;
        }
        
    }
    dodajRezultat(rezultat);

}

function dodajRezultat(rez) {
    let tekstRezultata = document.getElementById("rezultati").innerText;
    let rezultati = tekstRezultata.split(",")
    rezultati.push(rezultat);
    rezultati.sort(komparator);
    document.getElementById("rezultati").innerHTML = rezultati;

}

let imena = [];

function komparator(a, b) {
    return parseInt(a) - parseInt(b);
}

function dodajIme() {
    let ime = document.getElementById("ime").value;
    imena.push(ime);
    imena.sort(komparator);

    let igraci = document.getElementById("imena").innerHTML = imena;
   

}
let rucka;
function zapocni() {
    rucka = setInterval(broji, 1000)
}

function broji() {
    let temp = document.getElementById("vreme").innerText
    temp = parseInt(temp);
    temp = temp + 1;
    document.getElementById("vreme").innerText = temp;
}

function zaustavi() {
    clearInterval(rucka);
}