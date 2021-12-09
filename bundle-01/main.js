/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//Risposte
/*
1) Il codice stampa in console, tramite un ciclo for, il valore della variabile i, che viene incrementata ad ogni iterazione del ciclo;
2) Non sono presenti errori di sintassi;
3) Sì, sono presenti errori logici: la variabile i viene inizializzata a 0, ma viene detto al ciclo di iterare finché la stessa variabile è maggiore di 5.

poiché funzioni, secondo questa logica, basta invertire il maggiore in minore: 
for (let i = 0; i < 5; i++) {
  console.log(i);
}
*/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

//Risposte
/*
1) Il codice rappresenta una funzione che aggiunge 5 ad un numero passato come parametro (num), solo se lo stesso numero è pari. Se è dispari, la funzione restituisce num senza variazioni.
2) Sì, sono presenti errori di sintassi: il controllo nell'if avviene con un singolo '=', che in js è un operatore di assegnazione: per effettuare un controllo ne servono due (==) o tre (===) se vogliamo verificare l'identità in valore e tipo.
3) No, non ci sono errori di logica.

function addIfEven(num){
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}
*/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
//Risposte
/*
1) È una funzione che svolge lo stesso compito del primo esercizio: un ciclo for itera 5 volte e stampa in console il valore di i, da 0 a 5
2) Sì, ci sono errori di sintassi: le condizioni all'interno della guardia del ciclo for devono essesere separate con dei ';', non con ','
3) No, non ci sono errori di logica

function loopToFive() {
  for (let i=0; i<5; i++) {
    console.log(i);
  }
}
*/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//Risposte
/*
1) la funzione, dato un array contenente i numeri da 1 a 8, controlla e restituisce solo i numeri pari inserendoli in un altro array
2), 3) sì, ci sono sia errori di logica che di sintassi. ( come ';' in posti sbagliati, '=' singoli nei controlli per la sintassi e return in un for, utilizzo improprio di array e impostazione sbagliata della guardia del ciclo per la logica)

function displayEvenNumbers(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i=0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers())
*/