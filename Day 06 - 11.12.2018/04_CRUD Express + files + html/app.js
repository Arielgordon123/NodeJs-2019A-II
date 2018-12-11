const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();

if (!fs.existsSync("people.json")) {
    fs.writeFileSync("people.json", "[]");
}

// Use middlewares (app level - not controller level):
// this middleware takes the content of the request`s body, 
//and parses it to json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// GET FROM THE SERVER THE PEOPLE LIST THAT IS STORED IN THE FILE
app.get("/home",
    (request, response) => {
        // "__dirname" is a property of the "GLOBAL" object in node
        // and contains the path to the current directory
        response.sendFile(__dirname+"/index.html");
    }
);

// GET FROM THE SERVER THE PEOPLE LIST THAT IS STORED IN THE FILE
app.get("/all",
    (request, response) => {
        let res = fs.readFileSync("people.json").toString();
        response.status(200); // 200 is OK 
        response.send(JSON.parse(res));
    }
);


// ADD A NEW PERSON TO THE LIST
app.post("/add",
    (request, response) => {
        let res = fs.readFileSync("people.json").toString();
        let peopleArray = JSON.parse(res);

        //push - is a built-in function in js
        //that adds a new element to the end of the array
        peopleArray.push(request.body);

        fs.writeFileSync("people.json", JSON.stringify(peopleArray));

        response.status(201); // 201 is CREATED 
        response.send({ "message": "added successfully to the list" });
    }
);


// UPDATE A PERSON IN THE LIST - BY THE NAME THAT IS GIVEN IN THE URL
// THE DETAILS OF THE UPDATE ARE IN THE BODY
app.put("/edit/:p",
    (request, response) => {

        let res = fs.readFileSync("people.json").toString();
        let peopleArray = JSON.parse(res);

        //Returns the value of the first element in the array 
        //where predicate is true, and undefined otherwise.
        let person = peopleArray.find(e => e.name == request.params.p);

        if (person != undefined) {
            person.age = request.body.age;
            fs.writeFileSync("people.json", JSON.stringify(peopleArray));
        }

        response.status(200); // 200 is OK
        response.send();
    }
);


// DELETE A PERSON FROM THE LIST - BY THE NAME THAT IS GIVEN IN THE URL
app.delete("/delete/:p",
    (request, response) => {

        let res = fs.readFileSync("people.json").toString();
        let peopleArray = JSON.parse(res);
        
        //Returns the elements of an array that meet the condition 
        //specified in a callback function.
        peopleArray = peopleArray.filter(e => e.name != request.params.p);
        
        fs.writeFileSync("people.json", JSON.stringify(peopleArray));
        
        response.status(204); // 204 is EMTY RESPONSE 
        response.send();
    }
);


app.listen(4500, () => { console.log("Server is running in port 4500") });