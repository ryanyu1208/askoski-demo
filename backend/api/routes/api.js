var express = require('express');
var request = require('request');
var router = express.Router();

var url = 'http://localhost:1334';

router.get('/', function (req, res, next) {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            return body;
        }
        else {
            return error;
        }
    })
});

// TODO other apis

module.exports = router;
