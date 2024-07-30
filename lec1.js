
/*
const age=prompt("Enter your age:")
if(age<18){
    console.log("You get a 20% discount")
}
else if(age>=18 && age<65) {
    console.log("You get a 10% discount")
}
else {
    console.log("You get a 30% discount")

const length=prompt("enter length:")
const width=prompt("enter width:")
var area=length*width
console.log("The area of the rectangle is "+area)
*/
const product1={
    name:"apple",
    price:20,
    inStock:true
}
console.log(product1.inStock)
const product2={
    name:"Banana",
    price:15,
    inStock:true
}
console.log(product2)
const product3={
    name:"apricot",
    price:30,
    inStock:false
}
console.log(product3.price)

function product(name,price,instock){
    this.name=name
    this.price=price
    this.inStock=instock
}
const product4=new product("orange",25,true)
const product5=new product("banana",10,true)
const product6=new product("apple",22,false)
console.log(product4)
console.log(product5.price)