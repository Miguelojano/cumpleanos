/* =====================================================
   MENSAJES
===================================================== */

const mensajes = [

    "[Mensaje 1]",

    "[Mensaje 2]",

    "[Mensaje 3]",

    "[Mensaje 4]",

    "[Mensaje 5]",

    "[Mensaje 6]",

    "[Mensaje 7]"

];


/* =====================================================
   ELEMENTOS
===================================================== */

const corazon =
    document.getElementById("corazon");

const mensaje =
    document.getElementById("mensaje");

const instruccion =
    document.getElementById("instruccion");

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

const escena3 =
    document.getElementById("escena3");

const corazonFinal =
    document.getElementById("corazon-final");

const botonCarta =
    document.getElementById("boton-carta");

const carta =
    document.getElementById("carta");


/* =====================================================
   ESTADO
===================================================== */

let contador = 0;


/* =====================================================
   PORCENTAJES
===================================================== */

const porcentajes = [

    15,
    28,
    41,
    55,
    70,
    85,
    100

];


/* =====================================================
   ANIMACIONES
===================================================== */

const animaciones = [

    "latido",

    "corazon-fuerte",

    "latido",

    "corazon-brillo",

    "latido-fuerte",

    "corazon-brillo",

    "corazon-fuerte"

];


/* =====================================================
   TOQUE DEL CORAZÓN
===================================================== */

corazon.addEventListener("click", () => {


    /*
       Los primeros 7 clics muestran
       los mensajes y llenan la barra.
    */

    if (contador < mensajes.length) {


        /* =========================
           MENSAJE
        ========================= */

        mensaje.textContent =
            mensajes[contador];

        mensaje.classList.remove(
            "visible"
        );

        setTimeout(() => {

            mensaje.classList.add(
                "visible"
            );

        }, 50);


        /* =========================
           ANIMACIÓN
        ========================= */

        corazon.classList.remove(

            "latido",

            "corazon-fuerte",

            "corazon-brillo"

        );

        void corazon.offsetWidth;

        corazon.classList.add(

            animaciones[contador]

        );


        /* =========================
           PROGRESO
        ========================= */

        progresoContainer.classList.remove(
            "oculto"
        );

        const progreso =
            porcentajes[contador];

        barraProgreso.style.width =
            progreso + "%";

        porcentaje.textContent =
            progreso + "%";


        contador++;


        /* =========================
           ÚLTIMO MENSAJE
        ========================= */

        if (
            contador ===
            mensajes.length
        ) {

            setTimeout(() => {

                instruccion.textContent =
                    "Toca por última vez ❤️";

            }, 600);
        }


        return;
    }


    /*
       Después de los 7 mensajes,
       el siguiente clic produce
       la transición.
    */

    transicionarEscena();

});


/* =====================================================
   TRANSICIÓN ESCENA 1 → ESCENA 2
===================================================== */

function transicionarEscena() {


    corazon.disabled = true;


    /*
       Mostramos el corazón gigante.
    */

    corazonFinal.classList.remove(
        "oculto"
    );


    /*
       Cambiamos de escena mientras
       el corazón cubre la pantalla.
    */

    setTimeout(() => {

        escena1.classList.remove(
            "activa"
        );

        escena2.classList.add(
            "activa"
        );

    }, 1000);


    /*
       Después de la animación
       eliminamos el corazón gigante.
    */

    setTimeout(() => {

        corazonFinal.classList.add(
            "oculto"
        );

    }, 2300);

}


/* =====================================================
   ABRIR CARTA
===================================================== */

botonCarta.addEventListener(
    "click",
    () => {


        carta.classList.add(
            "abierta"
        );


        botonCarta.textContent =
            "💗 Carta abierta";


        botonCarta.disabled = true;


        /*
           Después de abrir la carta,
           esperamos unos segundos y
           pasamos a la escena 3.
        */

        setTimeout(() => {

            pasarAEscena3();

        }, 7000);

    }
);


/* =====================================================
   ESCENA 2 → ESCENA 3
===================================================== */

function pasarAEscena3() {


    escena2.classList.remove(
        "activa"
    );


    escena3.classList.add(
        "activa"
    );


    /*
       Volvemos al inicio de la escena
       para que la animación del abrazo
       comience desde arriba.
    */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

