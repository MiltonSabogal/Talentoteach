const { error } = require('console');
const express = require('express')//importar la libreria 
const app = express()//iniciacion de la variable para iniciar la libreria
const router = express.Router();//enrutar los servicios web
const port = 3000; //escuchar la ejecucion del servidor
const mongoose = require('mongoose');//importo la libreria moongose
mongoose.connect('mongodb+srv://miltonsabogalmintic:80248785.Milton@cluster0.9t8tm0m.mongodb.net/talentotech')
const UserSchema = require('./models/User')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


router.get('/', (req, res) => {
    res.send("Hello world")
})

router.get('/user', async (req, res) => {
    //console.log(req.params.name)
    let users = await UserSchema.find();
    res.json(users)
})

router.get('/user/:id', async (req, res) => {
    //console.log(req.params.name)
    var id = req.params.id
    let user = await UserSchema.findById(id);
    console.log(user)
    res.json(user)
    //traer un  usuario pasandole el email
    // const query = UserSchema.where({email: email});
    // const user = await query.findOne()
})

router.post('/user', (req, res) => {
    let user = UserSchema({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        id: req.body.id,
        password: req.body.password
    })

    user.save()

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
app.listen(port, () => {
    console.log('listen on ' + port)

})