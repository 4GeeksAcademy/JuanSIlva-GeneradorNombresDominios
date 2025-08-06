import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon',];
let extensions = ['.com', '.org', '.net', '.io', '.info', '.us'];

//Código anterior (comentado):

//for (let i = 0; i < pronoun.length; i++) {

//for (let j = 0; j < adj.length; j++) {

//for (let k = 0; k < noun.length; k++) {

//for (i = 0; i < pronoun.length; i++) {

//for (j = 0; j < adj.length; j++) {

//for (k = 0; k < noun.length; k++) {
//console.log(pronoun[i] + adj[j] + noun[k] + '.com');
//console.log(pronoun[i] + adj[j] + noun[k] + '.org');
//console.log(pronoun[i] + adj[j] + noun[k] + '.net');
//console.log(pronoun[i] + adj[j] + noun[k] + '.io');
//console.log(pronoun[i] + adj[j] + noun[k] + '.info');
//console.log(pronoun[i] + adj[j] + noun[k] + '.us');

//}
//}
//}
//}
//}
//}  


// Código corregido:

// 1.Se eliminó las líneas en blanco de los primeros dos "for"

// 2.Se eliminaron los ultimos tres "for" ya que no eran necesarios, 
//    porque se llegaba al mismo resultado.

// 3.Los "console.log" que mostraban las multiples extensiones 
//    se sustituyeron por un "for" que itera e imprime en pantalla
//    las extensiones de un nuevo array: extensions


for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let numeroExt = 0; numeroExt < extensions.length; numeroExt++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extensions[numeroExt]);
      }
    }
  }
}
