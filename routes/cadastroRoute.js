const express = require('express');
const router = express.Router();

const path = require('path');
const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`);
})

router.post('/save', (req, res) => {

    //console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;
    
    if (!name || !age) {
        console.log("Erro, digite novamente os dados!")
    } else {
        console.log(`o nome do usuário é ${name} e ele tem ${age} anos`);
    }

    res.sendFile(`${basePath}/cadastro.html`);

})

router.get('/:id', (req,res)=>{
    const id = req.params.id;

    console.log(`estamos buscando pelo usuario: ${id}`);
    res.sendFile(`${basePath}/buscando.html`);
})

module.exports = router;