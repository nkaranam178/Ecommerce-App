const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'database-1.cnwqp09d6ffv.us-east-2.rds.amazonaws.com',
    user: 'ecomdbuser',
    password: 'ecom1234',
    database: 'ecomdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


exports.handler = async (event,context,callback) => {
    // TODO implement
    
    console.log("here")
    let cardNo
    let expireDate
    console.log("EVENT = " + JSON.stringify(event) )
    if (event) {
        cardNo = event.cardNo
        expireDate = event.expireDate
        console.log(cardNo)
        console.log(expireDate)
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Laaambda!'+cardNo+expireDate),
    };
    return response;
};