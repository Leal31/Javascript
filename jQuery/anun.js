/*
var anuncio = document.getElementById('anuncio');

anuncio.style.width = "500px";

anuncio.style.height = "500px"

anuncio.innerHTML = "!VENTA¡"
*/

$ (document).ready((e) => {
  $ ("#anuncio")
  .width(500).height(500)
  .text("!VENDE¡").hide()
  .fadeIn(1000);

})
