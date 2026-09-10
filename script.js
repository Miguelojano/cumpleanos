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


        /* =============================================
           PRIMEROS 7 CLICS
        ============================================= */

        if (
            contador <
            mensajes.length
        ) {


            /* =========================================
               MOSTRAR MENSAJE
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


    /* =================================================
       CONTROL DE SWIPE EN MÓVIL

       Cada gesto solo permite avanzar o retroceder
       UNA fotografía.

       Un swipe rápido no puede saltar de:
       
           Foto 1 → Foto 3
       
       ni:
       
           Foto 3 → Foto 1
    ================================================== */

    let posicionInicialScroll = 0;

    let desplazamientoAcumulado = 0;

    let bloqueandoSwipe = false;


    /*
        Detectamos solamente dispositivos táctiles.
    */

    const esDispositivoTactil =
        window.matchMedia(
            "(pointer: coarse)"
        ).matches;


    if (esDispositivoTactil) {


        /* ---------------------------------------------
           INICIO DEL GESTO
        --------------------------------------------- */

        galeria.addEventListener(

            "touchstart",

            (e) => {

                if (bloqueandoSwipe) {
                    return;
                }


                posicionInicialScroll =
                    galeria.scrollLeft;


                desplazamientoAcumulado =
                    0;

            },

            {
                passive: true
            }

        );


        /* ---------------------------------------------
           MOVIMIENTO DEL DEDO
        --------------------------------------------- */

        galeria.addEventListener(

            "touchmove",

            () => {

                if (bloqueandoSwipe) {
                    return;
                }


                desplazamientoAcumulado =

                    galeria.scrollLeft -
                    posicionInicialScroll;

            },

            {
                passive: true
            }

        );


        /* ---------------------------------------------
           FIN DEL GESTO
        --------------------------------------------- */

        galeria.addEventListener(

            "touchend",

            () => {


                if (bloqueandoSwipe) {
                    return;
                }


                /*
                    Calculamos qué foto estaba
                    inicialmente visible.
                */

                const centroInicial =

                    posicionInicialScroll +

                    (
                        galeria.clientWidth /
                        2
                    );


                let indiceActual = 0;

                let menorDistanciaInicial =
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
                                centroInicial

                            );


                        if (
                            distancia <
                            menorDistanciaInicial
                        ) {


                            menorDistanciaInicial =
                                distancia;


                            indiceActual =
                                indice;

                        }

                    }
                );


                /*
                    Determinamos la dirección
                    del swipe.
                */

                let nuevoIndice =
                    indiceActual;


                /*
                    Swipe hacia la derecha:
                    retroceder SOLO una foto.
                */

                if (
                    desplazamientoAcumulado >
                    20
                ) {

                    nuevoIndice =

                        Math.max(

                            0,

                            indiceActual - 1

                        );

                }


                /*
                    Swipe hacia la izquierda:
                    avanzar SOLO una foto.
                */

                else if (
                    desplazamientoAcumulado <
                    -20
                ) {

                    nuevoIndice =

                        Math.min(

                            fotosGaleria.length - 1,

                            indiceActual + 1

                        );

                }


                /*
                    Si hubo desplazamiento hacia
                    una nueva fotografía, forzamos
                    el destino.
                */

                if (
                    nuevoIndice !==
                    indiceActual
                ) {


                    bloqueandoSwipe =
                        true;


                    fotosGaleria[
                        nuevoIndice
                    ].scrollIntoView({

                        behavior: "smooth",

                        block: "nearest",

                        inline: "center"

                    });


                    /*
                        Bloqueamos brevemente nuevos
                        gestos mientras termina
                        el desplazamiento.
                    */

                    setTimeout(

                        () => {

                            bloqueandoSwipe =
                                false;

                            actualizarIndicadoresGaleria();

                        },

                        550

                    );

                }

            },

            {
                passive: true
            }

        );

    }

}
