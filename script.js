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

const confetiCarta =
    document.getElementById(
        "confeti-carta"
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


        /* =============================================
           PRIMEROS 7 CLICS
        ============================================= */

        if (
            contador <
            mensajes.length
        ) {


            /* =========================================
               MOSTRAR MENSAJE

               El mensaje reemplaza el texto inicial
               "[Nombre], toca el corazón."
            ========================================= */

            instruccion.classList.remove(
                "visible"
            );

            instruccion.textContent =
                mensajes[contador];

            setTimeout(() => {

                instruccion.classList.add(
                    "visible"
                );

            }, 50);


            /* =========================================
               ANIMAR CORAZÓN
            ========================================= */

            corazon.classList.remove(

                "latido",

                "corazon-fuerte",

                "corazon-brillo"

            );


            void corazon.offsetWidth;


            corazon.classList.add(
                animaciones[contador]
            );


            /* =========================================
               PROGRESO
            ========================================= */

            progresoContainer.classList.remove(
                "oculto"
            );


            const progreso =
                porcentajes[contador];


            barraProgreso.style.width =
                progreso + "%";


            porcentaje.textContent =
                progreso + "%";


            /* =========================================
               AVANZAR CONTADOR
            ========================================= */

            contador++;


            /* =========================================
               DESPUÉS DEL 7.º CLIC
            ========================================= */

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
             Pequeño desplazamiento hacia abajo
             al descubrir la carta.

             3cm equivalen a ~113px usando el píxel
             de referencia CSS (96dpi), que es el
             estándar que usan los navegadores
             independientemente de la pantalla.
         */

         const DESPLAZAMIENTO_3CM = 113;

         setTimeout(() => {
         
             window.scrollBy({
                 top: DESPLAZAMIENTO_3CM,
                 behavior: "smooth"
             });
         
         }, 100);
         
         
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

            lanzarConfetiCarta();

        }, 650);


        /*
            AQUÍ SE DESBLOQUEA EL CIERRE.

            Antes de este momento:

                #cierre = display:none

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


/* =====================================================
   INDICADORES DE LA GALERÍA

   Sincroniza los tres puntos inferiores
   con la fotografía que está visible.
===================================================== */

const galeria =
    document.querySelector(
        ".galeria"
    );

const fotosGaleria =
    document.querySelectorAll(
        ".galeria .foto"
    );

const indicadoresGaleria =
    document.querySelectorAll(
        ".indicadores-fotos .indicador"
    );


if (

    galeria &&

    fotosGaleria.length &&

    indicadoresGaleria.length

) {


    function actualizarIndicadoresGaleria() {


        const centroGaleria =

            galeria.scrollLeft +

            (
                galeria.clientWidth /
                2
            );


        let indiceActivo = 0;

        let menorDistancia =
            Infinity;


        fotosGaleria.forEach(
            (foto, indice) => {


                const centroFoto =

                    foto.offsetLeft +

                    (
                        foto.offsetWidth /
                        2
                    );


                const distancia =

                    Math.abs(

                        centroFoto -
                        centroGaleria

                    );


                if (
                    distancia <
                    menorDistancia
                ) {


                    menorDistancia =
                        distancia;


                    indiceActivo =
                        indice;

                }

            }
        );


        indicadoresGaleria.forEach(
            (indicador, indice) => {


                indicador.classList.toggle(

                    "activo",

                    indice ===
                    indiceActivo

                );

            }
        );

    }


    /*
        Actualizar al deslizar.
    */

    galeria.addEventListener(

        "scroll",

        actualizarIndicadoresGaleria,

        {
            passive: true
        }

    );


    /*
        Actualizar al cambiar
        el tamaño de la pantalla.
    */

    window.addEventListener(

        "resize",

        actualizarIndicadoresGaleria

    );


    /*
        Estado inicial.
    */

    setTimeout(

        actualizarIndicadoresGaleria,

        100

    );

}


/* =====================================================
   CONFETI Y GLOBOS AL ABRIR LA CARTA

   Genera globos, confeti cuadrado y serpentinas
   que caen desde arriba y se van desvaneciendo.

   Duración total de la animación: ~6 segundos.
===================================================== */

function lanzarConfetiCarta() {


    if (! confetiCarta) {

        return;

    }


    const colores = [

        "#e59aaa",

        "#c96c80",

        "#f2b53f",

        "#7fc9a6",

        "#8aa8d8",

        "#d9838f"

    ];


    const totalPiezas = 30;

    const duracionMaxima = 6;


    for (

        let i = 0;
        i < totalPiezas;
        i++

    ) {


        const pieza =
            document.createElement(
                "div"
            );


        const color =
            colores[
                Math.floor(
                    Math.random() *
                    colores.length
                )
            ];


        /*
            Posición horizontal aleatoria
            y una pequeña deriva lateral
            mientras cae.
        */

        const izquierda =
            Math.random() * 100;

        const deriva =
            Math.round(
                (Math.random() * 70) - 35
            );

        /*
            Retraso y duración aleatorios,
            sin superar los 6 segundos
            en total.
        */

        const retraso =
            Math.random() * 1.4;

        const duracion =
            duracionMaxima -
            retraso -
            (Math.random() * .6);


        pieza.style.left =
            izquierda + "%";

        pieza.style.animationDelay =
            retraso + "s";

        pieza.style.animationDuration =
            Math.max(
                duracion,
                3
            ) + "s";

        pieza.style.setProperty(
            "--deriva",
            deriva + "px"
        );


        /*
            Elegimos aleatoriamente el tipo
            de pieza: globo, confeti o
            serpentina.
        */

        const tipo =
            Math.random();


        if (tipo < .3) {


            pieza.className =
                "pieza-confeti pieza-globo";

            pieza.textContent =
                "🎈";

            pieza.style.color =
                color;


        } else if (tipo < .65) {


            pieza.className =
                "pieza-confeti pieza-serpentina";

            pieza.style.background =
                color;


        } else {


            pieza.className =
                "pieza-confeti pieza-cuadro";

            pieza.style.background =
                color;

        }


        /*
            Quitamos la pieza del DOM
            al terminar su animación.
        */

        pieza.addEventListener(
            "animationend",
            () => {

                pieza.remove();

            }
        );


        confetiCarta.appendChild(
            pieza
        );

    }


    /*
        Limpieza de seguridad por si
        algún navegador no dispara
        "animationend".
    */

    setTimeout(() => {

        confetiCarta.innerHTML = "";

    }, 7000);

}
