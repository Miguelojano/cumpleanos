/* =========================
   MENSAJES
========================= */

const mensajes = [
    "[Mensaje 1]",
    "[Mensaje 2]",
    "[Mensaje 3]",
    "[Mensaje 4]",
    "[Mensaje 5]",
    "[Mensaje 6]",
    "[Mensaje 7]"
];


/* =========================
   ELEMENTOS
========================= */

const corazon = document.getElementById("corazon");
const mensaje = document.getElementById("mensaje");
const instruccion = document.getElementById("instruccion");

const progresoContainer =
    document.getElementById("progreso-container");

const barraProgreso =
    document.getElementById("barra-progreso");

const porcentaje =
    document.getElementById("porcentaje");

const escena1 =
    document.getElementById("escena1");

const escena2 =
    document.getElementById("escena2");

const corazonFinal =
    document.getElementById("corazon-final");

const botonCarta =
    document.getElementById("boton-carta");

const carta =
    document.getElementById("carta");


/* =========================
   ESTADO
========================= */

let contador = 0;


/* =========================
   ANIMACIONES
========================= */

const animaciones = [
    "latido",
    "corazon-fuerte",
    "latido",
    "corazon-brillo",
    "latido-fuerte",
    "corazon-brillo",
    "corazon-fuerte"
];


/* =========================
   TOQUE DEL CORAZÓN
========================= */

corazon.addEventListener("click", () => {

    /* Última etapa:
       después de los 7 mensajes,
       comienza la carga.
    */

    if (contador >= mensajes.length) {

        cargarCorazon();

        return;
    }


    /* Mostrar mensaje */

    mensaje.textContent = mensajes[contador];

    mensaje.classList.remove("visible");

    /* Forzamos una pequeña espera
       para que la animación se reinicie */

    setTimeout(() => {
        mensaje.classList.add("visible");
    }, 50);


    /* Animación */

    corazon.classList.remove(
        "latido",
        "corazon-fuerte",
        "corazon-brillo"
    );

    void corazon.offsetWidth;

    corazon.classList.add(
        animaciones[contador]
    );


    contador++;


    /* Cuando aparecen los 7 mensajes */

    if (contador === mensajes.length) {

        setTimeout(() => {

            instruccion.textContent =
                "Toca por última vez ❤️";

            progresoContainer.classList.remove(
                "oculto"
            );

        }, 600);
    }

});


/* =========================
   CARGA DEL CORAZÓN
========================= */

function cargarCorazon() {

    const porcentajes = [
        15,
        36,
        58,
        79,
        100
    ];

    let paso = 0;


    /* Desactivamos temporalmente el botón */

    corazon.disabled = true;


    const intervalo = setInterval(() => {

        const valor = porcentajes[paso];

        barraProgreso.style.width =
            valor + "%";

        porcentaje.textContent =
            valor + "%";


        /* El corazón crece */

        const escala =
            1 + (valor / 100) * 0.5;

        corazon.style.transform =
            `scale(${escala})`;


        paso++;


        if (paso >= porcentajes.length) {

            clearInterval(intervalo);

            setTimeout(() => {
                transicionarEscena();
            }, 700);
        }

    }, 500);
}


/* =========================
   TRANSICIÓN A ESCENA 2
========================= */

function transicionarEscena() {

    corazonFinal.classList.remove("oculto");


    setTimeout(() => {

        escena1.classList.remove("activa");

        escena2.classList.add("activa");

    }, 1000);


    setTimeout(() => {

        corazonFinal.classList.add("oculto");

    }, 2300);
}


/* =========================
   CARTA
========================= */

botonCarta.addEventListener("click", () => {

    carta.classList.add("abierta");

    botonCarta.textContent =
        "💗 Carta abierta";

    botonCarta.disabled = true;

});
