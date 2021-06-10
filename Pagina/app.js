const express = require('express')
const app = express();

const port = 3000;

//conextion to base of data
const mongoose = require('mongoose');

const user = '';
const password = '';
const uri = '';

mongoose.connect('uri', {useNewUrlParser: true, useUnifiedTopology: true});

.then(() => console.log('the base of data is correct'));
.catch(e => console.log(e));

// TEMPLATE MOTOR
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname + "/public"))

//web routes
app.use("/", require('./router/routerWeb'))
app.use('/mascotas', require('./router/mascotas'))


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo de la descripcion"
    })
})

app.listen(port, () =>{
    console.log('servidor a su disposición en el puerto', port)
})
