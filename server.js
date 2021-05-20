const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./config/routes')

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(8020, ()=> {
    console.log('Server started at http://localhost:8020')
    
})