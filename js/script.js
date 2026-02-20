const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const horaDigital = document.getElementById("horaDigital");
const fechaTexto = document.getElementById("fechaTexto");
const diaNumero = document.getElementById("diaNumero");

const botonModo = document.getElementById("botonModo");
const cuerpo = document.getElementById("cuerpo");

function actualizarReloj() {

    const ahora = new Date();

    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const gradosHora = (horas % 12) * 30 + minutos * 0.5;
    const gradosMinuto = minutos * 6;
    const gradosSegundo = segundos * 6;

    hora.style.transform = `translateX(-50%) rotate(${gradosHora}deg)`;
    minuto.style.transform = `translateX(-50%) rotate(${gradosMinuto}deg)`;
    segundo.style.transform = `translateX(-50%) rotate(${gradosSegundo}deg)`;

 
    let formato = horas >= 12 ? "PM" : "AM";
    let horaMostrar = horas % 12 || 12;
    let minutosFormato = minutos.toString().padStart(2, "0");

    horaDigital.textContent = `${horaMostrar}:${minutosFormato} ${formato}`;

    const dias = ["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];
    const meses = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];

    let diaTexto = dias[ahora.getDay()];
    let mesTexto = meses[ahora.getMonth()];
    let numeroDia = ahora.getDate();

    fechaTexto.textContent = `${diaTexto}, ${mesTexto}`;
    diaNumero.textContent = numeroDia;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

botonModo.addEventListener("click", () => {
    cuerpo.classList.toggle("oscuro");

    botonModo.textContent = 
        cuerpo.classList.contains("oscuro") 
        ? "Modo claro" 
        : "Modo oscuro";
});
