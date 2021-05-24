const express = require('express')
const app = express();

const port = 3000;
/* MOTOR DE LA PLANTILLA
app.set('view engiene', 'ejs');
app.set('views', __dirname + "/views");
*/
app.use(express.static(__dirname + "/capeta"))

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
    res.status(404).sendFile(__dirname + "/capet/dos.html")
})