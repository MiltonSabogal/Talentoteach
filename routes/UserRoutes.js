const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserSchema = require('../models/User')

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

router.post('/user', async (req, res) => {
    //Crear un usuario
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    let user = UserSchema({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        id: req.body.id,
        password: hashedPassword
    })

    user.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        if(err.code == 11000){
            res.send({"status" : "error", "message" :"El correo ya fue registrado"})      
        }else{
            res.send({"status" : "error", "message" :err.message})      
        }
    })
})

router.patch('/user/:id', (req, res) => {
    var id = req.params.id

    var updateUser = {

        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        id: req.body.id

    }
    UserSchema.findByIdAndUpdate(id, updateUser, { new: true }).then((result) => {
        res.send(result)

    }).catch((error) => {
        console.log(error)
        res.send('error actualizando el registro')

    })
})

router.delete('/user/:id', (req, res) => {
    var id = req.params.id
    UserSchema.deleteOne({ _id: id }).then(() => {

        res.json({ "status": "success", "message": "User deleted successfully" })

    }).catch((error) => {
        console.log(error)
        res.json({ "status": "failed", "message": "Erro deleting user" })
    })

})
//Ejemplo 2
// var name = req.params.name
// var email = req.params.email
// var query;
// if(email != null){
//     query = {name: name, email: email}
// }else{
//     query = {name: name}
// }
// //Puedo establecer cualquier parametro para eliminar
//     UserSchema.deleteOne(query).then(() => {
//         res.json({"status": "success", "message": "User deleted successfully"})
//     }).catch((error) => {
//         console.log(error)
//         res.json({"status": "failed", "message": "Error deleting user"})
//     })

module.exports = router