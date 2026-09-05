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
    document.getElementById(
        "progreso-container"
    );

const barraProgreso =
    document.getElementById(
        "barra-progreso"
    );

const porcentaje =
    document.getElementById(
        "porcentaje"
    );

const escena1 =
    document.getElementById(
        "escena1"
    );

const escena2 =
    document.getElementById(
        "escena2"
    );

const corazonFinal =
    document.getElementById(
        "corazon-final"
    );

const sobre =
    document.getElementById(
        "sobre"
    );

const botonCarta =
    document.getElementById(
        "boton-carta"
    );

const carta =
    document.getElementById(
        "carta"
    );

const cierre =
    document.getElementById(
        "cierre"
    );

const abrazo =
    document.getElementById(
        "abrazo"
    );


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
               MOSTRAR MENSAJE
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
               ANIMAR CORAZÓN
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
        ================================================== */

        transicionarEscena();

    }
);


/* =====================================================
   TRANSICIÓN CORAZÓN → CUMPLEAÑOS
===================================================== */

function transicionarEscena() {


    /*
        Desactivamos el botón.
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

        - desaparece el inicio
        - aparece cumpleaños
        - aparece galería
        - aparece sobre

        El cierre permanece oculto.
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
            Evitamos que se pulse
            varias veces.
        */

        botonCarta.disabled = true;


        /*
            Abrimos visualmente el sobre.
        */

        sobre.classList.add(
            "abriendo"
        );


        /*
            Esperamos un poco antes
            de mostrar la carta.
        */

        setTimeout(() => {

            carta.classList.add(
                "abierta"
            );

        }, 650);


        /*
            AQUÍ SE DESBLOQUEA EL CIERRE.

            Antes de este momento:

                #cierre = display:none

            Por lo tanto no se puede
            llegar haciendo scroll.

            Después de pulsar Descúbrelo:

                #cierre = visible
        */

        setTimeout(() => {

            cierre.classList.remove(
                "oculto"
            );

        }, 900);


        /*
            Cambiamos el contenido del sello.
        */

        setTimeout(() => {

            botonCarta.innerHTML =
                "<span>♡</span>";

        }, 500);


        /*
            Inicializamos el observador
            del abrazo.
        */

        setTimeout(() => {

            iniciarObserverAbrazo();

        }, 1000);

    }
);


/* =====================================================
   OBSERVADOR DEL ABRAZO
===================================================== */

function iniciarObserverAbrazo() {


    /*
        Si el navegador soporta
        IntersectionObserver.
    */

    if (
        "IntersectionObserver"
        in window
    ) {


        const observer =
            new IntersectionObserver(

                (entries) => {


                    entries.forEach(
                        (entry) => {


                            if (
                                entry.isIntersecting
                            ) {


                                abrazo.classList.add(
                                    "visible"
                                );


                                /*
                                    Dejamos de observar
                                    después de aparecer.
                                */

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {

                    threshold: .35

                }
            );


        observer.observe(
            abrazo
        );


    } else {


        /*
            Compatibilidad con navegadores
            antiguos.
        */

        abrazo.classList.add(
            "visible"
        );

    }

}
