/*
JSON RULES:
1) every key is a string
2) the value can be: string, number, boolean, array, object

* a key can be only once in an object
* we can access the values with one of the current options:
        1. {object name}.{key name}
        2. {object name}["{key name}"]
*/
var obj1={
    "name":"bob",
    "age":12,
    "isMale":true,
    "hobbies": ["Math", "Programming"],
    "address":{
        "country":"Israel",
        "city":"Ariel"
    }
};


console.log("name: "+ obj1.name);             //--> name: bob
console.log("name: "+ obj1["name"]);          //--> name: bob