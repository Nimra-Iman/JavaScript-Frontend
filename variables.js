// <!-- JS is a dynamic typed language means we can change the type of a variable on run time
// static types language m hm phly declare krty hn k y variable kis trah ki data type ka ho
//  ga yani e.g C language
//   -->


// var ki bijay let use kia jata h ab


a=3
console.log(a)
a="nimra"
console.log(a)  // in ko run krny s phly 3 phir nimra print ho ga yani hm
// variable a ki datatype change kr pa rhy hyn, jab k C language m esa nhi 
// ho skta , ek baar a=3 kr dia to a=nimra nhi kr skty ap

// js is case sensitive



//              var, let and const

// ES6(ecmascript 6) y ek modern JS ko show krti h, ES6 s phly variable kp
// declare krny k liye var use hota tha


//   ********************  let **************************

// 1- let block scoped hota h , yani ek block k ander agar let k zrye variable declare
// kia to vo variable block k baher use nhi ho sky ga
// 2- let k ander hm variables ko redeclare nhi kr skty,
// 3- let s redecalre nhi kr skty but update kr skty hn 
// e.g:(1-)
let a=3
let b=4  
{
    console.log(b) 
    let a=5
    console.log(a) 
}
console.log(b) // phly 4 phir 5 phir 4 ay gi output

// another 
{
    let x=5 
}
console.log(x)   //throws error





// // another example(2-)
// let a=4
// {
//   let a=3
//   let a=2
//   console.log(a)
// }
// console.log(a)  // throws an error k ap let k zrye redecalre nhi kr skty


// another example(3-)
let s=3
s=4  //yha hm variable ko update kr rhy yani k agar "s" ek phly s variable h, us k ander jo bhi value h us ko "s" kr do
console.log(s)







//    *********************  var  ***************************
// var k zrye variables ko redeclare and update kr skty hn
var n=5
var n="nimra"
console.log(n)  //output=nimra


// another example
var d=3
{
    var d=4
    console.log(d)
}
console.log(d)   //dono s d=4 hi print ho ga


//   ***********************  const  ************************
// const can never be redeclared nor updated 
const author="harry"
// ab author ek const h, is ko na hi update kr skty na redeclare
// let author=4 (throw an error)
// const must be initialized during declaration









