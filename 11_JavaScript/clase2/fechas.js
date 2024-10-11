
console.log('estas en fechas');

// Un objeto predeterminado de JS
var fecha = new Date();

document.write(fecha.getDate() + '/');
// Los meses en JS empizan en 0, por lo tanto siempre tengo que sumarle 1
// ¯\_(ツ)_/¯
document.write((fecha.getMonth() + 1) + '/');
document.write(fecha.getFullYear());

document.write('<br>');

document.write(fecha.getHours() + ':');
document.write(fecha.getMinutes() + ':');
document.write(fecha.getSeconds());

// hr: Horizontal row
document.write('<hr>');

// Timestamp, milisegundos que pasaron desde el 01/01/1970
// Sirve para crear valores únicos
document.write(Date.now());

