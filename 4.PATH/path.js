const path = require('node:path')

// Barra separadora de carpetas segun SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

// Conseguir el nombre del fichero con la extension
const base = path.basename('/tmp/secret-file/password.txt')
console.log(base)

// Conseguir el nombre del fichero sin la extension
const fileName = path.basename('/tmp/secret-file/password.txt', '.txt')
console.log(fileName)

// Conseguir la extension de un fichero
const extension = path.extname('/tmp/secret-file/password.txt', '.txt')
console.log(extension)
