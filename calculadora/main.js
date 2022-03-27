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
var operador = "";
var num1 = "";
var num2 = "";
var resultado = document.getElementById("resultado");
var acumulado=0;

// Metodo que escribira numeros que se opriman
function escribirNumero(numero) {
  display.value = cifra + numero;
  cifra = display.value;

}

function operar(operador) {
  switch (operador) {
    case "+":
      acumulado = acumulado + parseInt(cifra);
      display.value = acumulado;
      cifra = "";
      break;
    case "-":
      acumulado = acumulado - parseInt(cifra);
      display.value = acumulado;
      cifra="";
      break;
    case "*":
      acumulado = acumulado * parseInt(cifra);
      display.value = acumulado;
      cifra = "";
      break;
    case "/":
      acumulado = acumulado / parseInt(cifra);
      display.value = acumulado;
      cifra = "";
    default:

  }
}

uno.onclick = function(e) {
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

suma.onclick = function (e) {
  operador = "+";
  operar(operador);
}

resta.onclick = function (e) {
  operador = "-";
  operar(operador);
}

multiplicacion.onclick = function (e) {
  operador = "*";
  operar(operador);
}

division.onclick = function (e) {
  operador = "/";
  operar(operador);
}

resultado.onclick = function(e) {
  operar(operador);
}
