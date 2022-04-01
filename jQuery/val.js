function validar() {
  var user = document.getElementById("user").value;
  if (user == "") {
    $ ("#user").after("Rellena este campo, por Favor");
  }
}


var boton = document.getElementById("boton");

boton.onclick = (e) => {
  validar();
}
