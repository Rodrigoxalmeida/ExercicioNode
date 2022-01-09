const { urlencoded } = require('express');
const express = require('express');
const app = express();

const PORT = 5000;
const path = require('path');

const index = require('../tarefa_express/routes/indexRoute');
const cadastro = require('../tarefa_express/routes/cadastroRoute');

const basePath = path.join(__dirname, './templates');

//ler o body
app.use(
    express.urlencoded({
        extended: true
    }),
)
app.use(express.json());
//

//arquivos estáticos
app.use(express.static('public'));

//rotas
app.use('/cadastro', cadastro);
app.use('/', index);


//pagina 404
app.use(function(req,res,next){
    res.status(404).sendFile(`${basePath}/404.html`);
});


app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})

