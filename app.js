const express = require('express')
const checkListRouter = require('./src/routes/checklist')
require('./config/database')

const app = express() //todos os metodos disponiveis no servidor atraves da constante app
app.use(express.json())

app.use('/checklists', checkListRouter)

app.listen(3000, () => {
    console.log('O servidor foi iniciado!') // startando server

})