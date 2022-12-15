let z1 = new Audio("./zvuci/pas.wav")
let z2 = new Audio("./zvuci/patka.mp3")
let z3 = new Audio("./zvuci/macka.mp3")
let z4 = new Audio("./zvuci/pile.wav")
let z5 = new Audio("./zvuci/krava.wav")


document.getElementById('z1').addEventListener("mouseover", ()=>{
    z1.play();
})
document.getElementById('z2').addEventListener("mouseover", ()=>{
    z2.play();
})
document.getElementById('z3').addEventListener("mouseover", ()=>{
    z3.play();
})
document.getElementById('z4').addEventListener("mouseover", ()=>{
    z4.play();
})
document.getElementById('z5').addEventListener("mouseover", ()=>{
    z5.play();
})

let stranica = "zivotinje";
let dugme = "pocetna";


document.getElementById('pocetna').addEventListener("click", ()=>{
    document.getElementById(stranica).classList.add("skriveno")
    stranica = "zivotinje";
    document.getElementById('zivotinje').classList.remove("skriveno");

    document.getElementById(dugme).classList.remove("trenutno");
    dugme = "pocetna";
    document.getElementById('pocetna').classList.add("trenutno");

})

document.getElementById('autordugme').addEventListener("click", ()=>{
    document.getElementById(stranica).classList.add("skriveno")
    stranica = "autor";
    document.getElementById('autor').classList.remove("skriveno");
    
    document.getElementById(dugme).classList.remove("trenutno");
    dugme = "autordugme";
    document.getElementById("autordugme").classList.add("trenutno");
})

document.getElementById('uputstvodugme').addEventListener("click", ()=>{
    document.getElementById(stranica).classList.add("skriveno")
    stranica = "uputstvo";
    document.getElementById('uputstvo').classList.remove("skriveno");

    document.getElementById(dugme).classList.remove("trenutno");
    dugme = "uputstvodugme";
    document.getElementById('uputstvodugme').classList.add("trenutno");
})