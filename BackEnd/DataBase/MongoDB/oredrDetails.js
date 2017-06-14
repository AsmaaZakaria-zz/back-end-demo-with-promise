var mongoose=require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ComamosDB");

var Schema=mongoose.Schema
var orederDetails=new Schema({
    orderId:{
        type:String,
        required:true,
        index:{unique:true}
    },
    itemsList:[{
        type:String,
        required:true,
        index:{unique:true},
        ref: 'items'
    }],
})


mongoose.model("orederDetails",orederDetails)
