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
    pass: {
        type: String,
        minlength: 8,
        maxlength: 8
    },
    firstName: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    Tel:{
        type: String,        
    }
    
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

app.post('/post',(req,res) =>{
    let newstudent = new Student({
        id: req.body.id,
        pass: req.body.pass,
        firstName: req.body.firstName,      
        age: req.body.age,
        Tel: req.body.Tel
    })
    newstudent.save().then((doc) =>{
        res.send(doc)
    },(err) => {
        res.send(err)
    })

})


var driverSchema = new Schema({
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
    at:{
        type: String,
    },
    Car:{
        type: String,
    },
    Tel:{
        type: String,        
    },
    picName: {
        type: String, 
    }
    
})

var driver = mongoose.model('driver',driverSchema)


app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/get2',(req,res) => {
    driver.find().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.post('/post2',(req,res) =>{
    let newdriver = new driver({
        id: req.body.id,        
        firstName: req.body.firstName, 
        at: req.body.at,     
        car: req.body.car,
        Tel: req.body.Tel,
        picName:req.body.picName
    })
    newdriver.save().then((doc) =>{
        res.send(doc)
    },(err) => {
        res.send(err)
    })

})



var DataSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,        
    },
    temp: {
        type: Nunber,
        required: true
    },
    lat: {
        type: String
    },
    long:{
        type: String        
    }
    
})

var Data = mongoose.model('Data',DataSchema)


app.use(bodyParser.json())

app.get('/get3',(req,res) => {
    Student.find().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.post('/post3',(req,res) =>{
    let newData = new Data({
        id: req.body.id,
        temp: req.body.temp,      
        lat: req.body.lat,
        long: req.body.long
    })
    newData.save().then((doc) =>{
        res.send(doc)
    },(err) => {
        res.send(err)
    })

})


app.listen(3000,() => {
    console.log('on port 3000')
})