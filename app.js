//Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.



// BOTTONE CALCOLA

// id bottone e funzione al click per attivare la funzione del cacolo biglietto
const button = document.getElementById('buttonCalc');
button.addEventListener('click', calcoloBiglietto);


// creare una function

function calcoloBiglietto (){
// prendere i dati da input

let km = document.getElementById('userDistance').value;
let age = document.getElementById('userAge').value;

// salvo il nome del passeggero
let passeggero = document.getElementById('user').value;

console.log(passeggero);

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

// stampa dei risultati

document.getElementById('nomePasseggero').innerHTML = `<h4>Nome passeggero: ${passeggero}</h4>`;
document.getElementById('prezzoBiglietto').innerHTML = `<h4>Prezzo del biglietto: € ${priceTicket}</h4>`;

// stampa i randomici per ticket e carrozza
document.getElementById('carrozza').innerHTML = `<h4>Numero carrozza: ${numeroCarrozza}</h4>`;
document.getElementById('nTicket').innerHTML = `<h4>Seriale Ticket: ${numeroTicket}</h4>`;


// rendere visibile il container coi risultati

const containerTicket = document.getElementById('containerTicket');
containerTicket.classList.remove('d-none'); // Rimuove la classe d-none
containerTicket.classList.add('d-block');   // Aggiunge la classe d-block
}


// funzione per generare numero random carrozza

function randomCarrozza() {
    return Math.floor(Math.random() * 12) + 1;
  }
  
  let numeroCarrozza = randomCarrozza();
  


// funzione per generare numero seriale ticket
function randomTicket() {
    return Math.floor(Math.random() * 1000) + 1;
  }
  
  let numeroTicket = randomTicket();
 





// BOTTONE ANNULLA

document.getElementById('annulla').addEventListener('click', function() {
document.getElementById('ticketForm').reset();

// ri nasconde il container
 const containerTicket= document.getElementById('containerTicket');
 containerTicket.classList.remove('d-block'); 
 containerTicket.classList.add('d-none'); 

});


