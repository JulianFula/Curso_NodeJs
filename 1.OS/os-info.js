//require native modulo os 
const os = require('node:os')
console.log('Informacion del sistema operatio')
console.log('________________________________')
console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Uptime', os.uptime() / 60 / 60)