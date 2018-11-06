
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


// with the "for-in" loop we can acceess all the keys in the object
for(var x in obj1){
        console.log(x + " : " + obj1[x]);
}


/*
OUTPUT:
________________________
name : bob
age : 12
isMale : true
hobbies : Math,Programming
address : [object Object]

*/