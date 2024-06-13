// MOST MOST IMPORTANT REGARDING INTERVIEW
// A closure is the combination of a function bundled together (enclosed) with references
// to its surrounding state (the lexical environment). In other words, a closure gives you 
//  access to an outer function's scope from an inner function.

// function hello1(){
//     let message="good morning"
//     console.log(message)
//     function inner(){
//         console.log("i am inner " + message)
//     }
//    return inner() //yhan y function to return ho hi rha h but saath hi is ka 
//         //  lexical environment bhi return hota h, ( let message="good morning" console.log(message) ) 
//         //  y is closure function jo k inner name s h , is closure function ka lexical
//         //  environment h
// }
// let x=hello1()
// console.log(x)


function hello1(){
    let message="good morning"
    console.log(message)
    function inner(){
        console.log("i am inner " + message)
    }
    message="good noon"
   return inner() // closure function k saath jab lexical environment return hoti h to 
//    asal m lexical environment k variables k references return hoty hn, yani poora 
//     message="good morning" return nhi ho ga bal k "message" variable ka reference return
//     ho ga, jab m "message" ko update kia to of course updated value hi jay gi
}
let x=hello1()
console.log(x)


// NESTED FUNCTIONS ALSO MAKE CLOSURES
function practice() {
    const x = () => {
        // let a = 1
        console.log(a)
        const y = () => {
            // let a = 2 //agar "y" k apny ander koi variable nhi h to vo apny parent 
            // lexical environment m check kry ga or vhan s vo variable le le ga, agar vha
            // bhi na hua to vo global m dekhy ga k variable h ya nhi
            console.log(a)
            const z = () => {
                let a = 3
                console.log(a)
            }
            z()
        }
        // a=299  
        y()
    }
    // x() //agar yhan "X" ko call na kru to "y","z" nhi chalyn gy q k of course us ko phly
    // "x" k ander jan h "y" and "z" tak jany k liye..... doosra case h k call na kro bal k
    // return krva lo to bhi chal jay ga 
    return x
}
let p=practice()
p()