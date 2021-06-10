const express = require('express')
const router = express.Router();

router.get('/', (raq, res) =>{
    res.render('mascotas', {
        arrayMascotas: [
            {id: '123', name:'timoti', descriptión:'descripcion de timoti'},
            {id: '127', name:'loreft', descriptión:'descripcion de loreft'}
        ]
    })
})

module.exports = router;