var mongoose=require('mongoose');

/*
define properties and do validation
*/

function addItem(itemname,price,quantity){
    var itemModel= mongoose.model("items")
    var newItem= new itemModel();
    var source ;
    var flag = false;

    newItem.itemname=itemname;
    newItem.price=price;
    newItem.quantity=quantity;

    newItem.save(function(err){
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


function getItems(){
    var source ;
    mongoose.model("items").find({},{},function(err,item) {
        source = item;
    });
    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return source;
}

//return true if item Exist
function isItemExist(itemname){
    var flag = false;
    var source ;
    mongoose.model("items").find({},{"_id":0,"itemname":1},function(err,item ) {
        source = item;
        for(var i = 0; i <item.length; i++) {
            if(itemname==item[i].itemname){
                flag=true;
            }
        }
    });
    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return flag;
}

// return true if require quantity is Exist
function isQuantExist(itemName,itemQuant){
    var flag = true;
    var source ;
    mongoose.model("items").find({},{"_id":0,"itemname":1,"quantity":1},function(err,items ) {
        source = items;
        for(var i = 0; i <items.length; i++) {
            if(itemName==items[i].itemname){
                if(items[i]["quantity"]<itemQuant){  // if There is NO enugh quantity
                    flag = false
                }
            }
        }
    });
    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return flag;
}

//
function ModifyItemsQuantity(itemsList){
    var source
    var itemName,itemQuant
    console.log("ModifyItemsQuantity---->",itemsList);
    for(var i=0;i<itemsList.length;i++) {(function (i) {
        console.log("itemsList[i]",itemsList[i]);
        itemName=itemsList[i]["name"]
        itemQuant=itemsList[i]["quant"]
        mongoose.model("items").update({"itemname":itemName},{$inc:{"quantity":-itemQuant}},function(err,data){
            //source=err
            if (err) throw err;
            if (!err && (i == itemsList.length)) {
            source=date;
            }
        });
    })(i)
}
}

module.exports={
    addItem,
    getItems,
    isItemExist,
    isQuantExist,
    ModifyItemsQuantity
}
