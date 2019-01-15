// Requires:
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Create express app:
var app = express();

// Use middlewares:
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Connect to MongoDB: 
mongoose.connect("mongodb://localhost:27017/JohnBryceDB", (err) => {
    //check if connection works ok
    if (!err)
        console.log("We're connected to MongoDB.");
})


// Create Model (each collection in the DB will have a new `mongoose.model`): 
var ProductCollection = mongoose.model("Product", {
    name: String,
    price: Number
});


// ---------- CRUD ----------

// Add product: 
app.post("/api/products",  (request, response)=> {
    var product = new ProductCollection(request.body);
    product.save();
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