// Chaining is a SERIES process and Multiple Handlers is a PARALLEL process,
//  As simple as that.



// we can pass multiple handlers to one Promise, they don't pass the result to 
// each other but they run independently

// let p1 = new Promise((resolve, reject) => {
//     console.log("good thing")
//     resolve("1st promise - a")
// })
// p1.then(value => {
//     console.log(value)
    
// })
// p1.then(value => {
//     console.log("1st promise - b")
// })
// p1.catch(error => {
//     console.log(new Error("an error occured"))
// })







//       both chaining and multiple handlers in one code

let p1 = new Promise((resolve, reject) => {
    console.log("good thing")
    resolve("1st promise - a")
})
p1.then(value => {
    console.log(value)
    return fun()
}).then(value => {
    console.log(value)
}).catch(error=>{
    console.log(new Error("2nd promise not fulfilled"))
})
p1.then(value => {
    console.log("1st promise - b")
})

function fun() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            // console.log("2nd promise")
            resolve("2nd promise")
        }, 5000)
       
    })
}
p1.catch(error => {
    console.log(new Error("an error occured"))
})

