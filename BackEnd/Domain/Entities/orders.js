var mongoose=require('mongoose');


// ADD NEW ORDER
function addOrder(owner,state,itemsList){
    console.log("sasasASA",owner,state,itemsList);
    var orderModel= mongoose.model("orders")
    var newOrder= new orderModel();
    var source ;
    var flag = false;

    newOrder.owner=owner;
    newOrder.state=state;
    newOrder.itemsList=itemsList;

    newOrder.save(function(err){
        source=err;
        if(err){
            console.log('error',err);
            flag=false
        }else {
            flag=true
        }
    });
    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return flag;
}

// GET ORDERS
function getOrders(){
    var source ;
    mongoose.model("orders").find({},{"_id":2,"owner":1,"state":1,"itemsList":1},function(err,order ) {
        source = order;
    });
    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return source;
}



module.exports={
    addOrder,
    getOrders
}
