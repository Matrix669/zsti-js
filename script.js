/*console.log("Hello world!");

a = '2'
//b = "ala ma kota"
b = ['a', 'l', 'a', '', 'm', 'a']
c = [1,2,3,4,5,6]
console.log(b[0]+b[4]+b[0]+b[3]);
*/
// const nameInput = document.querySelector('#name')
const imie = document.getElementById('name').value
const nazwisko = document.getElementById('surname').value
const dataUrodzenia = document.getElementById('dob').value
const plec = document.getElementById('gender').value
const iloscDzieci = document.getElementById('children').value
const rozmiarButa = document.getElementById('shoe_size').value
const poziomWPokemonGo = document.getElementById('level').value
const wyborKoloru = document.getElementById('color').value



const funkcja = () => {
    dane1 = ['imię', "nazwisko", 'data urodzenia', 'płeć', 'ilość dzieci', 'Rozmiar buta',
        'Poziom w Pokemon Go', 'Wybór koloru']
    dane2 = [imie, nazwisko, dataUrodzenia, plec, iloscDzieci, rozmiarButa,
        poziomWPokemonGo, wyborKoloru]

        if(imie.length <=3) {
            error = true
        } else 
        {
            error = false
        }
        if(error) {
            document.getElementById('wypluwacz').innerHTML = 'Błąd!'
        }
    for (let i = 0; i < dane1.length; i++) {
        console.log(`${dane1[i]}: ${dane2[i]}`);
    }
    console.log('==============================');
    // for (let i = 0; i < dane2.length; i++) {
    //     console.log(dane2[i]);
    // }

}
console.log(`Imie: ${imie}`);