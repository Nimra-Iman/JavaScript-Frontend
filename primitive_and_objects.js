//   ****************************primitive datatypes are fundamental data types AND they are built-in and y 7 trah k hoty hn
// N(NULL)
// N(NUMBER)
// S(SYMBOL)
// S(STRING)
// B(BOOLEAN)
// B(BIGINT)
// U(UNDEFINED)
// *************************objects are key value pairs and they are non-primitive
let a = null
let b = 45
let c = Symbol("i am nice symbol")
let d = "i am string"
let e = true
let f = BigInt("45")
let g = undefined
console.log(a)
console.log(typeof d)

//objects
const marks = {
  "nimra": 6,  //key double quotes m hona zrori nhi h, daal bhi skty ho or nhi bhi
  "iman": 5,
  fatima: 78
}
console.log(marks["nimra"])
console.log(marks.nimra)
// in order to add new keys to objects:
console.log(marks) //old one
marks["kinza"] = 78;
console.log(marks)  //updated one

//in order to change the value of keys
marks["nimra"] = 77
console.log(marks)

