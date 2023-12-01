f = document.getElementById("form");
w = document.getElementById("wypluwacz");
t = document.getElementById('tabela')
// konfiguracja 
const ok = "blue";
const error  = "red";
const color = "#fff";

b = "<br>";
rexN =  /^[0-9]+$/;
rexT =  /^[a-zA-Z]+$/;
rexD =  /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
w.innerHTML+= b;

// f.send.disabled = true;
// f.name.addEventListener("change", function (e) {  w.innerHTML+= this.name +": "+validate(this,3)+b; });
// f.surname.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,3)+b; });
// f.dob.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"D")+b; });
// f.children.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"N")+b; });
// f.shoe_size.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"N")+b; });
// f.level.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"N")+b; });

// function validate(v,n,type="T") {

//     if(v.value.length > n ) {
//         // typ tekst  
//         if(type == "T" && rexT.test(v.value)) {
//             v.style.color=color; 
//             v.style.backgroundColor=ok;
//             f.send.disabled = false;
//             return v.value;
//         } else {
//             v.style.color=color; 
//             v.style.backgroundColor=error;
//             f.send.disabled = true;
//         }
//         // typ liczba
//         if(type == "N" && rexN.test(v.value)) {
//             v.style.color=color;
//             v.style.backgroundColor=ok;
//             f.send.disabled = false;
//             return v.value*1;
//         } else {
//             v.style.color=color; 
//             v.style.backgroundColor=error;
//             f.send.disabled = true;
//         }
//         // typ data 
//         if(type == "D" && rexD.test(v.value)) {
//             v.style.color=color; 
//             v.style.backgroundColor=ok;
//             f.send.disabled = false;
//             return v.value;
//         } else {
//             v.style.color=color; 
//             v.style.backgroundColor=error;
//             f.send.disabled = true;
//         }    
//     }       
// }
f.name.addEventListener('change', function(e) { walid(this)})
f.dob.addEventListener('change', function(e) { Data(this)})
f.surname.addEventListener('change', function(e) { walid(this)})

function Data(d) {
    dzis = new Date()
    datka = new Date(d.value)
    nowaData = datka - dzis
    // w.innerHTML += d.value
    // w.innerHTML += b+typeof(d.value)
    // w.innerHTML += dzis

    nowaDataH = Math.floor( nowaData / (60*60*1000))+1;
    nowaDataD = Math.floor( nowaData / (24*60*60*1000))+1;
    nowaDataM = Math.floor( nowaData / (24*60*60*1000*30.44))+1
    nowaDataR = Math.floor( nowaData / (24*60*60*1000*365.25))
    // nowaDataM = datka.getMonth() - dzis.getMonth() + ( 12*(datka.getFullYear() - dzis.getFullYear() ))
    // w.innerHTML = b+ nowaDataM
    // datkaW = `H: ${nowaDataH} D: ${nowaDataD} M: ${nowaDataM} R: ${nowaDataR}`
    datkaW = "H:" + nowaDataH + "D:" + nowaDataD + "M:" + nowaDataM + 'R:' + nowaDataR

    wiersz = t.insertRow(-1)
    w1 = wiersz.insertCell(0)
    w1.innerHTML = d.name

    w2= t.insertCell(1)
    w2.innerHTML = d.name

    w3 = wiersz.insertCell(0)
    w3.innerHTML = `wiek ${nowaDataR*-1}` 
}

function walid(v) {
    if(v.value.length > 3) {
        w.innerHTML += v.name = " "
        w.innerHTML += v.value + b
        v.style.color='#fff'
        v.style.backgroundColor='blue'
    }
    else {
        v.style.color='#fff'
        v.style.backgroundColor='red'
    }
}
