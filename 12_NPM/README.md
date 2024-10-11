# NPM

1. Sitio oficial: https://www.npmjs.com/

## Instalar una dependencia
`npm install NOMBRE`

## Instalar solo como dependencia de desarrollo
`npm install NOMBRE --save-dev`

## Auditorias de seguridad
`npm audit`  
`npm audit --fix` (arregla automáticamente)

## Re-generar la carpeta node_modules
`npm i` o `npm install`

## Node Sass
`node-sass -w sitio/scss -o sitio/css`

`-w` -> WATCH
`-o` -> OUTPUT

Versión / Verificar si funcionó: `node-sass -v`

`npm install node-sass --save-dev`

Global Mac y Linux:
`sudo npm install -g node-sass`

Global Windows:
`npm install -g node-sass`
