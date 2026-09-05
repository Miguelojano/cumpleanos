/* =====================================================
   ELEMENTOS DEL DOM
===================================================== */

const escena1 = document.getElementById("escena1");
const escena2 = document.getElementById("escena2");

const corazon = document.getElementById("corazon");
const corazonFinal = document.getElementById("corazon-final");

const mensaje = document.getElementById("mensaje");
const instruccion = document.getElementById("instruccion");

const progresoContainer = document.getElementById("progreso-container");
const barraProgreso = document.getElementById("barra-progreso");
const porcentaje = document.getElementById("porcentaje");

const sobre = document.getElementById("sobre");
const botonCarta = document.getElementById("boton-carta");
const carta = document.getElementById("carta");

const cierre = document.getElementById("cierre");
const abrazo = document.getElementById("abrazo");


/* =====================================================
   MENSAJES DEL CORAZÓN
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
   VARIABLES DEL JUEGO
===================================================== */

let contador = 0;

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
   ANIMACIONES DEL CORAZÓN
===================================================== */

const animaciones = [
    "latido-suave",
    "latido",
    "latido-fuerte",
    "pulso",
    "latido-rapido",
    "corazon-grande",
    "corazon-final"
];


/* =====================================================
   CLICK DEL CORAZÓN
===================================================== */

if (corazon) {

    corazon.addEventListener("click", () => {

        /* ---------------------------------------------
           PRIMEROS 7 CLICKS
        --------------------------------------------- */

        if (contador < 7) {

            // Mostrar mensaje correspondiente
            mensaje.textContent = mensajes[contador];

            // Mostrar barra de progreso
            progresoContainer.classList.remove("oculto");

            // Actualizar progreso
            barraProgreso.style.width = porcentajes[contador] + "%";
            porcentaje.textContent = porcentajes[contador] + "%";

            // Reiniciar animaciones
            corazon.classList.remove(
                "latido-suave",
                "latido",
                "latido-fuerte",
                "pulso",
                "latido-rapido",
                "corazon-grande",
                "corazon-final"
            );

            // Forzar reinicio de animación
            void corazon.offsetWidth;

            // Aplicar animación correspondiente
            corazon.classList.add(animaciones[contador]);

            // Incrementar contador
            contador++;

            // Después del séptimo click
            if (contador === 7) {

                instruccion.textContent =
                    "Toca por última vez ❤️";

            }

            return;
        }


        /* ---------------------------------------------
           OCTAVO CLICK
           TRANSICIÓN FINAL
        --------------------------------------------- */

        if (contador === 7) {

            transicionarEscena();

        }

    });

}


/* =====================================================
   TRANSICIÓN ENTRE ESCENAS
===================================================== */

function transicionarEscena() {

    // Evitar más clicks
    corazon.disabled = true;

    // Mostrar corazón gigante
    corazonFinal.classList.remove("oculto");

    // Pequeña pausa antes de comenzar
    setTimeout(() => {

        corazonFinal.classList.add("expandir");

    }, 50);


    // Cambiar a escena 2
    setTimeout(() => {

        escena1.classList.remove("activa");
        escena1.classList.add("oculto");

        escena2.classList.remove("oculto");
        escena2.classList.add("activa");

        // Volver arriba
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);


    // Ocultar corazón gigante
    setTimeout(() => {

        corazonFinal.classList.add("oculto");

    }, 2300);

}


/* =====================================================
   BOTÓN / SOBRE DE LA CARTA
===================================================== */

if (botonCarta) {

    botonCarta.addEventListener("click", () => {

        // Evitar múltiples clicks
        botonCarta.disabled = true;

        // Animación del sobre
        sobre.classList.add("abriendo");


        /* ---------------------------------------------
           ABRIR CARTA
        --------------------------------------------- */

        setTimeout(() => {

            carta.classList.add("abierta");

        }, 650);


        /* ---------------------------------------------
           MOSTRAR CIERRE
        --------------------------------------------- */

        setTimeout(() => {

            if (cierre) {
                cierre.classList.remove("oculto");
            }

        }, 900);


        /* ---------------------------------------------
           CAMBIAR SELLO
        --------------------------------------------- */

        setTimeout(() => {

            botonCarta.innerHTML = "<span>♡</span>";

        }, 500);


        /* ---------------------------------------------
           ACTIVAR OBSERVER DEL ABRAZO
        --------------------------------------------- */

        setTimeout(() => {

            activarObserverAbrazo();

        }, 1000);

    });

}


/* =====================================================
   OBSERVER DEL ABRAZO
===================================================== */

function activarObserverAbrazo() {

    if (!abrazo) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    abrazo.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    observer.observe(abrazo);

}


/* =====================================================
   INDICADORES DE LA GALERÍA
===================================================== */

const galeria = document.querySelector(".galeria");

const fotosGaleria = document.querySelectorAll(
    ".galeria .foto"
);

const indicadoresGaleria = document.querySelectorAll(
    ".indicadores-fotos .indicador"
);


if (
    galeria &&
    fotosGaleria.length &&
    indicadoresGaleria.length
) {


    /* ---------------------------------------------
       DETERMINAR FOTO ACTIVA
    --------------------------------------------- */

    function actualizarIndicadorGaleria() {

        /*
         * Calculamos el centro visible de la galería
         * y buscamos qué foto está más cerca de ese centro.
         *
         * Esto funciona tanto en computador como
         * en celular, aunque cambie el ancho de las fotos.
         */

        const centroGaleria =
            galeria.scrollLeft +
            (galeria.clientWidth / 2);


        let indiceActivo = 0;

        let menorDistancia = Infinity;


        fotosGaleria.forEach((foto, indice) => {

            const centroFoto =
                foto.offsetLeft +
                (foto.offsetWidth / 2);


            const distancia =
                Math.abs(
                    centroFoto - centroGaleria
                );


            if (distancia < menorDistancia) {

                menorDistancia = distancia;
                indiceActivo = indice;

            }

        });


        /* ---------------------------------------------
           ACTUALIZAR LOS PUNTOS
        --------------------------------------------- */

        indicadoresGaleria.forEach(
            (indicador, indice) => {

                indicador.classList.toggle(
                    "activo",
                    indice === indiceActivo
                );

            }
        );

    }


    /* ---------------------------------------------
       ACTUALIZAR AL DESLIZAR
    --------------------------------------------- */

    galeria.addEventListener(
        "scroll",
        actualizarIndicadorGaleria,
        {
            passive: true
        }
    );


    /* ---------------------------------------------
       ACTUALIZAR AL CAMBIAR TAMAÑO
    --------------------------------------------- */

    window.addEventListener(
        "resize",
        actualizarIndicadorGaleria
    );


    /* ---------------------------------------------
       ESTADO INICIAL
    --------------------------------------------- */

    setTimeout(
        actualizarIndicadorGaleria,
        100
    );

}


/* =====================================================
   FIN DEL SCRIPT
===================================================== */
