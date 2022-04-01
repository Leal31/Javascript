$ (document).ready((e) => {
  // para reemplazar$ ("#errores").html("<p> Hay errores en el Formulario</p>");
  // Para añadir Antes $ ("#errores").append("<p> Hay errores en el Formulario</p>");
  $ ("#errores").prepend("<p> Hay errores en el Formulario</p>"); // Para añadir despues
  // Para añadir antes de la etiqueta $ ("#errores").before("<p> Hay errores en el Formulario</p>");
  // Para añadir despues de la etiqueta $ ("#errores").after("<p> Hay errores en el Formulario</p>");
  // Sustituye sin html $ ("#errores").text(" Hay errores en el Formulario");

});
