var express=require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

var app=express();

var items_db = require('../DataBase/MongoDB/items.js');
var orders_db = require('../DataBase/MongoDB/orders.js');
var users_db = require('../DataBase/MongoDB/users.js');

var logic = require('../Domain/logic')

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


router.get('/', function(req, resp) {
    resp.json({ message: 'Hi From ComamosBlue' });
});

// SIGNIN ---> req:username,password
router.post('/signin', function(req, resp) {
    var username=req.body.username;
    var password=req.body.password;
    console.log("req.body: ",username,password);
    if ((username.replace(/\s/g,"").length > 0) &&(password.replace(/\s/g,"").length>0)) {
        var isCorrectSignedin=logic.checkSignin(username,password)
        console.log('is Correct Signed In: ',isCorrectSignedin);
        resp.json({msg:isCorrectSignedin})
    }else{
        resp.json({msg:"ERROR: EMPTY INPUT"})
        console.log("ERROR: Empty Input");
    }
});

//SIGN UP ---> req:username,password,phone,address
router.post('/signup',function(req,resp){
    var username=req.body.username;
    var password=req.body.password;
    var phone=req.body.phone;
    var address=req.body.address;
    // if(username==""||password==""||)
    if ((username.replace(/\s/g,"").length > 0) &&(password.replace(/\s/g,"").length>0)&&(phone!=null) &&(address.replace(/\s/g,"").length>0)) {
        var isCorrectSignup=logic.checkSignup(username,password,phone,address);
        console.log('is Correct Signed UP',isCorrectSignup);
        resp.json({msg:isCorrectSignup})
    }else {
        resp.json({msg:"ERROR: EMPTY INPUT"})
        console.log("ERROR: Empty Input");
    }
})

//ADD NEW ITEM ---> req:itemname,price,quantity
router.post('/addItem',function(req,resp){
    var itemname=req.body.itemname;
    var price=req.body.price;
    var quantity=req.body.quantity;
    if ((itemname.replace(/\s/g,"").length > 0) &&(price!=null) &&(quantity!=null)) {
        var isItemAdded=logic.addItem(itemname,price,quantity);
        console.log('is Item added Successfully: ',isItemAdded);
        resp.json({msg:isItemAdded})
    }else {
        resp.json({msg:"ERROR: EMPTY INPUT"})
        console.log("ERROR: Empty Input");
    }
})

//ADD NEW ORDER ---> req:owner,state
router.post('/addOrders',function(req,resp){
    var owner=req.body.owner;
    var state=req.body.state;
    var itemsList=req.body.itemsList;
    console.log("itemsList",itemsList);

    if ((owner.replace(/\s/g,"").length > 0) &&(state.replace(/\s/g,"").length>0)&&(itemsList!=[])) {
        var isOrderAdded=logic.addOrder(owner,state,itemsList);
        console.log('is Order added Successfully: ',isOrderAdded);
        resp.json({msg:isOrderAdded})
    }else {
        resp.json({msg:"ERROR: EMPTY INPUT"})
        console.log("ERROR: Empty Input");
    }
})

// Display Items and orders
router.get('/home',function(req,resp){
    var ordersList=logic.getOrders()
    var itemsList=logic.getItems()
    resp.json({orders:ordersList,items:itemsList})
})

router.post('/edit',function(req,resp){
    var state=req.body.state;
    var itemsList=req.body.itemsList;
    var orderId=req.body.orderId
    if ((owner.replace(/\s/g,"").length > 0) &&(state.replace(/\s/g,"").length>0)&&(itemsList!=[])) {
        // console.log("itemsList",itemsList);
        var isOrderEdited=logic.EditOrder(orderId,owner,state,itemsList);
        console.log('is Order added Successfully: ',isOrderEdited);
        resp.json({msg:isOrderEdited})
    }else {
        resp.json({msg:"ERROR: EMPTY INPUT"})
        console.log("ERROR: Empty Input");
    }
})

// Edit



// router.post('/addOrderDetailes',function(req,resp){
//     var order=req.body.order;
//     var itemsList=req.body.itemsList;
//     var price=req.body.price;
//     var quantity=req.body.quantity;
//     var isItemAdded=logic.addItem(itemId,itemname,price,quantity);
//     console.log('is Item added Successfully: ',isItemAdded);
//     resp.json({msg:isItemAdded})
// })

app.use('/', router);

app.listen(port);
console.log('server connect on port  ' + port);
