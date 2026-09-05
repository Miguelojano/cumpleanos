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

const corazon = document.getElementById("corazon");
const mensaje = document.getElementById("mensaje");
const instruccion = document.getElementById("instruccion");

const progresoContainer = document.getElementById("progreso-container");
const barra = document.getElementById("barra-progreso");
const porcentaje = document.getElementById("porcentaje");

const escena1 = document.getElementById("escena1");
const escena2 = document.getElementById("escena2");

const corazonFinal = document.getElementById("corazon-final");

const botonCarta = document.getElementById("boton-carta");
const carta = document.getElementById("carta");

const abrazo = document.getElementById("abrazo");
const tituloFinal = document.querySelector(".titulo-final");

/* =====================================================
   ESTADO
===================================================== */

let contador = 0;

const porcentajes = [15,28,41,55,70,85,100];

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
   CORAZÓN
===================================================== */

corazon.addEventListener("click",()=>{

    if(contador<mensajes.length){

        mensaje.textContent=mensajes[contador];
        mensaje.classList.remove("visible");

        setTimeout(()=>{
            mensaje.classList.add("visible");
        },50);

        corazon.classList.remove(
            "latido",
            "corazon-fuerte",
            "corazon-brillo"
        );

        void corazon.offsetWidth;

        corazon.classList.add(animaciones[contador]);

        progresoContainer.classList.remove("oculto");

        barra.style.width=porcentajes[contador]+"%";
        porcentaje.textContent=porcentajes[contador]+"%";

        contador++;

        if(contador===mensajes.length){

            setTimeout(()=>{
                instruccion.textContent="Toca por última vez ❤️";
            },600);

        }

        return;

    }

    transicion();

});

/* =====================================================
   TRANSICIÓN
===================================================== */

function transicion(){

    corazon.disabled=true;

    corazonFinal.classList.remove("oculto");

    setTimeout(()=>{

        escena1.classList.remove("activa");
        escena2.classList.add("activa");

        window.scrollTo({
            top:0,
            behavior:"auto"
        });

    },1000);

    setTimeout(()=>{
        corazonFinal.classList.add("oculto");
    },2300);

}

/* =====================================================
   CARTA
===================================================== */

botonCarta.addEventListener("click",()=>{

    carta.classList.add("abierta");

    botonCarta.textContent="💗 Carta abierta";
    botonCarta.disabled=true;

    /* aparece el título final */

    setTimeout(()=>{
        tituloFinal.classList.add("visible");
    },700);

});

/* =====================================================
   ABRAZO
===================================================== */

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            abrazo.classList.add("visible");
            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.35
});

observer.observe(abrazo);
