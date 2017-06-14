var users=require('./Entities/users');
var items=require('./Entities/items');
var orders=require('./Entities/orders');

function checkSignin(username,password) {
    // do some logic
    return users.checkSignin(username,password)
}
function checkSignup(username,password,phone,address) {
    return users.checkSignup(username,password,phone,address)
}

function addItem(itemname,price,quantity) {
    return items.addItem(itemname,price,quantity)
}

function getItems() {
    return items.getItems()
}


function addOrder(owner,state,itemsList) {
    console.log("itemsList addOrder ------->",itemsList);
    var checkitemResult=checkItemsList(itemsList)
    if(!checkitemResult){   //IF item and quantity Exist
        var isOrderAdded=orders.addOrder(owner,state,itemsList)
        if(isOrderAdded){
            items.ModifyItemsQuantity(itemsList) // Modify Item's quantity
            return isOrderAdded
        }
    }else{
        console.log("result ----> ",checkitemResult);
        return checkitemResult
    }
}

function getOrders() {
    return orders.getOrders()
}

//

//Edit orderModel
function EditOrder(orderId,owner,state,itemsList){
    console.log("itemsList Edit Order ------->",itemsList);
    var checkitemResult=checkItemsList(itemsList)
    if(!checkitemResult){   //IF item and quantity Exist
        var isOrderAdded=orders.addOrder(owner,state,itemsList)
        if(isOrderAdded){
            items.ModifyItemsQuantity(itemsList) // Modify Item's quantity
            return isOrderAdded
        }
    }else{
        console.log("result ----> ",checkitemResult);
        return checkitemResult
    }
}

function checkItemsList(itemsList){
    console.log("itemsList check ->>>>>>>>>",itemsList);
    for (i = 0; i < itemsList.length; ++i) {
        var itemName=itemsList[i]["name"]
        var  itemQuant=itemsList[i]["quant"]

        if(items.isItemExist(itemName)==false){  // 1.If item NOT exixst
            return "item '"+itemName+"' is Not exist"
        }else if(!items.isQuantExist(itemName,itemQuant)) { //1.if threr are NO enugh quantity
            return "there are No enugh quantity for item '"+itemName+"' !!"
        }
    }
    return false    // if item and quantity Exist
}




module.exports = {
    checkSignin,
    checkSignup,
    addItem,
    addOrder,
    getItems,
    getOrders,
    EditOrder
}
