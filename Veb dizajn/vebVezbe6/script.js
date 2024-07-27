function resetujGreske()
{
    document.getElementById("korisnickoImeGreska").innerHTML = "";
    document.getElementById("mejlGreska").innerHTML = "";
    document.getElementById("telefonGreska").innerHTML = "";
    document.getElementById("lozinkaGreska").innerHTML = "";
    document.getElementById("potvrdaLozinkeGreska").innerHTML = "";
}


// u skladistu je strnig, a mi cemo u javascriptu da napravimo odredjenu strukturu/objekat

let nizKorisnika = [
    {
        korisnickoIme : "_",
        mejl : "_",
        telefon : "_",
        lozinka : "_"
    }
];

function inicijalizujPodatke()
{
 // razlikuj da li neko BAS PRVI put otvara stranicu i nema korsnika jos u sadrzaju ili je neko otvorio stranicu 2, 3... put i vec 
// i vec ima nesto u localstorage
let korisnici = localStorage.getItem("korisnici");
if (korisnici != null){
    nizKorisnika = JSON.parse(korisnici); // JSON.parse konveruje JSON string u javascript objekat
} else {
    localStorage.setItem("korisnici", JSON.stringify(nizKorisnika)); // prvi put neko otvara stranicu, dodaj ovog jednog difoltnog 
    // korisnika sa JSON.stringify u localstorage
}
}




function registrujSe() {

   // resetujGreske();
    let korisnickoIme = document.getElementById("korisnickoIme").value;
    let mejl = document.getElementById("mejl").value;
    let telefon = document.getElementById("telefon").value;
    let lozinka = document.getElementById("lozinka").value;
    let potvrdaLozinke = document.getElementById("potvrdaLozinke").value;

    
    // korime mala, vel slova, cifre i donja crta i mora pocinjati nekim slovom
    //w ili cifra, ili slovo ili donja crta
    // * postoji od 0 do nekog konacnog broja
    // + MINIMALNO 1 a maksimalno nije ograniceno
    // ? {0,1} po difoltu a mozes da pregazis ?{2,3} npr
    //[] bilo koji od karaktera
    // . je bilo koji karakter, a /. je sama tacka
    if (/^[a-zA-Z]\w+$/.test(korisnickoIme) == false){
        document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime nije u dobro formatu.";
    }
    else if (/^\w+@[a-z]+\.[a-z]{2,3}$/.test(mejl) == false) {
    document.getElementById("mejlGreska").innerHTML = "Mejl nije dobrog formata";
    }    
    
    else if (/^.{6,}$/.test(lozinka) == false || /[a-z]/.test(lozinka) == false || /[A-Z]/.test(lozinka) == false || /\d/.test(lozinka) == false) 
    {
        document.getElementById("lozinkaGreska").innerHTML = "Lozinka nije u dobro formatu";
    }
    else if (lozinka != potvrdaLozinke)
    {
        document.getElementById("potvrdaLozinkeGreske").innerHTML = "Polja lozinke i potvrde lozinke se ne podudaraju"
    }   
    
    if (proveraJedinstvenost(korisnickoIme) == false)
    {
        document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime je zauzeto";
        return;
    }

    dodajKorisnika(korisnickoIme, mejl, telefon, lozinka);

}

function prijaviSe() {
    let korisnickoIme = document.getElementById("korisnickoIme").value; 
    let lozinka = document.getElementById("lozinka").value; 

    document.getElementById("korisnickoImeGreska").innerHTML = "";
    document.getElementById("lozinkaGreska").innerHTML = "";
    for (let i = 0; i < nizKorisnika.length; i++)
        {
            if (korisnickoIme == nizKorisnika[i].korisnickoIme) {
                if (lozinka == nizKorisnika[i].lozinka)
                {
                    window.location.href = "prodavnica.html"
                }
                else {
                    // greska u lozinci
                }    
            }
        }
    // korisnik ne postoji    
}

function proveraJedinstvenost(ime)
{
    for (let i = 0; i < nizKorisnika.length; i++)
    {
        if (ime == nizKorisnika[i].korisnickoIme) {
            return false;
        }
    }    
    return true;
}


function dodajKorisnika(ime, m, t, l) {

    nizKorisnika.push(
        {
        korisnickoIme : ime,
        mejl : m,
        telefon : t,
        lozinka: l   
        }
    );

    localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));

    

}