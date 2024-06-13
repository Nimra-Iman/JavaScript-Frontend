// *********  HOISTING VIP CONCEPT REGARDING INTERVIEW  *************

// hoisting is a process where the interpreter appears to move the declarations
// at the top of the code before execution. // JS only hoist declarations
//  not initializations and the variable will show undefined until 
// the line where it is initialized is reached.




// ===>>>     ***********  HOISTING WITH "function declaration"  **********

// function declaration and variables ko JS uper hoist kr deta h
// e.g
meet() // of course there will be no error, JS function declarations ko bhi execution s phly uper move kr deta h
function meet() {
    console.log("meet")
}


//  ===>>>   ************ HOISTING with var *************

console.log(a) // undefined because JS n sirf declaration ko hoist kia initialization ko nhi
var a = 2 //(initialization)
console.log(a)




// ===>>>   ************ HOISTING with let or const  *************

// console.log(x) //yhan error ay ga, although let and const k saath bhi hoisting
// // hoti h but vo variable ek temporary dead zone(TDZ) m chla jay ga ((Declarations made 
// // with the let and const keywords are also subject to hoisting (i.e. they are moved
// // to the top of their respective scope (global or block)) but are said to be in a 
// // temporal dead zone (TDZ) meaning that any attempt to access them will result
// //  in a reference error.))
// let x=9
// console.log(x)



// ===>>>   *************  hoisting with "function expressions"

// similarly, function ko hm const k zrye bnayn yani ek arrow function bnayn or us ko
// phly call kr len to nhi ho ga, like below: 
// meets()  //there will be error
// const meets=()=>{
//     console.log("meet")
// } 

// function expressions are not hoisted
// meet1()   //error
// var meet1=()=>{
//     console.log("meet")
// } 

// gr() //error
// var gr=function(){
//     console.log("GR")
// }



// class expressions are also not hoisted

// let obj=new Rectangle(2,2) //error
// const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     area() {
//       return this.height * this.width;
//     }
//   };

// Unlike function declarations, class declarations are not hoisted 
// (or, in some interpretations, hoisted but with the temporal dead zone restriction), 
// which means you cannot use a class before it is declared.


let obj = new Rectangle(2, 2) //error
console.log(obj.area())

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
};




// MUST READ FOLLOWING LINK, IT'S VERY SMALL DOCUMENT, VERY VERY SMALL.
// https://www.linkedin.com/pulse/function-declaration-vs-expression-understanding-hamadou-mounkaila/