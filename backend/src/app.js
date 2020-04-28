const express = require('express')
const routes = require('./routes')

const app = express()



app.use(express.json())
app.use(routes)

app.listen(4001, (req, res) =>{
    console.log("Servidor rodando na porta 4001")
})