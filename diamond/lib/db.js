import env from './../dbenv'

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: env.MYSQL_HOST,
    database: env.MYSQL_DATABASE,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD
  });


  connection.connect((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД!');
    } else {
        return console.log('Подлючение успешно!');
    }
})

const sql = `SELECT * FROM users`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
 
connection.end();

module.exports = connection