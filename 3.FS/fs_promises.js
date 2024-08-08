const fs = require('node:fs/promises')// a partir de Node 16, se recomienda poner node:

// Leer el fichero de manera Sincrona
console.log('------------------------')
//Leer el fichero con promesas en lugar de usar Callbacks
console.log('Leyendo el primer archivo con promises')
console.log('------------------------')
fs.readFile('../Files/archivoDeTexto.txt', 'utf-8').then(txtFilePromise => {
    console.log('primer texto:', txtFilePromise)
})
console.log('------------------------')
console.log('Hace cosas mientras lee el primer archivo....')
console.log('------------------------')

console.log('Leyendo el segundo archivo con promises')
console.log('------------------------')
fs.readFile('../Files/archivoDeTexto2.txt', 'utf-8').then(txtFilePromise2 =>{
    console.log('primer texto:', txtFilePromise2)
}) 
console.log('------------------------')