const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Spentmodel = require('./models/Spending')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/budget")

app.get('/', (req, res) => {
    Spentmodel.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

app.post('/addspending', function (req, res) {
    Spentmodel.create(req.body)
        .then(user => res.json({message:"bill added successfully!"}))
        .catch(err => {
            res.json({message:err._message})})
        console.log("added!")
});


app.listen(3000, () => {
    console.log('listening on port 3000')
})