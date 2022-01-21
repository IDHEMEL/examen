var express = require('express');
var router = express.Router();
var fs = require('fs')
/* GET users listing. */
router.get('/', function(req, res, next) {

    var dataFile = fs.readFileSync('data/movies_reduit.json')
    console.log(dataFile)
    var data1 = JSON.parse(dataFile);
    var data = JSON.stringify(data1)
    res.render('movies',{title: 'Movies',data: data});
});

module.exports = router;
