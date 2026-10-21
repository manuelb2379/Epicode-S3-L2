/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/


const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");
const aggiunta = document.querySelector(".aggiunta");
const nuovo = document.querySelector("#nuovo-task");
const bottone = document.querySelector("#bottone");

const myTask = [
  {
    nome: "Pagare le bollette",
    priorita: "alta",
    data: new Date(),
  },
  {
    nome: "Studiare JavaScript",
    priorita: "media",
    data: new Date(),
  },
  {
    nome: "Comprare il pane",
    priorita: "bassa",
    data: new Date(),

  },
  {
    nome: "Chiamare il dentista",
    priorita: "alta",
    data: new Date(),
  },
  {
    nome: "Riposarsi",
    priorita: "bassa",
    data: new Date(),
  },
  {
    nome: "Aperitivo",
    priorita: "alta",
    data: new Date(),
  },
  {
    nome: "Spiegazione",
    priorita: "media",
    data: new Date(),
  }
];


/*CORREZIONE DI DARIO

FACENDO COSI MI ELIMINO L'IF PERCHÈ RIPORTO TUTTO DIRETTAMENTE
*/


function aggiungiTask() {

  myTask.forEach((task) => {
    const newLi = document.createElement('li');
    newLi.classList.add(`priorita-${task.priorita}`); 

    const text = document.createElement('span');
    text.textContent = task.nome;
    newLi.appendChild(text); 

    const badge = document.createElement('span');
    badge.classList.add('badge');
    badge.textContent = task.priorita.toUpperCase();
    newLi.appendChild(badge);

    const taskDate = document.createElement('span');
    taskDate.classList.add('data', 'divData');
    taskDate.textContent = task.data.toLocaleString("it-IT") + " ";

    const elimina = document.createElement('button');
    elimina.textContent = 'Elimina';
    
    taskDate.appendChild(elimina);
    newLi.appendChild(taskDate);

    lista.appendChild(newLi);
  }); // Il forEach ora racchiude tutto la creazione dell'elemento
} 

function aggiornaContatore() {
  if (contatore) {
    contatore.textContent = myTask.length;
  }
}

// Chiamata iniziale per mostrare i task all'avvio della pagina
aggiungiTask();
aggiornaContatore()




/*

ABBOZZO DI LISTA DA SEGUIRE PER LA CREAZIONE

1)Riportare classi e id in js class= aggiunta / id = nuovo-task / bottone-aggiungi / id = lista-task / id = contatore e dargli delle const
2) array vuoto (punto eliminato) 
3) create element (“li”)
4) if con priorità === alta
li.classList.add (“priorità-alta”)
E COSI VIA PER GLI ALTRI 2

5)const per createElement (“span”) -> per il testo
6)const per createElement (“span”) -> per il .add(“badge”)->contenuto del badge alto medio o basso
7)const per createElement (“div data”)-> add(“div data”)
-span per la data con add (“data ”) ->contenuto new date .toLocaleString(“it-IT”)
- const per createElement (“button”) -> content elimina

8)li.appendchild nome badge e div data
Divdata.appendchild data e bottone
Lista-task.appendchild li
9)Contatore.text content = lista-task.length
10) funzione contaPerPriorita(){
alta: lista.querySelectorAll(".priorita-alta").length, 
media: lista.querySelectorAll(".priorita-media").length, 
bassa: lista.querySelectorAll(".priorita-bassa").length, };
}
11) Task con valori fissi 
12)  Evidenziazione e controllo 

*/
/*

function aggiungiTask(testo, priorita) {
  const li = document.createElement('li');

  if (priorita === 'alta') {
    li.classList.add('priorita-alta')
  } else if (priorita === 'media') {
    li.classList.add('priorita-media')
  } else if (priorita === 'bassa') {
    li.classList.add('priorita-bassa')
  }

  const text = document.createElement('span');
  text.textContent = testo;

  const badge = document.createElement('span');
  badge.classList.add('badge');
  badge.textContent = priorita;

  const divData = document.createElement('div');
  divData.classList.add('divData');

  const data = document.createElement('span');
  data.classList.add('data');
  data.textContent = new Date().toLocaleString("it-IT");

  const bottone = document.createElement('button');
  bottone.textContent = 'Elimina';

  divData.appendChild(data);
  divData.appendChild(bottone);

  li.appendChild(text);
  li.appendChild(badge);
  li.appendChild(divData);

  lista.appendChild(li);

  contatore.textContent = lista.children.length
}

function evidenzia(indice) {
  const evidenziato = lista.children;
  if (evidenziato[indice]) evidenziato[indice].classList.add('evidenziato')
};

function contaPerPriorita() {
  return {
    alta: lista.querySelectorAll(".priorita-alta").length,
    media: lista.querySelectorAll(".priorita-media").length,
    bassa: lista.querySelectorAll(".priorita-bassa").length,
  };
}

aggiungiTask("Fare la spesa", "alta");
aggiungiTask("Studiare JavaScript", "alta");
aggiungiTask("Comprare il pane", "bassa");
aggiungiTask("Riposarsi", "media");

evidenzia(2);
console.log(contaPerPriorita());

*/
