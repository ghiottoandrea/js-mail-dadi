/*
//Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//Creo una array di email registrate
const email = [`andrea@gmail.com`, `franco@gmail.com`, `gianni@gmail.com`, `francesco@gmail.com`, `giuglia@gmail.com`, `michela@gmail.com`]

//Faccio inserire la email dell'utente
let userEmail = prompt("Inserisci la tua Email per verificare se sei registarto")
console.log(userEmail);
let registred = false

//Verifico tramite ciclo se è presente nella array
for (let i = 0; i < email.length; i++) {

    if (userEmail === email[i]) {
        registred = true
        
    }
}
console.log(registred);

//Rispondo tramite un IF in base a registred = true o false
if (registred === true){
    alert("La tua mail è registrata")
}else if (registred === false){
    alert("Non sei registrato")
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

let results = document.getElementById("dice_game")

//Genero un numero casuale per me e il pc
let me = Math.floor(Math.random()* (6 - 1 + 1))+ 1;
console.log("Il mio numero è: "+me);
let pc = Math.floor(Math.random()* (6 - 1 + 1))+ 1;
console.log("Il suo numero è: "+pc)

//Confronto il mio numero con quello del pc
if (me > pc){
    console.log(`I win`);
    results = "I WIN"
    dice_game.innerHTML=results

}else if(pc > me){
    console.log(`PC win`);
    results = "PC WIN"
    dice_game.innerHTML=results
}else{
    console.log(`Draw`);
    results = "DRAW"
    dice_game.innerHTML=results
}


//Programma per simulare 100 giocate di dadi
let mycounter = 0
let pccounter = 0
let drawcounter = 0

//Per ogni volta genero un numero casuale e confronto 
for (let i = 0; i < 100; i++) {
    let me = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    //console.log("Il mio numero è: " + me);
    let pc = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    //console.log("Il suo numero è: " + pc)

    if (me > pc) {
        // console.log(`I win`);
        mycounter = (mycounter + 1)

    } else if (pc > me) {
        //console.log(`PC win`);
        pccounter = (pccounter + 1)

    } else {
        //console.log(`Draw`);
        drawcounter = (drawcounter + 1)
    }
}

console.log("Ho vinto " + mycounter + " volte");
console.log("Ho perso " + pccounter + " volte");
console.log("Ho pareggiato " + drawcounter + " volte");
*/

//Mail Chiedi all’utente di inserire nel input la sua email, controlla che sia nella lista di chi può accedere,
//Stampa un messaggio appropriato sull’esito del controllo.

let verify;
let registred = false

//Creo una array di email registrate
const email = [`andrea@gmail.com`, `franco@gmail.com`, `gianni@gmail.com`, `francesco@gmail.com`, `giuglia@gmail.com`, `michela@gmail.com`]



//Faccio inserire la email dell'utente con un eventlistener
btn.addEventListener(`click`, function () {
    let userEmail = document.getElementById("email").value
    console.log(userEmail);


    //Verifico tramite ciclo se è presente nella array
    for (let i = 0; i < email.length; i++) {

        if (userEmail === email[i]) {
            registred = true

        }
    }
    console.log(registred);

    //Rispondo tramite un IF in base a registred = true o false
    if (registred === true) {
        verify = "Sei registrato"
        email_verificated.innerHTML = verify;

    } else if (registred === false) {
        verify = "Non sei registrato"
        email_verificated.innerHTML = verify;
    }
});