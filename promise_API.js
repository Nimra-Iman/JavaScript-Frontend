let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("sorry")
    //    resolve("value 1")
    }, 1000);
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve("value 2")
    }, 2000);  
})
        
let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve("value 3")
    }, 3000);
})
//agar hm chahty hn k jab y teeno promises resolve ho jay tab hmy console pr kuch
// dekhny ko mily to hm esy likhyn gy 
let promise_all=Promise.all([p1,p2,p3])
promise_all.then(value=>{
    console.log(value)
})
// agar in teeno promises m s koi promise reject hui to mujy us promise ka error
// dekhny ko mily ga or hmara Promise.all nhi chly ga, is liye hm Promise.allSetteled
// ko use kry gy jo hmy y btay ga k in teeno m s kon kon s promises fulfil huy or kon
// kon s reject huy
let pr=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Sorry")
    }, 4000);
})
let promise_all_settled=Promise.allSettled([pr,p2,p3])
promise_all_settled.then(value=>{
    console.log(value)
})

// Promise.race(yani teeno m s jo phly resolve ho gya us ki value show kr do)
let promise_race=Promise.race([p1,p2,p3])
promise_race.then(value=>{
    console.log(value)
})
// agr Promise.race n jis promise ki value ko dena tha usi m koi erorr ho yani 
// sab s kam time vali value reject ho to us case m y error show kr de ga vhi
// error k reject hua_like below:
let promise_races=Promise.race([p1,p2,p3])
promise_races.then(value=>{
    console.log(value)
}) 
// is liye hm promise.race s milta julta method use kryn jo ke phly resolve hony 
// promise ki value show krta h
let promise_any=Promise.any([p1,p2,p3])
promise_any.then(value=>{
    console.log("for promise_any",value)
})

let pro=Promise.resolve(6) //make a resolved promise with a given value
pro.then(value=>{
    console.log(value)
})

let prog=Promise.reject("rejected astaghfirullah") //make a rejected promise with a given arror
prog.reject(error=>{
    console.log(error)
})


