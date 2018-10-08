const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
console.log('test')

mongoose.connect('mongodb://localhost:27017/myapp').then((doc) => {
    console.log('success to connent db')
}, (err) =>{
    console.log('fail to connent db')
})

var Schema = mongoose.Schema

var StudentSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        minlength: 8,
        maxlength: 8
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age:  Number
    
})

var Student = mongoose.model('Student',StudentSchema)

var app = express() // เรียกใช้เสมอ ถ้าใช้ express
app.use(bodyParser.json())

app.get('/get',(req,res) => {
    Student.find().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.post('/port',(req,res) =>{
    let newstudent = new Student({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })
    newstudent.save().then((doc) =>{
        res.send(doc)
    },(err) => {
        res.send(err)
    })

})

app.listen(3000,() => {
    console.log('on port 3000')
})