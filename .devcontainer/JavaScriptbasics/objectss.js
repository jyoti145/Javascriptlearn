//symbol 
const mySym = Symbol("key1")
//object literals
//object.create also use for the creating object  
const myObj = {
    name: "jyoti",
    Location: "Jaipur",
    email: "jyotiswami383@gmail.com",
    age: 22,
    [mySym] : "mykey1"

 
}
// console.log(myObj.name)
// console.log(myObj["Location"])
// console.log(myObj["mySym"])

myObj.name = "bappu"
//console.log(myObj.name)
//add function in this object 
myObj.myFun = function(){
    console.log("this is my function")
}
//it gives the refernce of function not the value of function
//console.log(myObj.myFun)

//it gives the value of function
//console.log(myObj.myFun())
//this is backticks marks that use to add other key value of object into a function by backticks or by the doller or cruley brackets and this keywords for repersent perwsent value  
myObj.myFun2 = function(){
   
    console.log(`this is my function,${this.name}`)
    

}
//console.log(myObj.myFun2())
//Object.freeze(myObj)
//console.log(myObj)

//this is   singleton object
const myObjj= new Object()
myObjj.id = "jyotiswami"
myObjj.Name = "jyotiswamiii"
myObjj.class = 10

//console.log(myObjj)
//nested object 
const jyotit = {
    fullname:{
        username:{
            firstname:"Arin",
            lastname:"Sharma"

        }
    }
}
//console.log(jyotit.fullname.username)

//combine object two or more
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 ={obj1,obj2}
//console.log(obj3)
const obj4 = Object.assign({},obj1,obj2)
//console.log(obj4)
//use spread method for the merge or combine two object 
const obj5 = {...obj1,...obj2}
//console.log(obj5)

//in project the use give the value of object as in array 
const userData=[
    {
        id:1,
        Name:"jyoti",
        class:4

    },
    {
        id:2,
        Name:"Arin",
        class:3
    }
]
//console.log(userData[0].Name)
console.log(myObjj)
//in this the output value milegi the data type of that output value is  an array 
console.log(Object.keys(myObjj));
console.log(Object.values(myObjj))
console.log(myObjj.hasOwnProperty('Namee'))