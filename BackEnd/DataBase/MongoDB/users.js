var mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ComamosDB");


var Schema=mongoose.Schema
var users=new Schema({
  username:{
  	type:String,
  	required: true,
  	lowercase: true,
  	index:{unique: true}
  },
  password:{
  	type:String,
  	required: true,
  	lowercase: true
  },
  phone:{
    type:Number,
	required: true,
	lowercase: true,
	index:{unique: true}
},
  address:{
    type:String,
  	required: true,
  	lowercase: true,
  }

})
// ORM
mongoose.model("users",users)
