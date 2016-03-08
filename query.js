var mysql = require('mysql');

var connection;

exports.makeConnection = function(){
  connection  = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "Dota_Database"
  });
  connection.connect();
}

exports.getAllData = function(callback){
  exports.makeConnection();
  connection.query("SELECT * FROM test",function(err, rows,fields){
    if(err) throw err;
    // var res = [];
    // console.log(rows);
    // for(result in rows){
    //     res.push(result);
    // }
    //
    // console.log("Result : " + resultStr);
    callback(rows);
  });
  connection.end();

}
