// const stala = 'Maks'
// console.log(stala);
// stala = "Kopytko"
// console.log(stala);

// zmienna = 'kopytko1'
// console.log(zmienna);
// zmienna = 'kopytko2'
// console.log(zmienna);

// function funkcja() {
//     let zmienna = 'kopytko3'
//     console.log("funkcja");
//     console.log(zmienna);
// }

// funkcja()


// a = 2 
// b = 3
// c = '4'
// d = c+b

// console.log(typeof(a+c))
// console.log(a+c);
// ===========================================
/*
document.body.innerHTML += "<input type='text' id='input'>"
document.body.innerHTML += "<input type='submit' id='btn_Submit'>"
const text = document.querySelector('#text')
const btnSubmit = document.querySelector('#btn_Submit')
const input = document.querySelector('#input')

const fun1 = () => {
    text.innerHTML = input.value
    
}

btnSubmit.addEventListener('click', fun1)

const test = document.querySelector('.test')
test.innerHTML = "przykładowy tekst <p>tekst</p>"
*/
/*
document.body.innerHTML += "<input type='text' id='input'>"
document.body.innerHTML += "<button onclick='fun1()'>Klik</button>"
document.body.innerHTML += "<p id='text'>Klik</p>"
const text = document.querySelector('#text')
const btnSubmit = document.querySelector('#btn_Submit')
const input = document.querySelector('#input')

function fun1()  {
    text.innerHTML = input.value
    
}
*/

// 1) zmienne i jaki będzie wynik
// 2) znaleźć błędy w kodzie
// 3) napisać prostą rzecz 


// console.log(1===1);

// choinka

let wys = 12
document.body.style = "text-align: center;"
g = "*"

for (i = 1; i <= wys; i++) {
    if(i == 1) {
        ga = g;
    }
    else {
        ga += g
    }
    if (i == 6) {
        ga[i] += "O"
    }
    document.body.innerHTML += ga + "<br>"
}