# Git

## Terminales recomendadas

1. Windows Terminal (descargar desde Microsoft Store)
2. Hyper (Mac, Linux y Windows): https://hyper.is/
3. iTerm2 (Mac): https://iterm2.com/

## Comandos de Git

Crear un repositorio local
`git init`

"Contame cómo estamos"
`git status`

Agregar a la "caja" el archivo ejemplo.html
`git add ejemplo.html`

Agregar solo archivos terminados en .css
`git add *.css`

Agregar TODOS los archivos disponibles
`git add .`

Cerrar la caja y ponerle el mensaje
VIM (Para salir :q)
`git commit -m "Envío mi archivo de ejemplo"`

Agregar el remoto (Copiando código de GitHub)
`git remote add ...`

Enviar por primera vez
`git push -u origin master`

Enviar general
`git push`

Traer cambios
`git pull`

Devuele listado de branches y muestra la rama actual
`git branch`
	
Crea un branch nuevo "cambio-color" y mueve el "puntero" a ese branch
`git checkout -b cambio-color`

Mover "puntero" a branch NOMBRE
`git checkout NOMBRE`


## Configuración de Git

Si la computadora es mia:
`git config --global user.name "nombreUsuario"`

`git config --global user.email "johndoe@example.com"`


Si la computadora NO es mia:
`git config user.name "nombreUsuario"`

`git config user.email "johndoe@example.com"`


Verificar que haya funcionado bien la configuación:

`git config --get-all user.name`

`git config --get-all user.email`







