# PART 1 - CREATE A MONGO SERVER
We have 2 ways to run mongo server:
* `LocalHost` - run the mongo server in your local computer (server must run when we use it from node-js code)
    * Open a new Command-Line window:
    ```
    cd "C:\Program Files\MongoDB\Server\3.6\bin"
    Run: mongod
this will start MongoDB on port 27017
* Use a server in the cloud




# PART 2 - CREATE A NODE SERVER
* create a new folder and move the current path in the cli to this folder
* init the folder as a npm project.   
Command:
```
 npm init -y
 ```
* Install `express` , `body-parser` and `mongoose` package   
Command:
```
npm i -s express body-parser mongoose
```
* Add a new file named `server.js` that will contain all the code


# PART 3 - TEST THE NODE SERVER WITH `curl`

## POST request
```
curl -v -X POST -H "Content-type: application/json" -d  "{\"name\": \"milk\",\"price\":16}" localhost:3000/api/products
```

```
* Connected to localhost (::1) port 3000 (#0)
> POST /api/products HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 27
>
* upload completely sent off: 27 out of 27 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 59
< ETag: W/"3b-opV/1RMdy2ko4dyKG5Dk8yTYIAY"
< Date: Mon, 15 Oct 2018 17:29:39 GMT
< Connection: keep-alive
<
{"_id":"5bc4ce833952a622ec051ab2","name":"milk","price":16}* Connection #0 to host localhost left intact
```
## GET request
```
curl -v -X GET localhost:3000/api/products
```

```
> GET /api/products HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 205
< ETag: W/"cd-wRzKh9YInufaBU4TXUuXFMNmxrA"
< Date: Mon, 15 Oct 2018 17:43:51 GMT
< Connection: keep-alive
<
[{"_id":"5bc4ce833952a622ec051ab2","name":"milk","price":16,"__v":0},{"_id":"5bc4cf893952a622ec051ab4","name":"milk","price":88,"__v":0},{"_id":"5bc4cf943952a622ec051ab5","name":"milk","price":88,"__v":0}]*
```

## PUT request
```
curl -v -X PUT -H "Content-type: application/json" -d  "{\"name\": \"water\",\"price\":15}" localhost:3000/api/products?id=5bc4ce833952a622ec051ab2
```
```
> PUT /api/products?id=5bc4ce833952a622ec051ab2 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 28
>
* upload completely sent off: 28 out of 28 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 68
< ETag: W/"44-GxiMz0s89gBv00bDDgnfyBIdYvk"
< Date: Mon, 15 Oct 2018 17:53:21 GMT
< Connection: keep-alive
<
{"_id":"5bc4ce833952a622ec051ab2","name":"water","price":15,"__v":0}* Connection #0 to host localhost left intact
```
## DELETE request
```
curl -v -X DELETE localhost:3000/api/products?id=5bc4ce833952a622ec051ab2
```
```
> DELETE /api/products?id=5bc4ce833952a622ec051ab2 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Mon, 15 Oct 2018 17:58:05 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
```