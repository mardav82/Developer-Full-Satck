// ejemplo.js

console.log('todo está bien');

var h1 = document.querySelector('h1');
h1.style.color = 'green';
h1.classList.add('azul');

// $(selector CSS) -> bootstrap
// https://api.jquery.com/addClass/
$('h1').css('color','green');
$('h1').addClass('azul');
