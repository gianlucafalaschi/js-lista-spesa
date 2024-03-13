/* // Data una lista della spesa:

Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while */

const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// selezionare elemento lista ul in html
let ulList = document.querySelector('ul.list');
//console.log(ulList);

//inizializzo la variabile i con valore 0
let i = 0;
// CON CICLO WHILE
//per ogni elemento dell'array, fino a che la i < lunghezza array
while(i < list.length) {
    // assegno variabile a list[i]
    let thisElement = list[i];
    // stampare in html l'elemento
    ulList.innerHTML += `<li>${thisElement}</li>`
    // incremento la i di 1
    i++
    
}
 


//VERSIONE CON CICLO FOR

/* 
// per ogni elemento dell'array
for( let i = 0; i < list.length; i++) {
    let thisElement = list[i];
    //console.log(thisElement);
     //stampare in html l'elemento
     ulList.innerHTML += `<li>${thisElement}</li>`
}

    */