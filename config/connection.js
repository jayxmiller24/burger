let mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "opal0415",
    database: "Burgers_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;