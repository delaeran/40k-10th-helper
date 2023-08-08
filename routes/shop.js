const express = require('express');
const path = require('path');

const router =  express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: "nhusbiafofwadm.mysql.db",
  user: "nhusbiafofwadm",
  password: "V2LqGCR6SjaubVU"
});


connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) 
    {
        router.get("/",(req,res,next) => {
            res.send("Error: ", error)
        })
    }
    router.get("/",(req,res,next) => {
        res.send("Connected!", results[0].solution)
    })
  });
/*
con.connect(function(err) {
    if (err){
        throw err;
    } 
    router.get("/",(req,res,next) => {
        res.send("Connected!")
        res.send(JSON.stringify(con));
    })
}); 
*/




module.exports = router;