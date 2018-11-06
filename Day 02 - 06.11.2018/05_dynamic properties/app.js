var obj1={
    "name":"Bob"
};


console.log(obj1.name);   //--> Bob
console.log(obj1.age);    //--> undefined
console.log(obj1.isMale); //--> undefined
console.log(obj1);        //--> { name: 'Bob' }

//הוספה דינמית של מאפיין חדש לאובייקט
obj1.age=12;

console.log(obj1.name);   //--> Bob
console.log(obj1.age);    //--> 12
console.log(obj1.isMale); //--> undefined
console.log(obj1);        //--> { name: 'Bob', age: 12 }


//הוספה דינמית של מאפיין חדש לאובייקט
obj1["isMale"]=true;

console.log(obj1.name);   //--> Bob
console.log(obj1.age);    //--> 12
console.log(obj1.isMale); //--> true
console.log(obj1);        //--> { name: 'Bob', age: 12, isMale: true }