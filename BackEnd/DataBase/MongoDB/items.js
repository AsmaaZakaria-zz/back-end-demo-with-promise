var mongoose=require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ComamosDB");

var Schema=mongoose.Schema
var items=new Schema({
    itemname:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})


mongoose.model("items",items)
