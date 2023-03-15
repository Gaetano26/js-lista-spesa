/*
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/

const nomi = [
    'pomodoro',
    'pasta',
    'carne',
    'cipolla',
    'panza e presenza'
];

const lista = document.querySelector('ul');

let i= 0;

let li = '';

while ( i < nomi.length) {
   
    li += `
     <li>
        ${nomi[i]}"
     </li>
  `;
  i++;
 
 
}
 
lista.innerHTML += li;


