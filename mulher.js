const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
    response.json({
        nome: 'Juliana',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQFUG-7lj58aRQ/profile-displayphoto-shrink_200_200/0/1573824119874?e=1722470400&v=beta&t=BxMJ5fQqvWX3ObnAOq5KLeuHgnkXuAf48u33g1urDWE',
        minibio: 'vida loka também ama'
    })
}

function mostraPorta () {
    console.log ('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)