
//express stuff
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const app = express();


app.use(express.static(__dirname + "/app/css"));

//needed to process post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Mongo Stuff
//I had to follow the documentation on the mongodb website so it may look a little different from slides
const {MongoClient, ServerApiVersion} = require("mongodb");
const ObjectID = require('mongodb').ObjectId;
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



app.get('/reactIndex',async(req,res)=>{
    let results = await postColl.find().toArray();
    results.forEach(doc => console.log(doc));
    res.send(results);
})

app.post('/addPost', function(req, res) {
    var doc = {
        username: req.body.username,
        title: req.body.postTitle,
        subject: req.body.post_subject,
        content: req.body.postContent
    }
    console.log(doc + " AAAAAAAAAAAAAAAAAAAAAAA")
    insertPost(doc);
    res.send("inserted");
});

app.get('/getPost', function(req,res){
    console.log("requested document = "+req.query.id);
    let id = new ObjectID(req.query.id);
    postColl.findOne({_id: id}).then(res2 => {
        console.log("found document = "+res2);
        res.json(res2);
    })
})

app.get('/getPostList',async(req,res)=>{
    let results = await postColl.find().toArray();
    res.send(results);
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/app/html/index.html");
});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/app/html/index.html");
});

app.get('/createPost.html', function(req, res) {
    res.sendFile(__dirname + "/app/html/createPost.html");
});

app.get('/viewPost.html', function(req, res) {
    res.sendFile(__dirname + "/app/html/viewPost.html");
});

app.listen(port, function() {
    console.log("listening on port " + port.toString());
})