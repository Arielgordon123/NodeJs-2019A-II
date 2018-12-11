// fs = File System 
// fs is a part of the "GLOBAL" object in node
const fs=require("fs");


/*
"appendFileSync" gets 2 parameters:-
    - A path to a file
    - Content to append to this file

Synchronously append data to a file, 
creating the file if it does not exist.
*/

fs.appendFileSync("test.txt","line1\n");
fs.appendFileSync("test.txt","line2\n");
fs.appendFileSync("test.txt","line3\n");
