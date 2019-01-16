
  
// requies 
var express = require("express");
var bodyParser = require("body-parser");
var friends = require('./app/data/friends.js');



// creates express server 
var app = express();

// sets port for deploy OR use 8080 on local 
var PORT = process.env.PORT || 8080;

// Set up to handle parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listening 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});