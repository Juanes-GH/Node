const express = require('express')
const app = express();

const port = 3000;
// MOTOR DE LA PLANTILLA
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
    res.render("index", {Nombre: "Nombre dinamico"})
})

app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: 'Estas en la pagina de servicios'})
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo de la descripcion"
    })
})

app.listen(port, () =>{
    console.log('servidor a su disposición en el puerto', port)
})
