$(document).ready(() => {
  // $("a[href^='http://']").addClass("linkdestacacursos");
  document.getElementById("cursos").addEventListener("click",resaltarandom, false);
});
function resaltarandom() {
  $(".random").addClass("linkdestacacursos");
}
