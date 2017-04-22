// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create express server
var app = express();

// set up initial port
var PORT = process.env.PORT || 8080;

// the following is so body parser can read the data sent to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('app'));

// routing
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});