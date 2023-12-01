function funkcja() {
    name = document.getElementById('name').value
    surname = document.getElementById('surname').value
    dob = document.getElementById('dob').value
    gender = document.getElementById('gender').value
    children = document.getElementById('children').value
    shoeSize = document.getElementById('shoe_size').value
    level = document.getElementById('level').value
    color = document.getElementById('color').value
    wypluwacz = document.getElementById('wypluwacz')



    let error
    error = {name:false, surname:false}
    rexNumber = /^[0-9]+$/.test(name)
    rexTekst = /^[a-zA-Z]+$/.test(name)
    rexTekstNumber = /^[a-z0-9]+$/.test(name)
    name = rexTekst

    if(name.length <= 3 || name == rexNumber) {
        error["name"] = true
        // wypluwacz.innerHTML = error
    }
    if(surname.length <= 3) {
        error["surname"] = true
    }
    // console.log("rexNumber " + rexNumber);
    // console.log("rexTekst " + rexTekst);
    // console.log("rexTekstNumber " + rexTekstNumber);
    console.log(error);

}