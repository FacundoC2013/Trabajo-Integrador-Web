// Array de imágenes
const imagenes = [
  "../img/carrousel1.jpg",
  "../img/carrousel2.jpg",
  "../img/carrousel3.png",
  "../img/carrousel4.jpg"
];

let indice = 0;

// Elementos del DOM
const img = document.getElementById("carousel-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Función para mostrar imagen actual
function mostrarImagen() {
  img.src = imagenes[indice];
}

// Botón siguiente
next.addEventListener("click", () => {
  indice++;
  if (indice >= imagenes.length) {
    indice = 0; // vuelve al primero (circular)
  }
  mostrarImagen();
});

// Botón anterior
prev.addEventListener("click", () => {
  indice--;
  if (indice < 0) {
    indice = imagenes.length - 1; // vuelve al último (circular)
  }
  mostrarImagen();
});

// Rotación automática opcional
setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
}, 4000); // cambia cada 4 segundos
