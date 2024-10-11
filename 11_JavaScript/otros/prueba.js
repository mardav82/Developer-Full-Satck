// require ~ cargar o importar archivo
// ./ Misma carpeta y archivo local
// const funciones = require('./funciones.js');

// Tree shaking
// Cargar solamente las cosas necesarias
const { sumar } = require('./funciones.js');

// const suma = funciones.sumar(345, 34)
const suma = sumar(345, 34);

console.log('La suma es', suma);
