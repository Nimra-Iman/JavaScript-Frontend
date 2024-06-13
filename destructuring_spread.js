// **********  DESTRUCTURING  ********* 
let arr=[1,2,4,5,6]
// if you want k a=1 and b=2 ho jay to is k liye esa krna ho ga "let a=arr[0] let b=arr[1]"
// but esa krny ki zrurt nhi h, is ko desstructuring k zrye bht easily kia ja skta h
// like i did below
let [a,b]=arr 
console.log(a)
console.log(b)

let [c,d, ...rest]=arr  //yani c=1,d=2 or is k baad valy saary rest m a jayn or rest valy 
// saary elements ek alag array m show hon gy
console.log(rest)


let arr1=[1,2,3,4,5]
let [a1, , , ...rest1] =arr1 //agar hm chahty hn k a1=1 ho jay or rest vala 2 s start na ho
// bal k 4 s start ho to esy kry gy, yhan 2 and 3 kisi variable ko assign nhi ho ga
console.log(rest1)


// *************  destructuring objects
let x1={x,y} = {x:1 , y:2}
console.log(x,y)

//   *************  SPREAD OPERATOR  *********************
// kisi bhi array ko ek object m convert krna
let arr2=[3,4,7]
let obj={...arr2}
console.log(obj)

// another functionality of spread operator
function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(... arr2))

// another functionality mostly used in REACT
let f={
    name:"nimra",
    age:20,
    company:"xyz"
}
console.log({... f}) //yhan poora "f" object as it is show ho ga 
console.log({... f, name:"iman", age:21}) //yhan "f" ek baar khuly ga phir yhan "name"
// and "age" ki value "nimra" and "20" valy ko overwrite kr de gi
console.log({...f}) // {name: 'nimra', age: 20, company: 'xyz'}
console.log({name:"aqsa", age:22, ...f}) // yhan bhi "f" as it is show q k "aqsa" and "22"
// ko "nimra" and "20" over write kr de gi,, isi liye jab bhi value update krni ho to 
// "...f" phly likho 


