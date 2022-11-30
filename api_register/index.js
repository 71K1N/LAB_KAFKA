const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { sendMessage } = require('./util/kafka')

const PORT = 3000

app.use(express.json())

//EMPILHAR LANCES
app.post('/message', (req, res, next) => {
    sendMessage(JSON.stringify(req.body))
        .then((result) => {
            res.status(201).send("Mensagem empilhada")
        })
        .catch((err) => { res.send(err) })
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})
