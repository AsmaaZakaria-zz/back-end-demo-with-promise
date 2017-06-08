var express=require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

var app=express();
mongoose.connect("mongodb://127.0.0.1:27017/ComamosDB");

var items_db = require('../DataBase/MongoDB/items.js');
var orders_db = require('../DataBase/MongoDB/orders.js');
var users_db = require('../DataBase/MongoDB/users.js');

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8090;
var router = express.Router();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get('/', function(req, res) {
    res.json({ message: 'Hi From ComamosBlue' });
});

app.use('/', router);

app.listen(port);
console.log('server connect on port  ' + port);
