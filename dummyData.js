var express = require('express')
var cors = require('cors')
var app = express();

console.log("Application is running");


app.use(cors())
var foods = [
    { "id": 1, "name": "Donuts" },
    { "id": 2, "name": "Pizza" },
    { "id": 3, "name": "Tacos" }
  ];
app.get('/data',function(req,res){
    res.json(foods)
})

console.log("Listening on port 8000");

app.listen(8000)