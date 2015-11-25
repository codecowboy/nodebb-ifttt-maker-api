/**
 * Created by codecowboy on 18/11/2015.
 */
var express = require('express');
var app = express();
var nodeBBRequest = require('request');

var bearerToken = '';
var nodeBBUrl = '';

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5


//app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({})); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/tweet', function ( req, res, next) {
   // console.log(req.body);

    var options = {
        url: nodeBBUrl +'/api/v1/topics',
        headers: {
            'Authorization': 'Bearer '+ bearerToken
        },
        form: {
            title: req.body.title,
            content:req.body.embedCode,
            cid:10,
            _uid:1


        }
    };

    nodeBBRequest.post(options, function(err,httpResponse,body){
       // console.log(httpResponse)
    });




    res.send('Success');

});

var server = app.listen(3000, function () {


    var host = server.address().address;
    var port = server.address().port;
    console.log(server.address());

    console.log('Example app listening at http://%s:%s', host, port);
});
