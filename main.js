document.addEventListener("DOMContentLoaded", function() {
    ajustarTamanio();
});

window.addEventListener("resize", function() {
    ajustarTamanio();
});

function ajustarTamanio() {
    var alturaPantalla = window.innerHeight;
    var miElemento = document.getElementById('body');

    miElemento.style.height = (alturaPantalla / 1 -30) + "px";
}

const verFactura = document.getElementById('verFactura');
verFactura.addEventListener('click', (e) => {
    e.preventDefault();
    extraerInformacion();
    sec1.style = 'display: none';
    sec2.style = 'display: flex';
});

function extraerInformacion() {
    var getNombre = document.getElementById('input-nombre').value;
    var setNombre = document.getElementById('input-ingresar-nombre');
    var setNombre2 = document.getElementById('input-ingresar-nombre2');
    var referenciaNumber = document.getElementById('numeroReferencia');
    var amountDebit = document.getElementById('amount-debit');
    var amountCredit = document.getElementById('amount-credit');
    var telefono = document.getElementById('telefono');
    var getTexto = document.getElementById('input-texto').value;

    var cantidadColones = getTexto.match(/\d+\.\d+/);   
    var numeroTelefono = getTexto.match(/\d{8}/);  
    var nombrePersona = getTexto.match(/de\s+(.*?)\s+Referencia/i);
    var numeroReferencia = getTexto.match(/Referencia\s+(\d+)/i);


    referenciaNumber.setAttribute('value', numeroReferencia[1]);
    setNombre.setAttribute('value', getNombre);
    amountDebit.innerHTML = cantidadColones[0] + " " + "₡";

    setNombre2.setAttribute('value', nombrePersona[1]);
    telefono.innerHTML = numeroTelefono[0];
    amountCredit.innerHTML = cantidadColones[0] + " " + "₡";
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarFechaCostaRica();
});

function mostrarFechaCostaRica() {
    var fechaActual = new Date();
    fechaActual.setUTCHours(fechaActual.getUTCHours());

    var opcionesFormato = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
    };

    var fechaFormateada = fechaActual.toLocaleString('es-CR', opcionesFormato);

    var h4FechaCostaRica = document.getElementById("fechaH4");
    h4FechaCostaRica.textContent = " " + fechaFormateada;
}

const exit = document.getElementById('exit');
const sec1 = document.getElementById('sec1');
const sec2 = document.getElementById('sec2');

exit.addEventListener('click', (e) => {
    e.preventDefault();
    sec2.style = 'display: none';
    sec1.style = 'display: flex';
});