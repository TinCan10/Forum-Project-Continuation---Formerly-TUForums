const express = require("express");
const port = 3000;
const app = express();

app.use(express.static(__dirname + "/app/css"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/app/html/index.html");
});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/app/html/index.html");
});

app.get('/createPost.html', function(req, res) {
    res.sendFile(__dirname + "/app/html/createPost.html");
});

app.listen(port, function() {
    console.log("listening on port 3000");
})
