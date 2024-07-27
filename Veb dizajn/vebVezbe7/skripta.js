let korpa = [];

function pokupiInformacije() {
    if (localStorage.getItem("korpa") == null) {
        localStorage.setItem("korpa", korpa); // inicijalizujes praznim nizom
    }
    else {
        // artikal1, artikal2, artikal3... tako cemo da cuvamo
        // a hocemo da izvucemo [artikal1, artikal2, artikal3] - .split resava
        let tekstKorpe = localStorage.getItem('korpa');
        korpa = tekstKorpe.split(",");

    }    

}

function popuniStranicu() {
    let artikli = document.getElementById("artikli");
    for (let i = 1; i <= 10; i++) {
        let slika = document.createElement("img");
        slika.src = "images/artikal_" + i + ".jpg";
        slika.id = "artikal_" + i;
        if (i <= 3) slika.className = "nike";
        else if (i <= 5) slika.className = "adidas";
        else if (i <= 8) slika.className = "puma";
        else if (i <= 10) slika.className = "skechers"
        artikli.appendChild(slika); // dodaje sliku po sliku u div        
    }    
}

function prikaziKorpu() {
    alert(localStorage.getItem("korpa"));
}

function isprazniKorpu() {
    //localStorage.removeItem("korpa"); - NE KORISTI removeItem u ovoj situaciji, jer kad bi nakon removeItem neko kliknuo na prikaz
    // korpe alert(localStorage.getItem("korpa")) bi ti dao null a ne prazan string, mi zelimo prazan string zato samo setItem na ""
    // za kljuc "korpa"
    korpa = []; // Ne zaboravi i sam NAS LOKALNI NIZ DA ISPRAZNIS!
    localStorage.setItem("korpa", "");
}

function f() {
    alert("Mouse over test");
}

function filtrirajPatike() {
    let nizBrendovaZaSakrivanje = [];
    let poljaZaStikliranje = document.querySelectorAll("input[type = 'checkbox']"); // selektori su isti kao u CSSu
    poljaZaStikliranje.forEach(element => {
        if (!element.checked) nizBrendovaZaSakrivanje.push(element.id); // id ti je nike/adidas..
    });

    let nizSlika = document.querySelectorAll("img"); // moglo je i getElementsByTag
    nizSlika.forEach(slika => {
        if (nizBrendovaZaSakrivanje.includes(slika.className)) // funkcija includes, da li se nalazi u tom nizu nike, adidas..
            {
            slika.style.display = "none";
        }
        else{
            slika.style.display = "inline-block"; // ovo je da sliku koja je bila sakrivena vratis nakon sto si kliknuo filtriraj
            // drugi put i cekirao checkbox koji si prethodni put odcekirao, inline-block je neki difoltan prokaz za sliku
        }
    });
}

function dodajDogadjaje() {
    document.getElementById("prikaz").addEventListener("click", prikaziKorpu);
    document.getElementById("isprazni").addEventListener("click", isprazniKorpu);
    document.getElementById("filter").addEventListener("click", filtrirajPatike);

    //document.getElementById("isprazni").addEventListener("mouseover", f);
    let nizSlika = document.getElementsByTagName("img"); // sve cvorove sa tagom img
    for (let i = 0; i < nizSlika.length; i++) {
        nizSlika[i].addEventListener("click", function() {
          klikNaSliku(nizSlika[i].id); // id je zapravo ime slike
        }); // (ImeSamogDogadjaja,funckijaKojaSeIzvrsava), function() nam sluzi da bi mogli da prosledimo parametre, function je anonimna funkcija
        // koja moze da pristupi svemu sto i okruzujuca funkcija u kojoj je pozvana tj. imaju istu doseg
    }    
}



function klikNaSliku(imeSlike) {
    korpa.push(imeSlike);
    localStorage.setItem("korpa", korpa);
}



function inicijalizujProdavnicu() {
    pokupiInformacije(); // povuci iz skladista sta treba
    popuniStranicu();
    dodajDogadjaje();


}