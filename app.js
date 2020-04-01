const express = require('express')

const app = express() //todos os metodos disponiveis no servidor atraves da constante app

app.get('/',(req, res) => {
    res.send('<h1>Minhas listas de tarefas</h1>') // setando as rotas
})

app.listen(3000, () => {
    console.log('O servidor foi iniciado!') // startando server

})