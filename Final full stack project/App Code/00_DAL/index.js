const mySql = require('mysql');

//-----------------------CONNECT---------------------

let connectionConfig = {
    "host": "localhost",
    "user": "root",
};

// this is a global var - so we can use it in all the functions in this file
let connection;

function connect() {
    try {
        //here we asiggn to the global var - the open connection that we created
        connection = mySql.createConnection(connectionConfig);
        return true;
    }
    catch (e) {
        return false;
    }
}


//-----------------------DDL-------------------------
function createDB(dbName, successCallBack, failCallBack) {

    if (!connection) {
        connect()
    }

    connection.query(`CREATE DATABASE ${dbName};`,
        (err, res) => {
            if (err) {
                failCallBack(err)
            }
            else {
                successCallBack(res);
                connection.config.database=dbName;
            }
        });
}

//-----------------------DML-------------------------
function runQuery(queryParam, successCallBack, failCallBack) {

    connection.query(queryParam,
        (err, res, extraParam) => {
            if (err) {
                failCallBack(err)
            }
            else {
                successCallBack(res, extraParam);
            }
        });
}


module.exports = {
    "connect": connect,
    "createDB": createDB,
    "runQuery": runQuery
}