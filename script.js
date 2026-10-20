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

const lista = document.getElementById("lista-task");
const contatore = document.getElementById("contatore");
const aggiunta = document.getElementById("aggiunta");
const nuovo = document.getElementById("nuovo-task");
const bottone = document.getElementById("bottone");

const tasks = [];

function aggiungiTask (testo, priorita) {
  const li = document.createElement('li');

  if (priorita === 'alta') {
    li.classList.add('priorita-alta')
  }  else if (priorita === 'media') {
    li.classList.add('priorita-media')
  }  else if (priorita === 'bassa') {
    li.classList.add('priorita-bassa')
  }

  const idk = document.createElement('span');
  idk.textContent = testo;

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

  li.appendChild(idk);
  li.appendChild(badge);
  li.appendChild(divData);

  lista.appendChild(li);

  contatore.textContent = lista.children.length
}

function evidenzia(indice){
  const evidenziato = lista.children;
  if (evidenziato[indice]) evidenziato[indice].classList.add('glow')
};

function contaPerPriorita() {
  return {
    alta: lista.querySelectorAll(".priorita-alta").length,
    media: lista.querySelectorAll(".priorita-media").length,
    bassa: lista.querySelectorAll(".priorita-bassa").length,
  };
}

aggiungiTask("Pagare le bollette", "alta");
aggiungiTask("Studiare JavaScript", "media");
aggiungiTask("Comprare il pane", "bassa");
aggiungiTask("Chiamare il dentista", "alta");
aggiungiTask("Riposarsi", "bassa");

evidenzia(1);
console.log(contaPerPriorita());