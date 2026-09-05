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

const corazonFinal =
    document.getElementById("corazon-final");

const botonCarta =
    document.getElementById("boton-carta");

const carta =
    document.getElementById("carta");

const cierre =
    document.getElementById("cierre");

const abrazo =
    document.getElementById("abrazo");


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

    "corazon-fuerte",

    "corazon-brillo",

    "corazon-fuerte"

];


/* =====================================================
   CORAZÓN PRINCIPAL
===================================================== */

corazon.addEventListener(
    "click",
    () => {


        /*
            PRIMEROS 7 CLICS
        */

        if (
            contador <
            mensajes.length
        ) {


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
               DESPUÉS DEL 7.º CLIC
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



        /* =================================================
           8.º CLIC
           TRANSICIÓN
        ================================================== */

        transicionarEscena();

    }
);


/* =====================================================
   TRANSICIÓN CORAZÓN → CUMPLEAÑOS
===================================================== */

function transicionarEscena() {


    /*
        Desactivamos el corazón.
    */

    corazon.disabled = true;


    /*
        Mostramos el corazón gigante.
    */

    corazonFinal.classList.remove(
        "oculto"
    );


    /*
        Después de 1 segundo:

        - desaparece escena 1
        - aparece cumpleaños
        - galería
        - carta

        EL CIERRE SIGUE OCULTO.
    */

    setTimeout(() => {


        escena1.classList.remove(
            "activa"
        );


        escena2.classList.add(
            "activa"
        );


        window.scrollTo({

            top: 0,

            behavior: "auto"

        });


    }, 1000);



    /*
        Dejamos terminar la animación
        del corazón gigante.
    */

    setTimeout(() => {

        corazonFinal.classList.add(
            "oculto"
        );

    }, 2300);

}


/* =====================================================
   BOTÓN "DESCÚBRELO"
===================================================== */

botonCarta.addEventListener(
    "click",
    () => {


        /*
            Abrimos la carta.
        */

        carta.classList.add(
            "abierta"
        );


        /*
            Cambiamos el botón.
        */

        botonCarta.textContent =
            "💗 Carta abierta";


        /*
            Evitamos volver a presionarlo.
        */

        botonCarta.disabled = true;



        /*
            =============================================
            AHORA SÍ APARECE EL CIERRE
            =============================================

            Hasta este momento:

                cierre = display:none

            Por eso no se podía hacer scroll
            hasta el abrazo ni al título final.

            Al presionar "Descúbrelo",
            quitamos "oculto".
        */

        cierre.classList.remove(
            "oculto"
        );


        /*
            Pequeña espera para que el cierre
            pueda aparecer de forma natural.
        */

        setTimeout(() => {

            abrazo.classList.add(
                "visible"
            );

        }, 300);

    }
);
