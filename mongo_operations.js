var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";


    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    MongoClient.connect(url, function(err, db) {
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
        if(err) {
            throw err;
        }
        db.createCollection("post", function(err, res) {
            if(err) {
                throw err;
            }
            console.log("I did it!");
            db.close();
        });
    });

