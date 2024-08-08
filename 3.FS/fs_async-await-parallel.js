const { readFile } = require('node:fs/promises')

// Se crean todas las procesas para que se trabajen de forma paralela
Promise.all([
    readFile('../Files/archivoDeTexto.txt', 'utf-8'),
    readFile('../Files/archivoDeTexto2.txt', 'utf-8')
]).then(([text,secondtext]) => {
    console.log('primer texto:', text)
    console.log('Segundo texto:', secondtext)
})








