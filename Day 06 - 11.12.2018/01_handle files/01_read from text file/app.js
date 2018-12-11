// fs = File System 
// fs is a part of the "GLOBAL" object in node
const fs=require("fs");


/*
"readFileSync" gets 1 parameter:-
    - A path to a file

Synchronously gets the content of the requierd file
*/

let res=fs.readFileSync("test.txt").toString();


console.log(res);
