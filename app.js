const express = require('express')
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
    res.send('Mi respesta desde express')
})

app.get('/servicios', (req, res) => {
    res.send('Estas en la pagina de servicios')
})

app.listen(port, () =>{
    console.log('servidor a su disposición en el puerto', port)
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/CarpetaApp")
})