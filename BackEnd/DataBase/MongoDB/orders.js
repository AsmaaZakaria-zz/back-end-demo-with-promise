var mongoose=require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ComamosDB");

var Schema=mongoose.Schema
var orders=new Schema({
    owner:{
        type:String,
        required:true
    },
    state:{
        type:String,
        enum:['finished','waiting']
    },
    // itemsList: {
    //     type: [{
    //         type:String,
    //     }]
    itemsList:[{
        name :String,
        quant: String
    }]
    // }

})


mongoose.model("orders",orders)
