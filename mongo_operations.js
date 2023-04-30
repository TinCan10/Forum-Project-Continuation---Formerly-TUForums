const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://0.0.0.0:27017';



    //if anyone is reading this, ignore this function its for testing
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    MongoClient.connect(url, function(err, client) {
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
        if(err) {
            throw err;
        }
        const db = client.db('testingdb');
        db.createCollection("post", function(err, res) {
            if(err) {
                throw err;
            }
            console.log("I did it!");
            db.close();
        });
    });
    console.log("file end!");

    
    //from the creatPost file
    function addPost(jsonPost) {
        MongoClient.connect(url, function(err, db) {
            db.collection("post").insertOne(jsonPost, function(err, res) {
                if(err) {
                    throw err;
                }
                db.close();
            });
        });
    }

    //when user clicks link on main page
    function getFullPost(postID) {
        var query = {ID: postID};
        MongoClient.connect(url, function(err, db) {
            db.collection("post").findOne(query, function(err, res) {
                if(err) {
                    throw err;
                }
                return res;
                db.close();
            });
        });
    }

    //for getting the info for the main page using 25 items as a baseline
    function mainPageList() {
        
        var display = {
            _id: 0,
            op: 1,
            title: 1,
            subject: 1,
            replyCount: 1
        };
        MongoClient.connect(url, function(err, db) {
            db.collection("post").find().toArray(function(err, postList) {
                return postList;
                db.close();
            });
        });
    }

    function increaseReplyCount() {

    }
    function getReplyCount() {

    }
    function listComment() {

    }
    function recursiveComment() {
        
    }



