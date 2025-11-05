// Primitivr

// 7types:String, Number, Boolean, null, undefined,symbol, BigInt
const id=Symbol('123')
const anoId=Symbol('123')

//console.log(id===anoId);
//reference(Non primitive)



const myFunction=function(){
    console.log("hello world")
}


//+++++++++++++++++++++++++++++++++++++++++


// Stack ,heap
let myyt="hitesh"
let anothername=myyt
anothername="chaiurcode"
// console.log(anothername)
// console.log(myyt)

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1

user2.email="nimesh@gmail.com"
console.log(user1.email)