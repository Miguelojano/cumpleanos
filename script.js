/* =====================================================
   ELEMENTOS
===================================================== */

const escena1 = document.getElementById("escena1");
const escena2 = document.getElementById("escena2");
const escena3 = document.getElementById("escena3");

const nombreInput = document.getElementById("nombre");
const botonNombre = document.getElementById("boton-nombre");

const corazon = document.getElementById("corazon");
const instruccion = document.getElementById("instruccion");

const progresoContainer =
    document.getElementById("progreso-container");

const barraProgreso =
    document.getElementById("barra-progreso");

const porcentaje =
    document.getElementById("porcentaje");

const sobre =
    document.getElementById("sobre");

const botonCarta =
    document.getElementById("boton-carta");

const carta =
    document.getElementById("carta");

const cierre =
    document.getElementById("cierre");


/* =====================================================
   VARIABLES
===================================================== */

let nombre = "";

let contador = 0;

const mensajes = [
    "Toca el corazón una vez más ❤️",
    "Hay algo muy especial esperando por ti ✨",
    "Cada toque guarda un pequeño pedacito de amor 💕",
    "Ya falta poquito... 🌷",
    "Sigue tocando ❤️",
    "Estamos llegando al final ✨",
    "Este último mensaje es para ti 💕"
];

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
   INICIO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        escena1.classList.add("activa");

        if (nombreInput) {
            nombreInput.focus();
        }

    }
);


/* =====================================================
   INGRESAR NOMBRE
===================================================== */

botonNombre.addEventListener(
    "click",
    () => {

        const nombreIngresado =
            nombreInput.value.trim();

        if (
            nombreIngresado === ""
        ) {

            nombreInput.focus();

            return;
        }

        nombre =
            nombreIngresado;

        document.querySelectorAll(
            ".nombre-personalizado"
        ).forEach(
            elemento => {
                elemento.textContent =
                    nombre;
            }
        );

        escena1.classList.remove(
            "activa"
        );

        escena2.classList.add(
            "activa"
        );

        instruccion.textContent =
            nombre +
            ", toca el corazón.";

    }
);


/* =====================================================
   ENTER EN EL NOMBRE
===================================================== */

nombreInput.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Enter"
        ) {

            botonNombre.click();

        }

    }
);


/* =====================================================
   CORAZÓN
===================================================== */

corazon.addEventListener(
    "click",
    () => {

        if (
            contador >= 8
        ) {
            return;
        }

        contador++;

        /* ---------------------------------------------
           PRIMEROS 7 CLICS
        --------------------------------------------- */

        if (
            contador <= 7
        ) {

            instruccion.textContent =
                mensajes[
                    contador - 1
                ];

            const progreso =
                porcentajes[
                    contador - 1
                ];

            barraProgreso.style.width =
                progreso + "%";

            porcentaje.textContent =
                progreso + "%";

            progresoContainer.classList.remove(
                "oculto"
            );

            /* Pequeña animación */

            corazon.classList.remove(
                "latido"
            );

            void corazon.offsetWidth;

            corazon.classList.add(
                "latido"
            );

        }


        /* ---------------------------------------------
           OCTAVO CLIC
        --------------------------------------------- */

        if (
            contador === 8
        ) {

            instruccion.textContent =
                "Toca por última vez ❤️";

            corazon.disabled = true;

            corazon.classList.add(
                "corazon-final"
            );

            setTimeout(
                () => {

                    mostrarCorazonGigante();

                },
                500
            );

        }

    }
);


/* =====================================================
   CORAZÓN GIGANTE
===================================================== */

function mostrarCorazonGigante() {

    const gigante =
        document.createElement(
            "div"
        );

    gigante.className =
        "corazon-transicion";

    gigante.textContent =
        "♥";

    document.body.appendChild(
        gigante
    );

    setTimeout(
        () => {

            gigante.classList.add(
                "creciendo"
            );

        },
        50
    );

    setTimeout(
        () => {

            escena2.classList.remove(
                "activa"
            );

            escena3.classList.add(
                "activa"
            );

            gigante.remove();

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        },
        1100
    );

}


/* =====================================================
   BOTÓN DE LA CARTA
===================================================== */

botonCarta.addEventListener(
    "click",
    () => {

        if (
            botonCarta.disabled
        ) {
            return;
        }

        botonCarta.disabled =
            true;

        sobre.classList.add(
            "abriendo"
        );

        setTimeout(
            () => {

                carta.classList.add(
                    "abierta"
                );

            },
            650
        );


        /* ---------------------------------------------
           SCROLL DE ~3 CM
        --------------------------------------------- */

        setTimeout(
            () => {

                window.scrollBy({
                    top: 120,
                    behavior: "smooth"
                });

            },
            100
        );


        /* ---------------------------------------------
           LLUVIA DE CUMPLEAÑOS
           3 SEGUNDOS DESPUÉS
        --------------------------------------------- */

        setTimeout(
            () => {

                iniciarLluviaCumpleanos();

            },
            3000
        );

    }
);


/* =====================================================
   LLUVIA DE CUMPLEAÑOS
===================================================== */

function iniciarLluviaCumpleanos() {

    const lluvia =
        document.createElement(
            "div"
        );

    lluvia.className =
        "lluvia-cumpleanos";

    document.body.appendChild(
        lluvia
    );


    const detalles = [

        "🎈",
        "🎉",
        "🎊",
        "✨",
        "🎁",
        "🥳",

        "🎈",
        "🎊",
        "✨",
        "🎉",
        "🎈",
        "🎁",

        "🎊",
        "✨",
        "🥳",
        "🎈",
        "🎉",
        "🎊",

        "✨",
        "🎁",
        "🎈",
        "🥳",
        "🎉",
        "🎊",

        "✨",
        "🎈",
        "🎉",
        "🎁",
        "🎊",
        "🥳",

        "🎈",
        "🎉",
        "🎊",
        "✨",
        "🎁"
    ];


    detalles.forEach(
        (
            detalle,
            indice
        ) => {

            const elemento =
                document.createElement(
                    "div"
                );

            elemento.className =
                "detalle-cumpleanos";

            elemento.textContent =
                detalle;


            /* Posición horizontal */

            elemento.style.left =
                (
                    Math.random() * 100
                ) + "%";


            /* Tamaño */

            elemento.style.fontSize =
                (
                    1.3 +
                    Math.random() * 1.5
                ) + "rem";


            /* Pequeña variación */

            elemento.style.marginLeft =
                (
                    -20 +
                    Math.random() * 40
                ) + "px";


            /* Aparición escalonada */

            elemento.style.animationDelay =
                (
                    indice * 0.12
                ) + "s";


            /* Velocidad */

            elemento.style.animationDuration =
                (
                    4 +
                    Math.random() * 2.5
                ) + "s";


            lluvia.appendChild(
                elemento
            );

        }
    );


    /* ---------------------------------------------
       ELIMINAR LA LLUVIA
       después de terminar
    --------------------------------------------- */

    setTimeout(
        () => {

            lluvia.remove();

        },
        8500
    );

}
