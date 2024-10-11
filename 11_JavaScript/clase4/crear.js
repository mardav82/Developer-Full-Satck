
var btn_agregar = document.getElementById("btn-agregar");

btn_agregar.addEventListener("click", () => {
    // Creamos el elemento
    var item = document.createElement("li");
    // Le guardamos el contenido del usuario
    var cosa_usuario = cosa.value;
    item.innerHTML = cosa_usuario;

    // Agregar ese elemento <li> a la #lista
    lista.appendChild(item);
});
