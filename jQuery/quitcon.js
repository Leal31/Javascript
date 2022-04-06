$ (document).ready(() => {
  /*var z = document.getElementById("cerrar");
  z.addEventListener("click", cerrar_banner, false);
  */
  document.getElementById("cerrar").addEventListener("click", cerrar_banner, false);
  document.getElementById("banner").addEventListener("click", carrito, false);
});

function cerrar_banner() {
  $("#banner").remove();
}

function carrito() {
  $("#banner").replaceWith("<div id='sustitucion'>Agregado al carro</div>");
}
