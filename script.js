document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const escena1 = document.getElementById("escena1");
    const escena2 = document.getElementById("escena2");

    const corazon = document.getElementById("corazon");
    const corazonFinal = document.getElementById("corazon-final");

    const mensaje = document.getElementById("mensaje");
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

    const abrazo =
        document.getElementById("abrazo");


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
       VARIABLES
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
       CLICK EN EL CORAZÓN
    ===================================================== */

    if (corazon) {

        corazon.addEventListener("click", () => {

            /* ---------------------------------------------
               PRIMEROS 7 CLICS
            --------------------------------------------- */

            if (contador < 7) {

                mensaje.textContent = mensajes[contador];

                /* Mostrar progreso */
                if (progresoContainer) {
                    progresoContainer.classList.remove("oculto");
                }

                /* Actualizar barra */
                if (barraProgreso) {
                    barraProgreso.style.width =
                        porcentajes[contador] + "%";
                }

                /* Actualizar porcentaje */
                if (porcentaje) {
                    porcentaje.textContent =
                        porcentajes[contador] + "%";
                }

                /* Animación del corazón */
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

                /* -----------------------------------------
                   DESPUÉS DEL SÉPTIMO CLIC
                ----------------------------------------- */

                if (contador === 7) {

                    instruccion.textContent =
                        "Toca por última vez ❤️";

                }

            }

            /* ---------------------------------------------
               OCTAVO CLIC → TRANSICIÓN
            --------------------------------------------- */

            else {

                transicionarEscena();

            }

        });

    }


    /* =====================================================
       TRANSICIÓN DE ESCENA
    ===================================================== */

    function transicionarEscena() {

        if (corazon) {
            corazon.disabled = true;
        }

        if (instruccion) {
            instruccion.textContent = "";
        }

        /* Mostrar corazón gigante */
        if (corazonFinal) {
            corazonFinal.classList.remove("oculto");

            void corazonFinal.offsetWidth;

            corazonFinal.classList.add("crecer");
        }


        /* ---------------------------------------------
           Cambiar de escena
        --------------------------------------------- */

        setTimeout(() => {

            if (escena1) {
                escena1.classList.remove("activa");
            }

            if (escena2) {
                escena2.classList.add("activa");
            }

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 1000);


        /* ---------------------------------------------
           Ocultar corazón gigante
        --------------------------------------------- */

        setTimeout(() => {

            if (corazonFinal) {
                corazonFinal.classList.add("oculto");
            }

        }, 2300);

    }


    /* =====================================================
       ABRIR CARTA
    ===================================================== */

    if (botonCarta) {

        botonCarta.addEventListener("click", () => {

            botonCarta.disabled = true;

            /* Animación del sobre */
            if (sobre) {
                sobre.classList.add("abriendo");
            }


            /* ---------------------------------------------
               Abrir carta
            --------------------------------------------- */

            setTimeout(() => {

                if (carta) {
                    carta.classList.add("abierta");
                }

            }, 650);


            /* ---------------------------------------------
               Mostrar cierre
            --------------------------------------------- */

            setTimeout(() => {

                if (cierre) {
                    cierre.classList.remove("oculto");
                }

            }, 900);


            /* ---------------------------------------------
               Cambiar texto del botón
            --------------------------------------------- */

            setTimeout(() => {

                botonCarta.innerHTML =
                    "<span>♡</span>";

            }, 500);


            /* ---------------------------------------------
               Observador del abrazo
            --------------------------------------------- */

            setTimeout(() => {

                if (!abrazo) return;

                const observer =
                    new IntersectionObserver(
                        (entries) => {

                            entries.forEach((entry) => {

                                if (entry.isIntersecting) {

                                    abrazo.classList.add(
                                        "visible"
                                    );

                                    observer.unobserve(
                                        abrazo
                                    );

                                }

                            });

                        },
                        {
                            threshold: 0.25
                        }
                    );

                observer.observe(abrazo);

            }, 1000);

        });

    }


    /* =====================================================
       INDICADORES DE LA GALERÍA
       
       Sincroniza los tres puntos inferiores
       con la fotografía que está visible.
    ===================================================== */

    const galeria =
        document.querySelector(".galeria");

    const fotosGaleria =
        document.querySelectorAll(".galeria .foto");

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
                (galeria.clientWidth / 2);


            let indiceActivo = 0;

            let menorDistancia = Infinity;


            fotosGaleria.forEach((foto, indice) => {

                const centroFoto =
                    foto.offsetLeft +
                    (foto.offsetWidth / 2);


                const distancia =
                    Math.abs(
                        centroFoto -
                        centroGaleria
                    );


                if (distancia < menorDistancia) {

                    menorDistancia =
                        distancia;

                    indiceActivo =
                        indice;

                }

            });


            indicadoresGaleria.forEach(
                (indicador, indice) => {

                    indicador.classList.toggle(
                        "activo",
                        indice === indiceActivo
                    );

                }
            );

        }


        /* Actualizar al deslizar */
        galeria.addEventListener(
            "scroll",
            actualizarIndicadoresGaleria,
            {
                passive: true
            }
        );


        /* Actualizar al cambiar tamaño */
        window.addEventListener(
            "resize",
            actualizarIndicadoresGaleria
        );


        /* Estado inicial */
        setTimeout(
            actualizarIndicadoresGaleria,
            100
        );

    }

});
