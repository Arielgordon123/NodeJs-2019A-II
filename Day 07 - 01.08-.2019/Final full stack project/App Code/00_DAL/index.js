const mySql = require('mysql');


// this is a global var - so we can use it in all the functions in this file
let connection;



function connect() {
    let connectionConfig = {
        "host": "localhost",
        "user": "root",
        "database": "cars"
    };

    //here we asiggn to the global var - the open connection that we created
    connection = mySql.createConnection(connectionConfig);
}



function runQuery(queryToDb, successCallBack, failCallBack) {
    
    let callBackToQuery = (p1, p2, p3) => { (p1)? failCallBack(p1): successCallBack(p2, p3);};

    /*
    "query" function - is a built-in function in the package "mysql" that we installed from npm.
    the "query" function is to execute sqlQueries in the DB (with the connection that we opened before)

    the "query" function gets 2 parameters:
        1) The query to run in the DB
        2) A function that will be executed when the query has finished running in the DB.
            - If the query faieled the callback will get to the first parameter an Error
            - If the query succeed the callback will get to the second and third parameters the result
    */
    connection.query(queryToDb,callBackToQuery);
}


module.exports = {
    "connect": connect,
    "runQuery": runQuery
}