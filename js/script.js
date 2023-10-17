// Raccolta dei dati
//richiesta del nome
const nameUser = prompt("Scrivi il tuo nome");
//debug nome
console.log(nameUser, typeof nameUser)
//richiesta del cognome
const lastNameUser = prompt("Scrivi il tuo cognome");
//debug cognome
console.log(lastNameUser, typeof lastNameUser)
//richiesta del colore
const colorUser = prompt("Scrivi il tuo colore preferito");
//debug colore
console.log(colorUser, typeof colorUser)

//Logica del programma

//creazione della password
const passwordUser = nameUser + lastNameUser + colorUser;
//debug password
console.log(passwordUser);
//preparazione del risultato aggiungendo il 21
const result = passwordUser + 21;
//debug result
console.log(result);

//Output
document.getElementById("passUser").innerHTML = result;