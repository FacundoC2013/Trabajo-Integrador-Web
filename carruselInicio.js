var juegos = [
  {
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202203/1520/e6VbPQ56CBzVPgKmWdMMrICz.png",
    nombre: "Dead by Daylight",
    descripcion: "Juego multijugador de terror donde un asesino persigue a cuatro supervivientes...",
    precio: "$10.000",
    estado: "Ya disponible"
  },
  {
    imagen: "https://acdn-us.mitiendanube.com/stores/004/491/480/products/diseno-sin-titulo-73-df1e1a11364fa8c2f317223112874820-1024-1024.webp",
    nombre: "The Witcher 3: Wild Hunt",
    descripcion: "Un épico RPG de mundo abierto donde encarnás al brujo Geralt de Rivia en busca de su hija adoptiva.",
    precio: "$20.000",
    estado: "Recomendado"
  },
  {
    imagen: "https://i.blogs.es/f796b0/gta-vi-retraso/500_333.jpeg",
    nombre: "GTA VI",
    descripcion: "La nueva entrega del legendario Grand Theft Auto llega con un mapa enorme y gráficos realistas.",
    precio: "$25.000",
    estado: "Próximamente"
  },
  {
    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/TLOU_P2_Box_Art_2.png/250px-TLOU_P2_Box_Art_2.png",
    nombre: "The Last of Us II",
    descripcion: "Aventura narrativa intensa donde cada decisión puede cambiar el destino de los personajes.",
    precio: "$15.000",
    estado: "Oferta limitada"
  }
];


var actual = 0;


var imagen = document.getElementById("imagenGrande");
var nombre = document.getElementById("nombreJuego");
var descripcion = document.getElementById("descripcionJuego");
var precio = document.getElementById("precioJuego");
var estado = document.getElementById("estadoJuego");
var btnAtras = document.getElementById("atras");
var btnAdelante = document.getElementById("adelante");

function mostrarJuego() {
  var juego = juegos[actual];
  imagen.src = juego.imagen;
  nombre.textContent = juego.nombre;
  descripcion.textContent = juego.descripcion;
  precio.textContent = juego.precio;
  estado.textContent = juego.estado;
}

btnAtras.onclick = function() {
  actual--;
  if (actual < 0) {
    actual = juegos.length - 1;
  }
  mostrarJuego();
};

btnAdelante.onclick = function() {
  actual++;
  if (actual >= juegos.length) {
    actual = 0;
  }
  mostrarJuego();
};

mostrarJuego();