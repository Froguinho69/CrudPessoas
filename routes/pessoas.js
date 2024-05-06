const express = require('express')
const router = express.Router()

let  estruturaPessoa = [
    {
        id: 1,
        nome: "Natalia",
        idade: 20,
        email: "natalia@email.com",
        telefone: 6191111-1111
    },
    {
        id: 2,
        nome: "Suelen",
        idade: 24,
        email: "suelen@email.com",
        telefone: 6192222-2222
    },
    {
        id: 3,
        nome: "Cassio",
        idade: 22,
        email: "cassio@email.com",
        telefone: 6193333-3333
    },
    {
      id: 4,
        nome: "Marcele",
        idade: 19,
        email: "marcele@email.com",
        telefone: 6194444-4444
    }
]

router.get('/pessoas', (req, res) => {
    res.json(estruturaPessoa)
})

router.get('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    const pessoa = estruturaPessoa[index]
    res.json(pessoa)
})

router.post('/pessoas', (req, res) =>{
    const novaPessoa = req.body

    estruturaPessoa.length

    const pessoa = {
        id: estruturaPessoa.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    estruturaPessoa.push(pessoa)
    res.status(201).json({mensagem: "Pessoa cadastrada!"})
})

router.delete('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    estruturaPessoa.splice(index, 1)
    res.json({mensagem: "Pessoa excluida!"})
})

router.put('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)

    const novosDados = req. body

    const pessoaAlterada = {
        id: id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    estruturaPessoa[index] = pessoaAlterada

    res.json({mensagem: "Pessoa atualizada!"})
})

module.exports = router