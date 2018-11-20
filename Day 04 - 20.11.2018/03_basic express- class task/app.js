//require the export from express (stored in node_modules)
const express=require('express');

//create a "app" that represents the server
// "expres()" - is a function that Creates an Express application (server)
const app=express();


//add a response to "get" request
//the request will be to: "server ip":"server port"/test
app.get(
    "/getInfo",
    function(request,response){
  
        response.status(200);  // status 200 is for "OK"
        response.send(`
        Hello! your name is: 
        ${request.query.name}, 
        and your age is: ${request.query.age}
        `);
    }
);


//configure the port to the server
//and add a function that will run if the server runs OK
app.listen(
    4000, 
    function(){console.log("ok");}
);