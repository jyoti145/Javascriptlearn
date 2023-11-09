function myFunn(){
    console.log("this is my function ");
    console.log("today i start learn it ");

}
//myFunn()
//these are parameters 
function addtwono(no1,no2)
{
    console.log(no1+no2);
    return no1+no2
    //this line not print beacuse after return value nothing will return
    console.log("jyoti")

}
//these are arguments
//addtwono(3,4)
//addtwono(4,5)
//when we not passs any value in parameters then it shows undefine 

function loginUser(username){
    //this use or not equal 
    if(!username){
        console.log("please enter user name")
        return
    }
    return `${username}just logged in`
}
//console.log(loginUser())
function loginUser1(usernamee){
    //this use or not equal 
    if(!usernamee){
        console.log("please enter user name")
        
    }
    return `${usernamee}just logged in`
}
//console.log(loginUser("jyoti"))

//use of rest operator use for the multiple arguments we can give in single parameter
function calculate(...number){
    return number
}
//console.log(calculate(100,200,300,400))

function calculat(val1,val2,...number){
    return number
}
//here two values not printed because they assgin in those arguments 
//console.log(calculat(100,200,300,400))


//how to assign object in function 
const user={
    username:"baluu",
    price:990
}
function myNames(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)


}
//myNames(user)


//pass array in function 
const myArray = [10,20,30,40]
function myArrayfunction(getvaluess){
    return getvaluess[2]

}
console.log(myArrayfunction(myArray))