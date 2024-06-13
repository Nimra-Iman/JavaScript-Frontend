// there are four pillers of oop:
// 1- Abstraction (HIDING OF INTERNAL DETAILS, yani ap n mixer bnaya ap n kha k tum y mat 
// socho k ander kaam kesy kr rha h bas mixer.run ko chlana to y kaam krny lag jay ga)

// 2- Encapsulation (5 ya 6 cheezo ko mila kr ek single entity bna dena, yani touchpad, 
// keyboard, screen etc ko mila kr ek laptop bna dia)

// 3- Inheritance 
// 4- Polymorphism (ek cheez but alag alag forms, e.g hmara phone samera bhi h, note taking
// device bhi h etc)


// ******************  PROTOTYPE  AND   __PROTO__
// javascript has a special object called prototype which is either null or reference
// to another prototype
let p={
    "name":"nimra",
    "age" : "20"
}
console.log(p) //ab yha dekhna neechy prototype ka object bhi ho ga
// when we read a property from object and it is missing, javascript automatically
// takes it from prototype. this is called prototype inheritence: 
//          => When you try to access a property (like obj.property) on an object (obj).
// If the property is not found directly in the object (obj), JavaScript proceeds to the
//  next step.
// JavaScript looks for the property in the object referenced by the prototype of obj.
//  This process continues up the prototype chain until the property is found or
//   until the end of the chain.
// This entire process is automatic and happens behind the scenes.


// how to create your prototype????????????????????????????????????
let a={
    "name":"iman",
    "age" : "21"
}
console.log(a)
// a.run() chalny s nhi chaly ga q k is vqt run ka object na to is k asal code m h na hi
// prototype m h lekin hm khud s is ki prototype bna skty hn
let prototy={
    run: ()=>{
        alert("run ho ja bhaii !")
    },
    name: "nimra"
}
a.__proto__=prototy
a.run() // ab run ho jay ga q k phly is k apny object k ander dekha jay ga agar hua to 
// run key ki jo bhi value hui vo chaly gi lekin ab vhan nhi h to us ki protype m s chaly gi
console.log(a.name) //name k agy bracket nhi lgy gi q k name is not a method, it is a property

prototy.__proto__={
    name2:"harry"
} //prototype can also have a prototype