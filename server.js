const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fs = require("fs")

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


let arquivo = fs.readFileSync("./db/dados.json", "utf-8")
arquivo = JSON.parse(arquivo)
let db = arquivo.dados;

//buscar dados
app.get('/:autor', (req,res)=> {
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

app.get('/propositions/:type', (req,res)=> {
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

app.get('/', (req, res)=>{
    return res.json(db)
})

app.listen(8020, ()=> {
    console.log('Server started at http://localhost:8020')
    
})