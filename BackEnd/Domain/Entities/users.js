var mongoose=require('mongoose');
// Users
//orginal
// function checkSignin(username,password){
//     var flag=false ;
//     var source ;
//     mongoose.model("users").find({},{"_id":0,"username":1,"password":1},function(err,users ) {
//         source = users;
//         console.log("users.length",users.length);
//         for(var i = 0; i <users.length; i++) {
//             if(username==users[i].username && password==users[i].password){
//                 flag=true;
//                 if(!flag){
//                     console.log("ERROR: SIGNIN NOT Successfully!");
//                     return false
//                 }
//             }
//         }
//     });
//     while(source === undefined) {
//         require('deasync').runLoopOnce();
//     }
//     return flag;
// }

//using promise but with callback :(
// function checkSignin(username,password){
//   return new Promise((resolve, reject) => {
//     var flag=false ;
//     mongoose.model("users").find({},{"_id":0,"username":1,"password":1},function(err,users ) {
//       if(err) {
//         return reject(err);
//       } else {
//         console.log("users.length",users.length);
//         for(var i = 0; i <users.length; i++) {
//             if(username==users[i].username && password==users[i].password){
//                 flag=true;
//                 if(!flag){
//                     console.log("ERROR: SIGNIN NOT Successfully!");
//                     return false
//                 }
//             }
//         }
//         return resolve(flag)
//       }
//     })
//   });
// }

// with promise without callback
function checkSignin(username,password){
  return new Promise((resolve, reject) => {
    var flag = false ;
    mongoose.model("users").find({},{"_id":0,"username":1,"password":1})
      .then((users) => {
      console.log("users.length",users.length);
      for(var i = 0; i <users.length; i++) {
        if(username==users[i].username && password==users[i].password){
          flag = true;
        }
      }
      if(!flag){
        console.log("ERROR: SIGNIN NOT Successfully!");
      }
      return resolve(flag)
    }).catch((reject) =>{
      return reject("reject error from checkSignin");
    })
  })
}

//--------------------------------------------------------------------------------------------------------
//orginal
// function checkSignup(username,password,phone,address){
//     var userModel= mongoose.model("users")
//     var newuser= new userModel();
//     var source ;
//     var flag = false;
//     newuser.username=username;
//     newuser.password=password;
//     newuser.phone=phone;
//     newuser.address=address;
//     newuser.save(function(err){
//         source=err;
//         if(err){
//             console.log('error',err);
//             flag=false
//         }else {
//             flag=true
//         }
//     });
//     while(source === undefined) {
//         require('deasync').runLoopOnce();
//     }
//     return flag;
// }

//with promise
function checkSignup(username,password,phone,address){
  return new Promise((resolve, reject) => {
    flag = false;
    var userModel = mongoose.model("users");
    var newUser = new userModel();  //creating a new user
    newUser.username=username;      //insert its parameters
    newUser.password=password;
    newUser.phone=phone;
    newUser.address=address;
    newUser.save()  //return promise object
      .then((users) => {
        flag = true
        return resolve(flag)
      }).catch((err) => {
        console.log("=== err checkSignup === ", err);
        flag = false
        return reject("reject error from checkSignup");
      })
  })
}

//exports functions
module.exports={
    checkSignin,
    checkSignup
}
