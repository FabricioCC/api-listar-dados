const express = require('express')
const morgan = require('morgan')
const routes = express.Router()

const fs = require("fs")


const {dados} = require('../db/dados.json') 
const db = dados


//retorna todos os dados 
routes.get('/', (req, res)=>{
    return res.json(db)
})


//retorna os dados de acordo com o autor na url
routes.get('/:autor', (req,res)=> {
    let autor = req.params.autor;
    autor = autor.trim()
    autor = autor.replace(/\s/g, '').toLowerCase();
    
    let user = db.filter((user)=> {
        let nomeAutores = user.autores
        for(let i = 0; i<nomeAutores.length;i++){
            return nomeAutores[i].nomeAutor.toLowerCase().replace(/\s/g, '').includes(autor);
        }

    })
    return res.json(user)
})

//retorna os dados de acordo com o tipo de proposição
routes.get('/propositions/:type', (req,res)=> {
    let type = req.params.type;
    type.toLowerCase();
    let proposition = db.filter((proposition)=> {
        let typeProposition = proposition.descricaoTipo.toLowerCase().replace(/\s/g, '')
        console.log(typeProposition)
        console.log(type)
        return typeProposition.includes(type)
    })

    return res.json(proposition)
})





module.exports = routes