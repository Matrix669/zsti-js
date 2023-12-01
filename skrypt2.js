function funkcja() {
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    dob = document.getElementById("dob").value;
    gender = document.getElementById("gender").value;
    children = document.getElementById("children").value;
    shoe_size = document.getElementById("shoe_size").value;
    color = document.getElementById("color").value;
    level = document.getElementById("level").value;

    children = children * 1; 
    shoe_size = shoe_size *1;
    
    console.log("color : " +  color.length);
    blad = "<h3>konunikat</h3>";
    if(name.length < 3) { blad += "błąd tu jest straszny imienia<br>";}
    if(surname.length < 3) { blad += "błąd tu jest straszny nazwisko<br>";}
    if(dob.length < 10) { blad += "błąd tu jest straszny daty<br>";}
    if(gender.length == 0){ blad += "błąd tu jest straszny płci<br>";}
    if(children < 0 ){ blad += "błąd tu jest straszny dzieci<br>";}
    if(shoe_size < 33 || shoe_size > 80 ){ blad += "błąd tu jest straszny butu<br>";}
    if(color.length == 0) {  blad += "błąd tu jest straszny kolor<br>";}

    rexNumber = /^[0-9]+$/.test(name);
    rexTekst = /^[a-zA-Z]+$/.test(name);

    console.log("rexNumber " + rexNumber);
    console.log("rexTekst " + rexTekst);

        document.getElementById("wypluwacz").innerHTML = blad;
    
}
