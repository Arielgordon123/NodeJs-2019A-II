# How to create a basic express app  
* craete a new folder for the node js app:
```bash
mkdir test
```

* change your path to this folder:
```bash
cd test
```

* now, init this app with a package.json folder, with the following command:
```bash
npm init -y
```

* install localy to your nodejs app the express pkg:
```bash
npm i -s express
```

* create in the "test" folder, a new file, named `app.js`
* insert into `app.js` the following code:
```javascript
const express = require('express');

//The express() function is a top-level function exported by the express module.
//Creates an Express application. 
const app = express();

app.get("/test", function(req,res){
  res.send("<h1>Welcome to our first app</h1>")
});

app.listen(9000,  function(){console.log("server is listening on port 9000");});
```

* run the app with this command:
```bash
node app.js
```

* test the app with curl command:
```bash
curl -v http://localhost:9000/test
```
```
* TCP_NODELAY set
* Connected to localhost (::1) port 9000 (#0)
> GET /test HTTP/1.1
> Host: localhost:9000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 33
< Date: Thu, 04 Oct 2018 17:28:04 GMT
<
<h1>Welcome to our first app</h1>
```
