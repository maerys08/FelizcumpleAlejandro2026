let fotos = [
  "img/foto1.jpeg",
  "img/foto2.jpeg",
  "img/foto3.jpeg",
  "img/foto4.jpeg"
];

let indiceActual = 0;

function abrirModal(indice) {
  indiceActual = indice;
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = fotos[indiceActual];
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function cambiarFoto(direccion) {
  indiceActual += direccion;

  if (indiceActual < 0) {
    indiceActual = fotos.length - 1;
  } else if (indiceActual >= fotos.length) {
    indiceActual = 0;
  }

  document.getElementById("modalImg").src = fotos[indiceActual];
}

/* Modal de video */
function abrirVideo(ruta) {
  let modalVideo = document.getElementById("modalVideo");
  let player = document.getElementById("modalVideoPlayer");

  player.src = ruta;
  modalVideo.style.display = "flex";
  player.play();
}

function cerrarVideo() {
  let modalVideo = document.getElementById("modalVideo");
  let player = document.getElementById("modalVideoPlayer");

  player.pause();
  player.currentTime = 0;
  modalVideo.style.display = "none";
}

/* Acordeón */
let acordeon = document.querySelector(".acordeon");
let panel = document.querySelector(".panel");

acordeon.addEventListener("click", function () {
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});