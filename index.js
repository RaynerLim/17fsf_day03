//load libraries
var express = require("express");

//Create an instance of the express application
var app = express();

//Configure the routes
//Check and match request

app.use("/index.html", function(req, res) {
    res.status(200);
    res.type("text/html");
    res.send("<h1>hello</h1>");
})

//Define static assets directory
app.use(express.static(__dirname + "/public"));
app.use("/images", express.static(__dirname + "/pics"));


//Create my server
//Specify port that the app will be listening to
var port = 3000;

//bind the app to the port
app.listen(port,function(){
    console.log("Application stated on port %d", port)
})