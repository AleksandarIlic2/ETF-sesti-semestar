function resetujGreske() {
    let korisnickoIme = document.getElementById("korisnickoIme").value;
    let mejl = document.getElementById("mejl").value;
    let telefon = document.getElementById("telefon").value;
    let lozinka = document.getElementById("lozinka").value;
    let potvrdaLozinke = document.getElementById("potvrdaLozinke").value;


}

let nizKorisnika = [    
    {
        korisnickoIme: "_",
        mejl : "_",
        telefon : "_",
        lozinka:  "_"
    }

]


function registrujSe() {

    resetujGreske();

    let korisnickoIme = document.getElementById("korisnickoIme").value;
    let mejl = document.getElementById("mejl").value;
    let telefon = document.getElementById("telefon").value;
    let lozinka = document.getElementById("lozinka").value;
    let potvrdaLozinke = document.getElementById("potvrdaLozinke").value;

    //korisnicko ime mala, velika slova, donja crta, cifre i mora da pocne slovom
 /*   if (/^[a-zA-Z]\w*$/.test(korisnickoIme) == false) {
       
        document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime nije u dobrom formatu."
    }

    else if ((/^\w+@[a-z]+\.[a-z]{2,3}$/).test(mejl) == false) {
        document.getElementById("mejlGreska").innerHTML = "Mejl nije u dobrom formatu."

    }

    else if (
        /^.{6,} $/.test(lozinka) == false ||
        /[a-z]/.test(lozinka) == false || 
        /[A-Z]/.test(lozinka) == false ||
        /\d/.test(lozinka) == false

    ) {
        document.getElementById("mejlGreska").innerHTML = "Lozinka nije u dobrom formatu."

    }*/

    if (!proveraJedinstvenosti(korisnickoIme)) return;
    dodajKorisnika(korisnickoIme, mejl, telefon, lozinka);

  // \w - cifra, slovo ili donja crta - MAKAR JEDNO, ostalo nas ne zanima
}

function dodajKorisnika(ime, m, t, l) {
    nizKorisnika.push(
        {
            korisnickoIme: ime,
            mejl : m,
            telefon: t,
            lozinka : l
        }
    )

    localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
}

function inicijalizujPodatke() {
    let korisnici = localStorage.getItem("korisnici");
    if (korisnici != null) {
        nizKorisnika = JSON.parse(korisnici)
    }
    else {
        localStorage.setItem("korisnici", JSON.stringify(nizKorisnika))
    }
}

function proveraJedinstvenosti(korime) {
    for (let i = 0; i < nizKorisnika.length; i++) {
        if (nizKorisnika[i].korisnickoIme == korime) return false;
    }
    return true;


}

function prijaviSe() {
    window.location.href = "prodavnica.html"
}