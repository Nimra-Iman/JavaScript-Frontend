// hm kisi bhi function ko async bna skty hn or us k ander promises ko await kra
// skty hn
// hm baar baar .then .then na kr k async_aeait ko use krty hn 
// an async function always returns a promise

// async function asy(){
//     return 7 //resolved promise
// }
// asy().then(value=>{
//     console.log(value)
// })



async function fun() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1")
        }, 5000)

    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2")
        }, 3000)
    })
    // p1.then(value => {
    //     console.log(value)
    // })
    // p2.then(value => {
    //     console.log(value)
    // })
        console.log("function one is waiting...")
        let one=await p1 //yani jab tak p1 poora fulfill nhi ho ga tab tak p2 ki output show nhi ho gi
        console.log("function one is completed" , one)
        console.log("function two is waiting...")
        let two=await p2 //phly p1 ki output show ho gi, phir p2 ki 
        console.log("function two is completed",two )
         return([one,two])
}

let p=fun()
console.log(p)
p.then(value=>{
    console.log(value)
})





const cherry=async ()=>{
    console.log("i am cheery and i m not waiting")
}
cherry() //ab yha cherry and fun dovo parallely chly gy, fun ek async function h 
// y apna complete kry ga phir show kry ga output but cherry is not an async function
// cherry forn hi output show kry ga 
// if you want k phly fun() poora chly phir cheery vala chly to esy kr lo:

async function both(){
    let p= await fun()
    console.log(p)
    await cherry()
}
let f=both()
console.log(f)


