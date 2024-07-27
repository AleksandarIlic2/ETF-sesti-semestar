let velicinaBloka = 20;
let brojRedova = localStorage.getItem("velicinaTable");
let brojKolona = brojRedova;
let nivo = localStorage.getItem("nivo");

let tabla;
let kontekst;

let zmijaX = Math.floor(Math.random() * 20) * 20;
let zmijaY = Math.floor(Math.random() * 20) * 20;

let hranaX = Math.floor(Math.random() * 20) * 20;
let hranaY = Math.floor(Math.random() * 20) * 20;

let brzinaX = 0;
let brzinaY = 0;

let teloZmije = [];

let superHranaX;
let superHranaY;

let superHranaFleg = false;

let rezultat = 0;

let korisnickoIme = "a";

let nizTopPetRezultata = [{
    korisnicko_ime : "p",
    rez : "-1"
}];

function skokNaIgru() {
    let j = false;
    let niz = document.getElementsByName("veltab");
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i].checked)
        {
            j = true;
            velicinaTable = niz[i];
            break;
        }
        else
        {
            continue;
        }
    }
    if(j == false) return;
    j = false;
    niz = document.getElementsByName("nivo");
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i].checked)
        {
            j = true;
            nivo = niz[i];
            break;
        }
        else
        {
            continue;
        }
    }
    if( j == true)  {
        localStorage.setItem("velicinaTable" , velicinaTable.value);
        localStorage.setItem("nivo" , nivo.value);
        window.location.href = "zmijica-igra.html";
    }
    else return;
}

function podesiStranicu() {
    tabla = document.getElementById("igra");
    kontekst = tabla.getContext("2d");
    tabla.width = brojKolona * velicinaBloka;
    tabla.height = brojRedova * velicinaBloka;

    let nizRez = localStorage.getItem("niz");
    if(nizRez != null)
    {
        nizTopPetRezultata = JSON.parse(nizRez);
    }
    else {
         localStorage.setItem("niz", JSON.stringify(nizTopPetRezultata));
    }

    postaviHranu();

    document.addEventListener("keydown", (e) => {
        if(e.code == "ArrowDown" && !(brzinaX == 0 && brzinaY == -1))
    {
        brzinaX = 0;
        brzinaY = 1;
    }

    else if(e.code == "ArrowUp" && !(brzinaX == 0 && brzinaY == 1))
    {
        brzinaX = 0;
        brzinaY = -1;
    }

    else if(e.code == "ArrowRight" && !(brzinaX == -1 && brzinaY == 0)) {
        brzinaX = 1;
        brzinaY = 0;
    }

    if(e.code == "ArrowLeft" && !(brzinaX == 1 && brzinaY == 0)) {
        brzinaX = -1;
        brzinaY = 0;
    }
    } )

    setInterval(crtajTablu, dodeliTezinu());
    setInterval(postaviSuperHranu, 10000);
}

