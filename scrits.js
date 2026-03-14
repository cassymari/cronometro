let segundos = 0;
let intervalo = null;

const tempoEl = document.getElementById('tempo');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function formatarTempo(seg) {
  const horas = String(Math.floor(seg / 3600)).padStart(2, '0');
  const minutos = String(Math.floor((seg % 3600) / 60)).padStart(2, '0');
  const segs = String(seg % 60).padStart(2, '0'); // Renomeado para evitar conflito com escopo global
  return `${horas}:${minutos}:${segs}`; // CORREÇÃO: Usando Template Strings
}

function iniciar() {
  if (intervalo) return;
  intervalo = setInterval(() => {
    segundos++;
    tempoEl.textContent = formatarTempo(segundos);
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  pausar();
  segundos = 0;
  tempoEl.textContent = '00:00:00';
}

function marcarVolta(){

const lista = document.getElementById("voltas")

const li = document.createElement("li")

li.textContent = tempoEl.textContent

lista.appendChild(li)

}

tempoEl.classList.add("rodando")

startBtn.addEventListener('click', iniciar);
pauseBtn.addEventListener('click', pausar);
resetBtn.addEventListener('click', zerar);
