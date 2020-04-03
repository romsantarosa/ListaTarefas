const express = require('express')
const checkListRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
const path = require('path')
require('./config/database')

const app = express() //todos os metodos disponiveis no servidor atraves da constante app
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))


app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklists', checkListRouter)

app.listen(3000, () => {
    console.log('O servidor foi iniciado!') // startando server

})