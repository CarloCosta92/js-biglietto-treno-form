//Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// id bottone e funzione al click per attivare la funzione del cacolo biglietto
const button = document.getElementById('buttonCalc');
button.addEventListener('click', calcoloBiglietto);


// creare una function

function calcoloBiglietto (){
// prendere i dati da input

let km = document.getElementById('userDistance').value;
let age = document.getElementById('userAge').value;

// convertire input in numero

km = parseFloat(km);
age = parseInt(age);

console.log(km)

//calcolo prezzo base

const price= parseFloat(0.21);   

let priceTicket = price * km;

//definizione sconti

const discountYoung = 0.80;
const discountOld = 0.60;

//condizione per calcolo

if (age < 18) {
    priceTicket= priceTicket * discountYoung;
   
} else if(age > 65){
   priceTicket = priceTicket * discountOld;
}

// riduzione cifre del biglietto ad al massimo due decimali

priceTicket = priceTicket.toFixed(2);

console.log("Il prezzo del biglietto ferroviario ammonta a " + priceTicket +" €");
}



