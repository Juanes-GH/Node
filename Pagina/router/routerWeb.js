const express = require('express')
const router = express.Router();
 
router.get('/', (req, res) =>{
    res.render("index", {Nombre: "Nombre dinamico"})
})

router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: 'Estas en la pagina de servicios'})
})

module.exports = router;