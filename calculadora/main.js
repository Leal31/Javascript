// Cada vez que se recargue la pagina se pondra el display en 0
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("display").value = 0;
});

// Variables
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");
var cifra = "";
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var display = document.getElementById("display");
var resultado = document.getElementById("resultado");
var acumulado=0;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
// Por si no hemos hecho operaciones previas
var poperacion = true;
var borrar = document.getElementById("borrar"); // variable que borrara operacion alguna vez hecha;
// Metodo que escribira numeros que se opriman
function escribirNumero(numero) {
  display.value = cifra + numero;
  cifra = display.value;

}
// Funciones de teclas las cuales funcionaran en base al numero que representen
// La idea es que al presionar los botones se escriban en la variable "display"
uno.onclick = (e) => {
  escribirNumero(1);
}

dos.onclick = function(e) {
  escribirNumero(2);
}

tres.onclick = function(e) {
  escribirNumero(3);
}

cuatro.onclick = function(e) {
  escribirNumero(4);
}

cinco.onclick = function(e) {
  escribirNumero(5);
}

seis.onclick = function(e) {
  escribirNumero(6);
}

siete.onclick = function(e) {
  escribirNumero(7);
}

ocho.onclick = function(e) {
  escribirNumero(8);
}

nueve.onclick = function(e) {
  escribirNumero(9);
}

cero.onclick = function(e) {
  escribirNumero(0);
}

borrar.onclick = function(e) {
  display.value = 0;
  acumulado = 0;
  cifra = "";
}
// A la hora de darle al simbolo "sumar"
suma.onclick = function (e) {
    // verifica si se ha hecho una operación previa
    if (restar) {
      acumulado = acumulado - parseInt(cifra);
      display.value = acumulado;
    }  else if (multiplicar){
      acumulado = acumulado * parseInt(cifra);
      display.value = acumulado;
    } else if (dividir) {
      acumulado = acumulado / parseInt(cifra);
      display.value = acumulado;
    // Si no se ha hecho una operación previa se hara la operación que concuerde con el simbolo
    // se aplicara a las siguientes funciones parecidas
    } else {
      acumulado = acumulado + parseInt(cifra);
      display.value = acumulado;
    }

  cifra = "";
  restar = false;
  multiplicar = false;
  dividir = false
  sumar = true;
  poperacion = false;
}

resta.onclick = function (e) {
  // Si se ha hecho operacion previa se haran lo mismo que en la funcion suma()
  if (poperacion == false) {
    if (sumar) {
      acumulado = acumulado + parseInt(cifra);
      display.value = acumulado;
    } else if (multiplicar){
      acumulado = acumulado * parseInt(cifra);
      display.value = acumulado;
    } else if (dividir) {
      acumulado = acumulado / parseInt(cifra);
      display.value = acumulado;
    } else {
      acumulado = acumulado - parseInt(cifra);
      display.value = acumulado;
    }
  // Si es la primera operacion se va a cambiar el acumulado = 0 por lo que este en el display
  } else {
    acumulado = parseInt(cifra);
    poperacion = false; // Se desactiva variable poperacion
  }
  cifra = "";
  sumar = false;
  restar = true;
  multiplicar = false;
  dividir = false;
}

multiplicacion.onclick = function (e) {
  if (poperacion == false) {
    if (sumar) {
      acumulado = acumulado + parseInt(cifra);
      display.value = acumulado;
    } else if (restar){
      acumulado = acumulado - parseInt(cifra);
      display.value = acumulado;
    } else if (dividir) {
      acumulado = acumulado / parseInt(cifra);
      display.value = acumulado;
    } else {
      acumulado = acumulado * parseInt(cifra);
      display.value = acumulado;
    }
  } else {
    acumulado = parseInt(cifra);
    poperacion = false;
  }
  cifra = "";
  sumar = false;
  restar = false;
  multiplicar = true;
  dividir = false;
}

division.onclick = function (e) {
  if (poperacion == false) {
    if (sumar) {
      acumulado = acumulado + parseInt(cifra);
      display.value = acumulado;
    } else if (restar){
      acumulado = acumulado - parseInt(cifra);
      display.value = acumulado;
    } else if (multiplicar) {
      acumulado = acumulado * parseInt(cifra);
      display.value = acumulado;
    } else {
      acumulado = acumulado / parseInt(cifra);
      display.value = acumulado;
    }
  } else {
    acumulado = parseInt(cifra);
    poperacion = false;
  }
  cifra = "";
  sumar = false;
  restar = false;
  multiplicar = false;
  dividir = true;
}

resultado.onclick = function(e) {
  if (sumar) {
    display.value = acumulado + parseInt(cifra);
  } else if (restar) {
    display.value = acumulado - parseInt(cifra);
  } else if (multiplicar) {
    display.value = acumulado * parseInt(cifra);
  } else if (dividir) {
    display.value = acumulado / parseInt(cifra);
  }
  acumulado = parseInt(display.value);
  cifra = 0;
}
