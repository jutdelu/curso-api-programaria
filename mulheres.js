const express = require('express') //iniciando o express
const router = express.Router() //configurando rota
const { v4:uuidv4 } = require('uuid') //biblioteca para criação de id

const app = express()// iniciando app
app.use(express.json)
const porta = 3333 //criando porta

//criando lista mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora',
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    },
    {
        id: '3',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    }
]

//get
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//post
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)

    response.json(mulheres)
}

//patch
function corrigeMulher(request, response) {
    function encontraMulher(mulher){
        if(mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }
    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }
    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }    

    response.json(mulheres)
}

//delete
function deletaMulher (request, response) {
    function todasMenosEla(mulher) {
        if (mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get('/mulheres', mostraMulheres)) //configura get /mulheres
app.use(router.post('/mulheres', criaMulher)) //configura post /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configura patch
app.use(router.delete('/mulheres/:id', deletaMulher)) //configura delete

//porta
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}
app.listen(porta, mostraPorta) //servidor ouvindo porta