//singleton-(object.create)
//object literas
const mysym= Symbol ("key1")
const JsUser={
    name:"nimesh",
    [mysym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"nimeshmahato@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser[mysym])

JsUser.email="niemsh@gg.com"
//Object.freeze(JsUser)
JsUser.email="niemsh@g.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log(`Hellow Js User,${this.name}`)
}
console.log(JsUser.greeting())


