f = document.getElementById('form')
w = document.getElementById('wypluwacz')

// f.name.addEventListener('change', e => {
//     if(f.name.value.length > 3) {
//         f.name.style.color = 'white'
//         f.name.style.backgroundColor = 'blue'
//     }
//     else {
//         f.name.style.color = 'white'
//         f.name.style.backgroundColor = 'red'
    
//     }
// })

f.name.addEventListener('change', function(e){ Valid(this) })
f.surname.addEventListener('change', function(e){ Valid(this) })
// f.btn.disabled = true
f.shoeSize.addEventListener('click', function() {Valid2(this)})

rexN = /^[0-9]+$/ //sprawdza numery
rexT = /^[a-zA-Z]+$/ // sprawdza tekst
rexD = /^\d{4}-\d{2}-\d{2}$ / // sprawdza date
rexC = /^#[0-9a-fA-f]{6}$/ // sprawdza kolor

rexN.test(f.name.value)

function Valid(v) {
    if(v.value.length > 3) {
        v.style.color = '#fff'
        v.style.backgroundColor = 'blue'
    }
    else {
        v.style.color = '#fff'
        v.style.backgroundColor = 'red'
    }
}

function Valid2(v) {
    if(v.value.length >= 1) {
        v.style.color = '#fff'
        v.style.backgroundColor = 'blue'
    }
    else {
        v.style.color = '#fff'
        v.style.backgroundColor = 'red'
    }
}

function funkcja() {
    dane = f.name.name + ": "
    dane += f.name.value + "<br>"
    w.innerHTML = dane
}

w.addEventListener('click', funkcja)
// osoba = {
//     imie: "Piotrek",
//     nazwisko: "Kowalski",
//     wiek: 20,
//     zestawDane: function() {
//         return `Imie: ${this.imie} <br> Nazwisko: ${this.nazwisko}`
//     }
// }
// console.log(osoba);
// w.innerHTML = osoba.zestawDane()