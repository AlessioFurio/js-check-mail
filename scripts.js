
// Esercitazione 1: Check lista email
// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)



// dichiarazione array
var array_mail = ['pippodisney@gmail.com', 'plutodisney@gmail.com', 'topolinodisney@gmail.com', 'paperinodisney@gmail.com', 'minniedisney@gmail.com'];
console.log('Il tuo array contiene: ' + array_mail.length + ' elementi');

var isFound = false;

// chiedere indirizzo mail all' utente
var mail_utente = prompt('Qual\'è il tuo indirizzo mail?');
console.log('Il tuo indirizzo mail è: ' + mail_utente);

// verifico se mail_utente è presente nell' array_mail

for (var i = 0; i < array_mail.length; i++) {
    if (mail_utente == array_mail[i]) {

        //dichiarazione variabile booleana x memorizzare che la mail è stata trovata
        var isFound = true;
    }
}

if (isFound == true){
    console.log('trovata');
}
else {
    console.log('non trovata');
}
