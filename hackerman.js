async function hacker1(){
    let p1=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("INITIALIZING HACK PROGRAM! PLEASE WAIT...  ")
        }, 2000);   
    })
    let one=await p1
    // console.log(one)
    document.getElementById("p1").innerHTML=one
}

hacker1()

      
async function hacker2(){
    let p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("HACKING AQSA'S ISTRAGRAM'S USERNAME... ")
        }, 4000);   
    })
    let two=await p2
    document.getElementById("p2").innerHTML=two
}

hacker2()
async function hacker3(){
    let p3=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("USERNAME FOUND 'AQSA_7' ")
        }, 6000);   
    })
    let three=await p3
    // let two=await p2
    document.getElementById("p3").innerHTML=three
}
hacker3()

async function hacker4(){
    let p4=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("CONNECTING TO FACEBOOK ACCOUNT: PASSWORD = aqsa9292@ ")
        }, 8000);   
    })
    let four=await p4
    document.getElementById("p4").innerHTML=four
}
hacker4()


