var mongoose=require('mongoose');
// Users
function checkSignin(username,password){
    var flag=false ;
    var source ;
    mongoose.model("users").find({},{"_id":0,"username":1,"password":1},function(err,users ) {
        source = users;
        console.log("users.length",users.length);
        for(var i = 0; i <users.length; i++) {
            if(username==users[i].username && password==users[i].password){
                flag=true;
                if(!flag){
                    console.log("ERROR: SIGNIN NOT Successfully!");
                    return false
                }
            }
        }
    });
    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return flag;
}

function checkSignup(username,password,phone,address){
    var userModel= mongoose.model("users")
    var newuser= new userModel();
    var source ;
    var flag = false;

    newuser.username=username;
    newuser.password=password;
    newuser.phone=phone;
    newuser.address=address;

    newuser.save(function(err){
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
//
module.exports={
    checkSignin,
    checkSignup
}




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
//         return flag
//     }).then ((flag) => {
//         console.log('flagg:', flag);
//         return 'flag'
//     })
// }
