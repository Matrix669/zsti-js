function funkcja() {
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    dob = document.getElementById("dob").value;
    gender = document.getElementById("gender").value;
    children = document.getElementById("children").value;
    shoe_size = document.getElementById("shoe_size").value;
    color = document.getElementById("color").value;
    var error;
    error = { name:false,surname:false };
    rexNumber = /^[0-9]+$/.test(name);
    rexTekst = /^[a-zA-Z]+$/.test(name);
    rexTekstNumber = /^[a-z0-9]+$/.test(name);


    if(name.length <= 3 ) { error["name"] =  true; }
    if(surname.length <= 3) {  error["surname"] =  true;}

    

console.log("rexNumber " + rexNumber);
console.log("rexTekst " + rexTekst);
console.log("rexTekstNumber " + rexTekstNumber);
console.log(error);

}
