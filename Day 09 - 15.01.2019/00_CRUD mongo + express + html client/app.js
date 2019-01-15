// ------------------------- Requires: ---------------------------
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


// ------------------------- Create express app: -----------------
let app = express();

// ------------------------- middlewares -------------------------
// Use middlewares: (in app level - not in controller level)

// middleware 1 - converts all the body requests to json format
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// middleware 2 - allows access to all the content of the given folder (css files, js files, etc...)
app.use(express.static(__dirname+"\\client"));


// ------------------------- MongoDB ------------------------------

// Connect to MongoDB:
let uri = "mongodb://test:test@cluster0-shard-00-00-e0hcb.mongodb.net:27017,cluster0-shard-00-01-e0hcb.mongodb.net:27017,cluster0-shard-00-02-e0hcb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {console.log("We're connected to MongoDB.");})
    .catch((e) => { console.log("We're not connected to MongoDB.", e); });


// Create Model (each collection in the DB will have a new `mongoose.model`): 
var ProductCollection = mongoose.model("Product", {
    name: String,
    price: Number
});


// ------------------------- server controllers ----------------------


// add a new get request to send to the client with an html page
app.get("/products",  (request, response)=> {
    response.status(200); 
    response.sendFile(__dirname+"/client/index.html");
});


// Add product: 
app.post("/api/products",  (request, response)=> {
    var product = new ProductCollection(request.body);
    product.save();  //saves the new json object in DB
    response.status(201); // Created.
    response.send(product);
});

// Get all products:
app.get("/api/products", (request, response) => {
    ProductCollection.find({})
    .then(products => response.status(200).send(products))
    .catch(err => response.status(400).send(err));
});

// Update full product: 
app.put("/api/products", (request, response) =>{

    ProductCollection.findOne({_id: request.query.id})
    .then(product => {
        product.name = request.body.name;
        product.price = request.body.price;
        product.save();
        response.status(200).send(product);
    })
    .catch(err => response.status(400).send(err));

});

// Delete product: 
app.delete("/api/products", (request, response) => {
    ProductCollection.remove({_id: request.query.id})
    .then(() => response.status(204).send())
    .catch(err => response.status(400).send(err));
});



// Run server: 
app.listen(3000,  () => {
    console.log("Listening on http://localhost:3000");
});