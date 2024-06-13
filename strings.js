// let nam="harry"
// let na='marry'
// console.log(nam.length)

// // template literalls(${} y cheeze template literal h)
// // string interpolation(we can insert variables directly in string literalls, this is 
// // called string interpolation)
// let str=`string can be declared via songle quotes, double quotes and back ticks but
// backticks have more advantages such as `

// console.log(`${nam} is friend of ${na} `)
// console.log(`nimra is a friend of "iman"`)

// // escape sequence character(yani single quote ki string k ander single quote hi likhna 
// // with the help of back slash \)

// console.log('bana\'na') //bana'na





//    ******************** string methods  ************************************
let a="nimra"
console.log(a.length) //5


// when we add escape sequence characters, the legth is like that:
let a1="nimra\'" //output=nimra'
console.log(a1.length) //length=6
// "\n" lag 2 characters rhyn hn lekin h y ek character 

console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.slice(2,4)) //yani 2nd index s le kr 3rd index tak, means "mr"
console.log(a.slice(2))   //2nd index s le kr end tak
console.log(a.replace("ni","mi")) //mimra (agar m  console.log(a.replace("Ni","mi")) esy likhti to output m vapis "nimra" hi a jata q k "Ni" string m h hi nhi, string k ander to asal m "ni" h)
console.log(a.concat(" is a good girl")) //nimra is good girl
let b="        meena        "
console.log(b.trim())  //remove white spaces
console.log(a.includes("imra"))  //true 
console.log(a.startsWith("i"))   //false
console.log(a.endsWith("r"))   //false

// strings are immutable, original string kabhi change nhi ho gi, 
// string k method s ek new string return ho gi, original string change nhi ho gi
// we cannot be able to chnage the specific character of a string 

let value="please give Rs 1000 "
console.log(value.slice(15))

