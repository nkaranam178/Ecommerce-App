const mysql = require('mysql2')
console.log("environment vars " + JSON.stringify(process.env) )

console.log("Connect to DB")
// connection.connect()

exports.handler = async (event,context,callback) => {
    // TODO implement
    const connection = mysql.createConnection({
        host: process.env.DBHostname,
        user: process.env.DBUser,
        password: process.env.DBPassword,
        database: process.env.DBName,
        port: 3306
    });
    connection.connect(function(err) {
        if(err) {
            console.log("ERROR CONNECTING " + err.stack)
            return
        }
        console.log("CONNECTION SUCCESFUL")
    } );
    context.callbackWaitsForEmptyEventLoop = false;
    console.log("h  ello world")
    let cardNo
    let expireDate
    console.log("EVENT = " + (event.body) )
    if (event.body) {
        const body = JSON.parse(event.body)
        cardNo = body.cardNo
        expireDate = body.expireDate
        console.log(cardNo)
        console.log(expireDate)
    }
    let query = "SELECT * FROM users"
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Laaaaambda!'+cardNo+expireDate)
    }
    connection.query(query, function(err, result) {
        if(err) {
             console.log(err.stack);
             return response;
        }
        if(result.length == 0) {          
             return response;
        }
        else{
            return response;
        }
      });
   
};