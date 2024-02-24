const express = require('express')//importar la libreria 
const app = express()//iniciacion de la variable para iniciar la libreria
const router = express.Router();//enrutar los servicios web
const port = 3000; //escuchar la ejecucion del servidor
const mongoose = require('mongoose');//importo la libreria moongose
mongoose.connect('mongodb+srv://miltonsabogalmintic:80248785.Milton@cluster0.9t8tm0m.mongodb.net/')
app.use(express.urlencoded({extended:true}))
app.use(express.json())



router.get('/', (req, res) => {
    res.send("Hello world")
})


router.get('/user', (req, res) => {
    //console.log(req.params.name)
    res.send("Me ejecute por get")
})

router.post('/user', (req, res) => {
//    var user = {
//        "Username": req.body.name,
//        "lastname": req.body.lastname,
//        "age": req.body.age,
//    }
//    res.send(user)
res.send("Me ejecute por post")
})

router.patch('/user', (req, res) => {
    // var user = {
    //     "Username": req.body.name,
    //     "lastname": req.body.lastname,
    //     "age": req.body.age,
        
        
   // }
    res.send("Me ejecute por patch")

})

router.delete('/user', (req, res) => {
    // var user = {
    //     "Username": req.body.name,
    //     "lastname": req.body.lastname,
    //     "age": req.body.age,
    // }
    res.send("Me ejecute por Delete")

})





app.use(router)
app.listen(port, () =>{
    console.log('listen on ' + port )

})