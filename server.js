let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let PORT = process.env.PORT || 8080;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});