function p(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(200)
        }, 2000);
    })
}
let f= async()=>{
    let b=await p() 
    console.log(b)
    let c=await p() 
    console.log(c)
    let d=await p() 
    console.log(d)
}
f()
                                                 
// // IIFE allow k ap async await ka syntax use kr skty ho vo bhi kisi additional function k bagher,
// //  uper valy code m jab ap await kr rhy ho to async function bnaya hua h but neechy
// //  valy code m jhan IIFE ko use kia h vhan additional kisi function ki zrurt nhi

function p1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(200)
        }, 2000);
    })
}
( async()=>{
    let b=await p1() 
    console.log(b)
    let c=await p1() 
    console.log(c)
    let d=await p1() 
    console.log(d)
})()
// //IIFE is also used to avoid polluting global namespace, yani k IIFE k ander jo code likha vo
// // ek entity ban gya, jesy hi execute ho ga RAM ko khali kr de ga, or agar IIFE k baher ja
// // kr "b,c,d" m s kisi ko bhi console.log kro to error ay ga q k usy nhi pta k y cheezy
// // kia hn q k in ka scope sirf us function jitna hi h, agar async function na bnaya hota to 
// // "b,c,d" global name space pr hoty, hm unhy access kr skty 


