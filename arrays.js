// arrays are mutable, arrays are not primitive, the type of array is "object"
let a = [1, 24, 6, "nimra", null, undefined]
console.log(a.length)
a[6] = "new element" //adding new element
console.log(a)
a[0] = 22  //updating the value of zeroth index
console.log(a)
console.log(typeof a) 
 
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
                                                                             
// ************  array methods
let b = a.toString()
console.log(b, typeof b)  // b is now a string

let c = a.join(_)
console.log(c, typeof c)  // 22_24_(and so on)  ;  c also a string

a.pop() //last vala element nikal kr asal array ko update krti h and give new length to array
console.log(a)  //output m last vala element nikla hua ho ga 
// let r=a.pop()  //ab r k ander vo element show ho ga jo pop hua, vesy is s ek or element bhi nikal jay ga q k hm n ek baar phir s a.pop() kia 

a.push("new element") //and give new length to array
console.log(a)

a.shift()  //remove first element and return it, also modify original array and give new length to array
console.log(a)

a.unshift(78)  //add element at beginning and modify array and give new length to array
console.log(a)

a.delete[0]  //length of array remains unchanged (imprtant interview question)
console.log(a)

b = [2, 33, 55, 6, 332, 1]
let concatenated_array = a.concat(b)  //we can also do it:  let concatenated_array= a.concat(b,c) where c is another array
console.log(concatenated_array)

//     *****************   sort   ************

x = [22, 66, 11, 3, 9, 0]
x.sort() // alphabetically sort kry ga (most important interview question)
console.log(x)  // output: [0,11,22,3,66,9] yani phly 0 phir "1" s start hony valy saary, phir "2" s start hony valu saary and so on


let compare = (a, b) => {
    return a - b // yani hm y keh skty hn na k jab return ka answer negative aya
    // to "a" vali value phly a jay gi or agar positiva aya to array m "b" 
     //vali value ko phly rakh den gy
}
console.log("ascending order sorting is", x.sort(compare))

// let compare=(a,b)=>{
//     return b-a
// }
// console.log("decending order sorting is", x.sort(compare))



console.log(a.reverse()) //also update original array



// splice ans slice(v. important concepts)

// splice (returns deleted items and modify the array)
let neww = [55, 90, 77, 33, 11, 86]
neww.splice(2, 3, 123, 234, 345)  // "2" yani second index s start kro; 
// "3" yani agly 3 elements ko remove kro means 2nd inex 3rd index and 4th index ko remove kro
// "123,234,345" yani vo jo 3 elements nikaly hn un ki jga y teen add kr do
console.log(neww) // [55,90,123,234,345,86]

// agar esy kr du:
let newww = [55, 90, 77, 33, 11, 86]
newww.splice(2, 3, 123, 234, 345, 4567, 3214)
console.log(neww) //[55,90,123,234,345,4567,3214,86]

// return??
let deleted_values = newww.splice(2, 3, 123, 234, 345, 4567, 3214)
console.log(deleted_values) // [123,234,345]




// slice (don't update an orginal array)
let arr = [33, 44, 55, 66, 77, 88, 99]
let new_array = arr.slice(2) //yani 2nd index s start kro or end tak saary elements ko utha kr ek array bna do
let a_new_array = rr.slice(3, 6) //yani 3rd index s start kro or 5th index tak jao



//    *******************  for each loop   *************************************

//         for each loop?
let array = [12, 16, 7, 3, 9]
//for each loop m hm hr kaam har ek array k element k saath kr skty hn 
array.forEach(element => {
    console.log(element * element)
});



let index = [12, 16, 7, 3, 9]
//for each loop m hm hr kaam har ek array k element k saath kr skty hn
let i = 0 //agar m yhi line loop k ander likhu gi to "i" k ander increment nhi ho sky gi
// q k hr iteration pr "i" doobara zero k equal ho jay ga 
index.forEach(element => {
    console.log(element * element, "and the indexes are = ", i)
    i++
});


//     array.from??
// (y hm log kisi ko bhi array m convert krny k liye use krty, actual m y html collection
// ko array m convert krty ta k hm forEach function use kr sky)
let str = "nimra"
let converted_array = Array.from(str)
console.log(converted_array)  //['n','i','m','r','a']



// for...of loop 
let y = ["n", 34, null]
for (let a of y) { // this is a very shortcut way, instead of writing this
    // type of syntax:   for (let i=0;i<y.length;i++) 
    console.log(a)
}


// for...in loop

// this loop is not mostly used and this is used to print the keys of an array, as array 
// is an object so it also has keys
// consider this example let y = ["n", 34, null], means "n" is a value and its key is "0"
// "34" is a value and its key is 1 and so on
for(let key in y){
    console.log(key)
}
// and even we can also print values like that:
for(let key in y){
    console.log(y[key])
}





