const express = require('express')
const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send('Mi respesta desde express')
})

app.get('/servicios', (req, res) => {
    res.send('Estas en la pagina de servicios')
})

app.listen(port, () =>{
    console.log('servidor a su disposición en el puerto', port)
})