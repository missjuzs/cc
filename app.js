const express = require('express')
const mongodb = require('mongodb')

var app = express() // เรียกใช้เสมอ ถ้าใช้ express

let student = [
    {
        id : 'st1',
        name: 'aaa'
    } , 
    {
        id : 'st2',
        name: 'bbb'
    } , 
    {
        id : 'st3',
        name: 'ccc'
    }
]

app.get('/',(req , res) =>{
    res.send('hello')
})

app.get('/all-student',(req,res) => {
    res.send(student)
})

app.get('/all-student/id/:id',(req,res) => {
    let studentID = req.params.id
    for(let i=o;i<student.length;i++){
        if(studentID == student[i].id){
            ress.send(student[i])
            break
        }
    }
    res.send('not found id :'+ studentID)
})

app.get('/all-student/name/:name',(req,res) => {
    let studentName = req.params.name
    for(let i=o;i<student.length;i++){
        if(studentName == student[i].Name){
            ress.send(student[i])
            break
        }
    }
    res.send('not found Name :'+ studentName)
})

app.listen(3000,() => {
    console.log('on port 3000')
})