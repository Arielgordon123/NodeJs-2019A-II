const express = require('express');
const bodyParser = require('body-parser');

const bll = require('./../01_BLL/index');

const app = express();



// Use middlewares (app level - not controller level):
// this middleware takes the content of the request`s body, 
//and parses it to json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/home", (req, res) => {
    res.status(200);
    res.sendfile(__dirname + "/views/index.html")
})


app.get("/insert", (req, res) => {
    bll.createTableCars();
    bll.insertCars();
    res.status(200);
    res.send("ok");
})




app.listen(3000, () => {
    bll.connectDb();
    bll.createNewDB();
    console.log("Server runs OK");
})
