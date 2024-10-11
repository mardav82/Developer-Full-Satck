
// Si un elemento en el HTML tiene un ID entonces se crea automáticamente una variable con ese mismo elemento en el JavaScript
// console.log(parrafo);

// var parrafo = "asdf";

// Con getElementById() podemos seleccionar elementos por su ID y guardarlos en cualquier variable
var superId = document.getElementById("parrafo");
// console.log(superId);

// getElementsByTagName()
// getElementsByClassName()

// Seleccionar el H1 con querySelector
var tituloPrincipal = document.querySelector("body");
// console.log(tituloPrincipal);

// Seleccionar algún elemento con clase .titulo
// <titulo></titulo>
// Si hay varios del mismo tipo, devuelve solo el primero
var elementoTitulo = document.querySelector(".titulo");
// console.log(elementoTitulo);

// NodeList de elementos... es un array
// .length
var titulos = document.querySelectorAll(".titulo");
console.log(titulos);

// Document Object Model
