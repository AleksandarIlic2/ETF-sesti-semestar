//alert("Obavestenje2")
//document.write("<h1>Naslov 2</h1>")

function igrajIgru() // povratna vrednost se ne navodi, tipovi podataka ne postoje bas jer moze da se u istu promenljivu stavi vise tipova u razlicitim trenucima
 {

    // let != var, let kazemo da je promenljiva blokovskog dosega, samo do viticastih zagrada u kojima je definisana
    // var globalnog dosega, kazemo samo postoji promenljiva brojA negde
    let rezultat = 50;
    while(true)
        {        
            let nivo = document.getElementById("nivo").value;
            let negativno = document.getElementById("negativni").checked;
            let brojA = Math.floor((Math.random(0,1) - (negativno ? 0.5 : 0)) *  Math.pow(10, nivo) ); // floor uzima nizu vrednost, samo odseca visak
            let brojB = Math.floor((Math.random(0,1) - (negativno ? 0.5 : 0)) * Math.pow(10, nivo));    
            alert("Koliko je " + brojA + " + " + brojB + "?");
            let odgovor = prompt("Unesite rezultat");  // prompt vraca null ako je neko kliknuo cancel
          
            if (odgovor == null)
                {
                    let napusti  = confirm("Da li zelite da napustite igru?");
                    if (napusti) break;
                    else continue; // continue posto je odgovor null da ne bi dole radio parseInt(null)
                }
            odgovor = parseInt(odgovor);    // mora ovde tek parseInt jer ne mozes da parseInt ako je odgovor null tj. ako nije uneto nista nego je kliknuto na cancel 
            if (brojA + brojB == odgovor) {
                alert("Tacan odgovor")
                rezultat += 50;
            }
            else {
                alert("Netacan odgovor");
                break;
            }
        }
        dodajRezultat(rezultat);

}

function dodajRezultat(rezultat) {
    let tekst = document.getElementById("rezultati").innerText;
    let rezultati = tekst.split(",")
    rezultati.push(rezultat)
    rezultati.sort(komparator)
    document.getElementById("rezultati").innerHTML = rezultati; // za nizove je po difoltu da ih ispise sa zarezom izmedju tako
    // da ces dobiti ako je tamo bilo 100, 200 i sad je novi rezultati 150, bice 100, 150, 200 dakle znace on da niz ugradi u 
    // html sa tim zarezima
}


function komparator(a, b) // ta funkcija ce da se poziva za SVAKA 2 elementa da proveri jel dobar poredak!
{
    // manje od 0 ako je a i b u dobro poretku, vece od 0 ako nisu u dobro poretku
    // razlika veca od 0, ako a treba da ide nakon b tj desno od b
    // razlika manja od 0, ako a treba da ide pre b tj levo od b
    // ako poredak nije bitan tj a i b su jednaki vracamo 0
    // ako je
    return parseInt(a) - parseInt(b);     
}

let imena = [];

function dodajIme() {
    let ime = document.getElementById("ime").value
    imena.push(ime);
    imena.sort(komparator); // sortira alfabetski inicijalno, reverse obrnuto alfabetski cak iako stavis broj 


    document.getElementById("imena").innerHTML  = imena  //innerHTML oznacava unutrasnjost HTML, unutar diva ce se generisati sta napises, unutar diva upisujes imena 
}

let vreme = 0;
let handler;
function zapocni() {
    handler = setInterval(stoperica, 1000);

}

//setTimeout() -> pozovi funkciju nakon odredjenog broja milisekundi a ti nastavis izvrsavanje metode zapocni
//setInterval() -> kao setTimeout() samo se ta funkcija (stoperica) nece izvrsiti jednom nego iznova i iznova u odgovarajucem intervalu

function stoperica() {
    vreme++;
    document.getElementById("vreme").innerHTML = vreme;
  
}

function zaustavi() {
    clearInterval(handler); // nemoj vise da pozivas stopericu
}