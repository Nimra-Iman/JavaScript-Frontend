// Q1
// (
//     async()=>{
//         let p1= new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve("hello")
//             }, 2000);
//         })
//         let p2= new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve("world")
//             }, 2000);
//         })
//         p1.then(value=>{
//             console.log(value)
//         })
//         p2.then(value=>{
//             console.log(value)
//         })
//     }
// )()



// function p(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("hello\n world")
//         }, 2000);
//     })
// }
// (async()=>{
//     let x= await p()
//     console.log(x)
// })()


// Q2
// let arr=[1,2,3]
// let sum=0
// function ave(a,b,c){
//     console.log((a+b+c)/3)
//     }

// ave(...arr)



// Q3
// (
//     async (n)=>{
//         let p=new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve("resolved")
//             }, n);
//         })
//         console.log(p)
//         p.then(value=>{
//             console.log(value)
//         })
//     }
   
// )(2000)


const p=(n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("resolved")    
        }, n);
    })
}
(
    async()=>{
        let x=await p(2000)
        console.log(x)
        let y=await p(4000)
        console.log(y)
    }
)()


// Q4
function simpleInterest(x,y,z){
    return (x*y*z)/100
}
console.log(simpleInterest(1000,5,1)) //yani agar kisi ko 1000 rupees diye hn, 5% interest 
// rate k saath , 1 year k liye to ap kitny rupee izafi milyn gy
