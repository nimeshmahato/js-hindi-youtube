//singleton
// const tinderuser=new Object()
const tinderuser = {}
tinderuser.id="1"
tinderuser.name= "nimesh"
//console.log(tinderuser);

const regularUer={
    email:"name@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nimesh",
            lastname:"mahato"
        }
    }
}

//console.log(regularUer.fullname.userfullname.lastname)

const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"a",4:"b"
}
const obj4={
    5:"a",6:"b"
}
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
//console.log(obj3)


const users=[
    {
    id:1,
    email:"n@gmail.com"
},
{
    id:1,
    email:"n@gmail.com"
},
{

}
]


users[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('name'))


const  course={
    coursename:"jsin hindi",
    price:999,
    courseInstructor:"hites"
}

const {courseInstructor:instructor}=course
console.log(instructor)

// {
//     name:"nimesh",
//     coursename:
// }