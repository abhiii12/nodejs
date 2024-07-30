/*var prompt = require('prompt-sync')();
console.log("hello world")
console.log("nahi aa raha")
var a=4;
var b=9;
var ans=a+b
console.log(ans)
console.log("khatam")

const age = prompt("what's your age")
if (age<50){
    console.log("you are young")}
else{
    console.log("you are old")}*/
/*
function add(a,b){
    return a+b;
}
var res=add(2,7)
console.log(res) */

/*const add = function(a,b,buiii){
    var res=a+b
    console.log(res)
    buiii()
}
add(2,7,function(){console.log("hello")})
*/

/*var fs=require('fs');
var os=require('os');

var user=os.userInfo()
console.log(user);
console.log(user.username)

fs.appendFile('greeting.txt','hello' + user.username + '!\n',()=>{
    console.log('file written');
}) */
/*
var _ = require('lodash')

const notea =require('./note.js')
console.log("both will print")
var age=notea.age
console.log(age)

var arr=[1,1,2,3,4,2,4,"name","age","3"]
console.log(_.uniq(arr))
*/

/*const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
console.log(jsonObject.name); // Output: John

const objectToConvert = { name: "Alice", age: 25 };
const jsonStringified = JSON.stringify(objectToConvert); // Convert object
console.log(jsonStringified); // Output: {"name": "Alice", "age":25}
*/
const express = require('express')
const app = express();
const db = require('./db')

require('dotenv').config();

const bodyparser=require('body-parser');
app.use(bodyparser.json());

const PORT = process.env.PORT || 3000

const Person=require('./Models/Person');
const menuItem=require('./Models/menuItem');

app.get('/', function (req, res) {
res.send('Welcome to my hotel... How i can help you ?, we have list of menus')
})


//import router files
const personroutes= require('./Routes/personroutes')
const menuItemroute= require('./Routes/menuItemroute')
//use the routers
app.use('/person',personroutes)
app.use('/menuItem',menuItemroute)

app.listen(PORT,()=>{
    console.log("server is running on port 3000")
})