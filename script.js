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
   PORCENTAJES
========================= */

const porcentajes = [
    15,
    28,
    41,
    55,
    70,
    85,
    100
];


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

    /*
       Después de mostrar los 7 mensajes,
       el siguiente toque será el "último toque".
    */

    if (contador >= mensajes.length) {

        transicionarEscena();

        return;
    }


    /* =====================
       MOSTRAR MENSAJE
    ===================== */

    mensaje.textContent = mensajes[contador];

    mensaje.classList.remove("visible");

    setTimeout(() => {
        mensaje.classList.add("visible");
    }, 50);


    /* =====================
       ANIMAR CORAZÓN
    ===================== */

    corazon.classList.remove(
        "latido",
        "corazon-fuerte",
        "corazon-brillo"
    );

    void corazon.offsetWidth;

    corazon.classList.add(
        animaciones[contador]
    );


    /* =====================
       ACTUALIZAR PROGRESO
    ===================== */

    progresoContainer.classList.remove("oculto");

    const progreso = porcentajes[contador];

    barraProgreso.style.width =
        progreso + "%";

    porcentaje.textContent =
        progreso + "%";


    /* =====================
       SIGUIENTE PASO
    ===================== */

    contador++;


    /*
       Después del séptimo mensaje
       dejamos preparado el último toque.
    */

    if (contador === mensajes.length) {

        setTimeout(() => {

            instruccion.textContent =
                "Toca por última vez ❤️";

        }, 600);
    }

});


/* =========================
   TRANSICIÓN A ESCENA 2
========================= */

function transicionarEscena() {

    /* Desactivamos el corazón normal */

    corazon.disabled = true;


    /* Mostramos el corazón gigante */

    corazonFinal.classList.remove("oculto");


    /*
       Esperamos mientras el corazón
       crece y cubre la pantalla.
    */

    setTimeout(() => {

        escena1.classList.remove("activa");

        escena2.classList.add("activa");

    }, 1000);


    /*
       Quitamos la capa del corazón
       cuando termina la animación.
    */

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
