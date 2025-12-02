console.log("online");

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let numA = Math.floor(Math.random() * 1000000);
// let numB = Math.floor(Math.random() * 1000000);

// if (numA > numB) {
//   console.log(numA + " è più grande di " + numB);
// } else if (numA === numB) {
//   console.log(numA + " è uguale a " + numB);
// } else {
//   console.log(numB + " è più grande di " + numA);
// }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let numinserito = Math.floor(
//   prompt("Inserisci un numero intero e scopri se hai vinto. Se inserirai un numero con la virgola verrà approssimato all'intero più piccolo")
// );

// console.log(numinserito);

// if (isNaN(numinserito)) {
//   window.alert("non hai inserito un numero oppure hai usato un formato non corretto, ricarica la pagina per ripartire");
// } else if (numinserito === 5) {
//   window.alert("hai vinto!");
// } else {
//   window.alert("hai perso :-(");
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let inserimento = 0;

// console.log(inserimento);

// inserimento = prompt(
//   "Inserisci un numero intero e scopri se è divisibile per 5. Se inserirai un numero con la virgola verrà approssimato all'intero più piccolo. Se premi ok senza inserire nulla sarà considerato 0"
// );

// console.log(inserimento);

// if (inserimento !== null) {
//   let numinserito = Math.floor(inserimento);
//   if (isNaN(numinserito)) {
//     window.alert("non hai inserito un numero oppure hai usato un formato non corretto, ricarica la pagina per ripartire");
//   } else if (numinserito % 5 === 0) {
//     window.alert("è divisibile per 5");
//   } else {
//     window.alert("non è divisibile per 5");
//   }
// } else {
//   window.alert("non hai inserito un numero, ricarica la pagina per ripartire");
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let numA = Math.floor(Math.random() * 1000000);
// let numB = Math.floor(Math.random() * 1000000);

// console.log("i numeri sono: ", numA, " e ", numB);

// if (numA === 8 || numB === 8 || numA + numB === 8 || numA - numB === 8) {
//   console.log("condizione verificata");
// } else {
//   console.log("condizione non verificata");
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = Math.floor(Math.random() * 10000) / 100;
// console.log("totale parziale ", totalShoppingCart);

// if (totalShoppingCart >= 50) {
//   console.log("il totale è ", totalShoppingCart, " fiorini");
// } else {
//   console.log("il totale è ", totalShoppingCart + 10, " fiorini");
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = Math.floor(Math.random() * 10000) / 100;
// console.log("totale parziale ", totalShoppingCart, " fiorini");

// let totalShoppingCartWithDiscount = totalShoppingCart * 0.8;

// console.log("totale parziale con lo sconto BF applicato ", totalShoppingCartWithDiscount.toFixed(2), " fiorini");

// if (totalShoppingCartWithDiscount >= 50) {
//   console.log("il totale è ", totalShoppingCart.toFixed(2), " fiorini");
// } else {
//   console.log("il totale è ", (totalShoppingCart + 10).toFixed(2), " fiorini");
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let a = Math.floor(Math.random() * 1000000);
// let b = Math.floor(Math.random() * 1000000);
// let c = Math.floor(Math.random() * 1000000);

// console.log("i numeri sono: ", a, ", ", b, ", ", c);

// let numMagg = null;
// let numMed = null;
// let numMin = null;

// if (a >= b && a >= c) {
//   numMagg = a;
// } else if (b >= c && b >= a) {
//   numMagg = b;
// } else if ((c >= a) & (c >= b)) {
//   numMagg = c;
// }

// if (numMagg === a) {
//   if (b >= c) {
//     numMed = b;
//     numMin = c;
//   } else {
//     numMed = c;
//     numMin = b;
//   }
// } else if (numMagg === b) {
//   if (a >= c) {
//     numMed = a;
//     numMin = c;
//   } else {
//     numMed = c;
//     numMin = a;
//   }
// } else {
//   if (a >= b) {
//     numMed = a;
//     numMin = b;
//   } else {
//     numMed = b;
//     numMin = a;
//   }
// }

// console.log("numeri in ordine", numMagg, " - ", numMed, " - ", numMin);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let inserimento = prompt("Inserisci un numero");
// console.log(inserimento);

// if (isNaN(inserimento)) {
//   console.log("non è un numero o il formato non è corretto");
// } else {
//   console.log("è un numero");
// }

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = Math.floor(Math.random() * 1000000);

if (num % 2 === 0) {
  console.log(num + " è pari");
} else {
  console.log(num + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
