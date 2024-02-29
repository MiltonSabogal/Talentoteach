const { error } = require('console');
const express = require('express')//importar la libreria 
const app = express()//iniciacion de la variable para iniciar la libreria
const router = express.Router();//enrutar los servicios web
const port = 3000; //escuchar la ejecucion del servidor
const mongoose = require('mongoose');//importo la libreria moongose
mongoose.connect('mongodb+srv://miltonsabogalmintic:80248785.Milton@cluster0.9t8tm0m.mongodb.net/talentotech')
const UserRoutes = require('./routes/UserRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



router.get('/', (req, res) => {
    res.send("Hello world")
})

app.use(router)
app.use('/', UserRoutes)
app.listen(port, () => {
    console.log('listen on ' + port)

})