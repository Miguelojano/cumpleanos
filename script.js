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


        /* =========================================
           PRIMEROS 7 CLICS
        ========================================== */

        if (
            contador <
            mensajes.length
        ) {


            /* Mensaje */

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



            /* Progreso */

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



            /* Último mensaje */

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


        /* =========================================
           OCTAVO CLIC
        ========================================== */

        transicionarEscena();

    }
);


/* =====================================================
   TRANSICIÓN
===================================================== */

function transicionarEscena() {


    corazon.disabled = true;


    /* Mostrar corazón gigante */

    corazonFinal.classList.remove(
        "oculto"
    );


    /*
        Después de 1 segundo aparece
        la sección de cumpleaños.

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
   DESCÚBRELO
===================================================== */

botonCarta.addEventListener(
    "click",
    () => {


        /*
            Evitamos doble activación.
        */

        botonCarta.disabled = true;


        /*
            Animación del sobre.
        */

        sobre.classList.add(
            "abriendo"
        );


        /*
            Después de un pequeño momento
            mostramos la carta.
        */

        setTimeout(() => {


            carta.classList.add(
                "abierta"
            );


        }, 650);


        /*
            El cierre aparece después
            de abrir "Descúbrelo".
        */

        setTimeout(() => {


            cierre.classList.remove(
                "oculto"
            );


        }, 900);


        /*
            El botón cambia de estado.
        */

        setTimeout(() => {

            botonCarta.innerHTML =
                "<span>♡</span>";

        }, 500);


        /*
            El abrazo aparece cuando
            la zona entra en pantalla.
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
            que no soporten IntersectionObserver.
        */

        abrazo.classList.add(
            "visible"
        );

    }

}
