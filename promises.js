// promises is a solution for callback hell. promise is a promise of code execution, 
// the code either executes or fails, in both cases the subscriber is notified

let proms = new Promise(function (resolve, reject) {

})
// The function passed to new Promise is called the executor. agar function shi s
// execute ho gya to "resolve" ko call kia jay ga or us ka result ek "value" ho ga
// lekin agar function k execute hony m koi error aya to "reject" ko call kia jay ga
// or us ka result ek "error" ho ga

// The proms object returned by the new Promise constructor has 
// these internal properties:
// 1- state: start m is ki state pending ho gi phir baad m ya to state "fulfilled" 
// ho gi ya "rejected" ho gi
// 2- result: phly undefined ho ga phir baad m (agar state "resolve" hui to result 
// "value" ho ga) , (agar state "reject" hui to result "error" ho ga)

let promise = new Promise(function (resolve, reject) {
    alert("hello")
    // resolve(56)
    reject(new Error("error is occured")) //promise fulfil zrur ho ga , ab chahy vo 
    // fulfilment as rejection ho ya chay fulfilment as resolved value ho
})

console.log(promise)
// promises are used for parallel execution


