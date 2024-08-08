const fs = require('node:fs')// a partir de Node 16, se recomienda poner node:

// Informacion del fichero de manera Sincrona
const stats = fs.statSync('./archivoDeTexto.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size, // Tamaño en bytes
)
// Leer el fichero de manera Sincrona
console.log('Leyendo el primer archivo de manera Sincrona con Callbacks')
console.log('------------------------')
const txtFileSync = fs.readFileSync('../Files/archivoDeTexto.txt', 'utf-8')
console.log(txtFileSync)

console.log('Leyendo el segundo archivo de manera Sincrona con Callbacks')
console.log('------------------------')
const txtFileSync2 = fs.readFileSync('../Files/archivoDeTexto2.txt', 'utf-8')
console.log(txtFileSync2)
console.log('------------------------')
//Leer el fichero de manera Asicrona
console.log('Leyendo el primer archivo de manera Asincrona con Callbacks')
console.log('------------------------')
const txtFileAsync = fs.readFile('../Files/archivoDeTexto.txt', 'utf-8', (err,txtFileAsync)=>{ //ejecuta este callback al terminar de leer el archivo
    console.log(txtFileAsync)
})
console.log('Hace cosas mientras lee el primer archivo....')
console.log('Leyendo el segundo archivo de manera Asincrona con Callbacks')
console.log('------------------------')
const txtFileAsync2 = fs.readFile('../Files/archivoDeTexto2.txt', 'utf-8', (err,txtFileAsync2)=>{ //ejecuta este callback al terminar de leer el archivo
    console.log(txtFileAsync2)
})