// fs = File System 
// fs is a part of the "GLOBAL" object in node
const fs = require("fs");


let prevValue=[];

if (!fs.existsSync("test.json")) {
    fs.writeFileSync("test.json","[]"); 
}
else{
    let res = fs.readFileSync("test.json").toString();
    prevValue=JSON.parse(res);
}


prevValue.push({"currentTime": Date.now()})

/*
"appendFileSync" gets 2 parameters:-
    - A path to a file
    - Content to append to this file

Synchronously overriding data to a file, 
creating the file if it does not exist.
*/
fs.writeFileSync("test.json", JSON.stringify(prevValue));