function crtajTablu() {
    kontekst.fillStyle = "black";
    kontekst.fillRect(0, 0, tabla.width, tabla.height);

    kontekst.fillStyle = "red";
    kontekst.fillRect(hranaX, hranaY, velicinaBloka, velicinaBloka);

    if(superHranaFleg) {
        kontekst.fillStyle = "green";
        kontekst.fillRect(superHranaX, superHranaY, velicinaBloka, velicinaBloka);
    }
    else {
        kontekst.fillStyle = "black";
        kontekst.fillRect(superHranaX, superHranaY, velicinaBloka, velicinaBloka);
    }

    if(zmijaX == superHranaX && zmijaY == superHranaY && superHranaFleg == true)
    {
        superHranaFleg = false;
        rezultat += 10;
        teloZmije.push([superHranaX, superHranaY]);
        document.getElementById("rezultat").innerHTML = "Trenutni rezultat: " + rezultat;
    }

    kontekst.fillStyle = "yellow";
    zmijaX += brzinaX * velicinaBloka;
    zmijaY += brzinaY * velicinaBloka;
    kontekst.fillRect(zmijaX, zmijaY, velicinaBloka, velicinaBloka);

    if(zmijaX < 0 || zmijaY < 0 || zmijaX >= velicinaBloka * brojKolona || zmijaY >= velicinaBloka * brojRedova) {
        ime = prompt("Unesite vase ime: ");
        if(ime)
        {
            localStorage.setItem("korisnickoIme", ime);
            localStorage.setItem("rezultat", rezultat);
            nizTopPetRezultata.push({korisnicko_ime : ime , rez : rezultat});
            localStorage.setItem("niz" , JSON.stringify(nizTopPetRezultata));
            window.location.href = "zmijica-rezultati.html";
        }
    }

    if(zmijaX == hranaX && zmijaY == hranaY)
    {
        rezultat += 1;
        document.getElementById("rezultat").innerHTML = "Trenutni rezultat: " + rezultat;
        teloZmije.push([hranaX, hranaY]);
        postaviHranu();
    }

    for(let i = teloZmije.length - 1; i > 0; i--) {
        teloZmije[i][0] = teloZmije[i - 1][0];
        teloZmije[i][1] = teloZmije[i - 1][1];
    }

    if(teloZmije.length >= 0)
    {
        teloZmije[0] = [zmijaX, zmijaY];
    }

    for(let i = 0 ; i < teloZmije.length ; i++) {
        kontekst.fillRect(teloZmije[i][0], teloZmije[i][1], velicinaBloka, velicinaBloka);
    }

    for(let i = 1; i < teloZmije.length; i++){
        if(zmijaX == teloZmije[i][0] && zmijaY == teloZmije[i][1])
        {
            ime = prompt("Unesite vase ime: ");
            if(ime){
                localStorage.setItem("korisnickoIme", ime);
                localStorage.setItem("rezultat", rezultat);
                nizTopPetRezultata.push({korisnicko_ime : ime , rez : rezultat});
                localStorage.setItem("niz" , JSON.stringify(nizTopPetRezultata));
                window.location.href = "zmijica-rezultati.html";
            }
        }
    }
}

function postaviHranu(){
    hranaX = Math.floor(Math.random() * 20) * 20;
    hranaY = Math.floor(Math.random() * 20) * 20;
}

function dodeliTezinu(){
    if(nivo == 1)
    {
        return 120;
    }
    else if(nivo == 2)
    {
        return 100;
    }
    else{
        return 80;
    }
}

function postaviSuperHranu() {
    superHranaFleg = true;
    superHranaX = Math.floor(Math.random() * 20) * 20;
    superHranaY = Math.floor(Math.random() * 20) * 20;
    setTimeout(obrisiSuperHranu, 4000);
}

function obrisiSuperHranu() {
    superHranaFleg = false;
}

function prikaziRezultate() {
    let nizRez = localStorage.getItem("niz");
    let konacanNiz = [];
    let maksRez = -2;
    let maksj;
    if(nizRez != null)
    {
        nizTopPetRezultata = JSON.parse(nizRez);
        for(let i = 0; i < nizTopPetRezultata.length; i++){
            for(let j = i; j < nizTopPetRezultata.length; j++) {
                if(parseInt(nizTopPetRezultata[i].rez) < parseInt(nizTopPetRezultata[j].rez))
                {
                    let tmp = nizTopPetRezultata[i];
                    nizTopPetRezultata[i] = nizTopPetRezultata[j];
                    nizTopPetRezultata[j] = tmp;
                }
            }
        }
        let i = 0;
        let j = 1;
        while(i < 5) {
            if(nizTopPetRezultata[i].rez != -1) {
                document.getElementById(j).innerHTML = nizTopPetRezultata[i].korisnicko_ime + " - " + nizTopPetRezultata[i].rez;
                i++;
                j++;
            }
            else{
                i++;
            }
        }
        document.getElementById("prethodna").innerHTML = "Rezultat iz prethodne partije: " + localStorage.getItem("korisnickoIme")
        + " - " + localStorage.getItem("rezultat");
        if(nizTopPetRezultata.length > 5)
        {
            while(nizTopPetRezultata.length > 5)
            {
                nizTopPetRezultata.pop();
            }
        }
        localStorage.setItem("niz", JSON.stringify(nizTopPetRezultata));

    }
    else {
         localStorage.setItem("niz", JSON.stringify(nizTopPetRezultata));
         document.getElementById("poruka").innerHTML = "Trenutno nema rezultata, odigrajte partiju!";
    }


}

function skociNazad() {
    window.location.href = "zmijica-uputstvo.html";
}

function skokNaRezultate() {
    window.location.href = "zmijica-rezultati.html";
}