const http = require('http')
const server = http.createServer((require, response) =>{
    response.end('estoy respondidendo a tu solicitud makinacl')
})
const puerto = 3000;
server.listen(puerto, () =>{
    console.log('escuchando solicitud')
})