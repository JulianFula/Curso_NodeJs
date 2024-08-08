const { readFile } = require('node:fs/promises')

// IIFE - Inmediatly Invoked fuction Expression
;(
    async () => {
        // Leer el fichero de manera Asincrona secuencial
        console.log('------------------------')
        //Leer el fichero de manera async await secuencial
        console.log('Leyendo el primer archivo ')
        console.log('------------------------')
        const text1 = await readFile('../Files/archivoDeTexto.txt', 'utf-8')
        console.log('primer texto:', text1)

        console.log('------------------------')
        console.log('Hace cosas mientras lee el primer archivo....')
        console.log('------------------------')

        console.log('Leyendo el segundo archivo')
        console.log('------------------------')
        const text2 = await readFile('../Files/archivoDeTexto2.txt', 'utf-8')
        console.log('segundo texto:', text2)
        console.log('------------------------')
    }
)()






