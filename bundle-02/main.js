/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

//Risposte
/*
1) Il codice è una funzione che verifica l'età (myAge) e in base ad essa genera un messaggio
2) Non ci sono errori di sintassi
3) Sì, ci sono errori logici: myAge viene generata all'interno della funzione e sarebbe più opportuno passarla come parametro; sia myAge che message sono costanti e sarebbe più corretto utilizzare let e trattarle come variabili, poiché non hanno un valore fisso: vengono infatti modificate all'interno della funzione; manca il return della funzione. 

*/
function checkAge(myAge) {
  let message = '';
  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = 'Hai più di 18 anni!';
  }
  return message;
}


// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

//Risposte 
/*
1) La funzione controlla la lunghezza dell'array che ha all'interno e stampa in console quanti elementi contiene
2) Sì, ci sono errori di sintassi (length è scritto male)
3) No, non ci sono errori logici
*/

function printColorsNumber() {
   const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

//Risposte 
/*
1) la funzione prende un numero in input, gli aggiunge 12 e stampa il risultato in console
2) Non ci sono errori di sintassi
3) Sì, ci sono errori logici: i dati vengono dichiarati come const e poi modificati. 
*/

function addNumbers() {
    let userNumber = prompt('Inserisci un numero');
    let total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

//Risposte
/*
1) La funzione, dato un array di indirizzi email e un indirizzo preso in input, verifica se quest'ultimo è compreso nell'array e se lo è dà esito positivo, altrimenti negativo
2) Sì, ci sono errori di sintassi: 'true' e 'false' vengono trattati come stringhe e non come valori booleani, mentre poi nei controlli con gli if vengono usati come variabili booleane (com'è giusto che sia)
3) A parte il tipo sbagliato di variabile, se vogliamo considerarlo, non ci sono errori logici.
*/

function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     for (let i = 0; i < addresses.length; i++) {
//      const email = addresses[i];
        
//       if (userEmail.length > 5) {
            
//         if (email === userEmail) {
//         grantAccess = 'true';            
            
//       }
        
//     }

//     if (grantAccess) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccessImproved();

//Risposte 
/*
1) La funzione è una versione migliorata di quella all'esercizio precedente: aggiunge un controllo sulla lunghezza della mail inserita in input e gestisce con un for il controllo che verifica se l'email in input è inclusa nell'array
2) Sì, ci sono errori di sintassi: 'true' viene dichiarato di nuovo come stringa e non come bool;
3) Non ci sono errori logici, ma personalmente userei let al posto di const all'interno del for.
*/
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     let email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = true;            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
  }
}
checkAccessImproved();





























