
var paisesViejo = `[
	{
		"nombre": "Argentina",
		"poblacion": 47000000,
		"colores": ["azul", "blanco", "celeste"]
	},
	{
		"nombre": "Alemania",
		"poblacion": 81000000,
		"colores": ["amarillo", "rojo", "negro"]
	},
	{
		"nombre": "Colombia",
		"poblacion": 50000000,
		"colores": ["amarillo", "azul", "rojo"]
	}
]`;

/*

console.log(paises);
// Lo transformamos en un objeto de JSON
console.log(JSON.parse(paises));

*/

// Llamar al archivo paises.json
// A través de un XHR (XMLHttpRequest)

var xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        // nombre / contenido
        var paises = JSON.parse(xhr.response);
        console.log(paises[1]);

        // Mostrar nombre del primer país en el H2
        nombre.innerHTML = paises[0].nombre;

        // Mostrar en el párrafo el siguiente texto
        // Alemania tiene 81000000 de habitantes y el segundo color de su bandera es rojo.
        contenido.innerHTML = `${paises[1].nombre} tiene ${paises[1].poblacion} habitantes y el segundo color de su bandera es ${paises[1].colores[1]}.`;
    }
});

xhr.open('GET', 'paises.json', true);
xhr.send();
