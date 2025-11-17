function sayMyName(){
    console.log("h");
console.log("m");
console.log("i");
console.log("n");
}

// sayMyName()

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);    
// }

function addTwoNumbers(number1,number2){
    
    return number1+number2  
}


const result= addTwoNumbers(9,8)
// console.log(result)


function loginUsermessage(username="sam"){
    if(username==undefined){
        console.log("please enter USERNAME")
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUsermessage())

function calculatecartprice(...num1){
    return num1
}

//console.log(calculatecartprice(2));
//console.log(calculatecartprice(200,300,500))
const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
        username:"nimesh",
        price:399

    }

)

const mynewarray=[12,5,7,9,7]
function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(mynewarray))