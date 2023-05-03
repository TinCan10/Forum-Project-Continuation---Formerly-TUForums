/*
TODO:
    -Create separate file for different routes
    -Finish rest of database
    -Alter the current html files so everything works with mongo
*/

//express stuff
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();


app.use(express.static(__dirname + "/app/css"));

//needed to process post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Mongo Stuff
//I had to follow the documentation on the mongodb website so it may look a little different from slides
const {MongoClient, ServerApiVersion} = require("mongodb");
const url = "mongodb+srv://TUForumsUName:TUForumsPassword@tuforumscluster.exn9qbx.mongodb.net/test";
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

const mydb = client.db("TUForumsPosting");
const postColl = mydb.collection("Post");
const commentColl = mydb.collection("Comment");

//functions for mongodb
async function insertPost(doc) {
    try {
        await postColl.insertOne(doc);
        console.log("inserted document!");
    } catch(err) {
        console.log(err);
    }
}




app.post('/addPost', function(req, res) {
    var doc = {
        username: req.body.username,
        title: req.body.postTitle,
        subject: req.body.post_subject,
        content: req.body.postContent
    }
    
    insertPost(doc);
    res.send("inserted");
});

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
