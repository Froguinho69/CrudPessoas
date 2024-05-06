const express = require('express')
const app = express()

app.use(express.json())

const pessoas = require('./routes/pessoas')
app.use(pessoas)

app.listen(3000, () =>{
    console.log("Aplicação rodando.")
    
})