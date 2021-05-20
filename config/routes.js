const express = require('express')
const morgan = require('morgan')
const routes = express.Router()

const fs = require("fs")

//carrega o arquivo json que servira os dados e depois armazena em uma variavel db
const {dados} = require('../db/dados.json') 
const db = dados


//retorna todos os dados 
routes.get('/', (req, res)=>{
    return res.json(db)
})


//retorna os dados de acordo com o autor na url
routes.get('/:autor', (req,res)=> {
    let autor = req.params.autor; 
    autor = autor.replace(/\s/g, '').toLowerCase(); //retira os espacos no meio
    
    //user recebera um array filtrado do db, onde contera apenas as proposicoes com o autor buscado
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

    //recebe o tipo pelos paramentros
    let type = req.params.type;
    type.toLowerCase();//deixa tudo em lower case pra nao dar divergencia na hora de comparar

    //filtra de acordo com o tipo da proposicao
    let proposition = db.filter((proposition)=> {
        let typeProposition = proposition.descricaoTipo.toLowerCase().replace(/\s/g, '')
        console.log(typeProposition)
        console.log(type)
        return typeProposition.includes(type)//verifica se o tipo procurado contem na descricao tipo de alguma proposicao
    })

    return res.json(proposition)
})

module.exports = routes