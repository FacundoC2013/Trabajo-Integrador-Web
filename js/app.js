// Array de imágenes
const imagenes = [
  "../img/carrousel1.jpg",
  "../img/carrousel2.jpg",
  "../img/carrousel3.png",
  "../img/carrousel4.jpg"
];

let indice = 0;
let indice2 = 1;

// Elementos del DOM
const img = document.getElementById("carousel-img");
const img2 = document.getElementById("carousel-img2");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Función para mostrar imagen actual
function mostrarImagen() {
  img.src = imagenes[indice];
  img2.src = imagenes[indice2];
}

// Botón siguiente
next.addEventListener("click", () => {
  indice++;
  if (indice >= imagenes.length) {
    indice = 0; // vuelve al primero (circular)
  }
  indice2++;
  if(indice2 >= imagenes.length){
    indice2=0;
  }
  mostrarImagen();
});

// Botón anterior
prev.addEventListener("click", () => {
  indice--;
  if (indice < 0) {
    indice = imagenes.length - 1; // vuelve al último (circular)
  }
  indice2--;
  if(indice2 < 0){
    indice2 = imagenes.length - 1;
  }
  mostrarImagen();
});

  //Rotación automática opcional
setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  indice2 = (indice + 1) % imagenes.length;
  mostrarImagen();
}, 4000); // cambia cada 4 segundos



