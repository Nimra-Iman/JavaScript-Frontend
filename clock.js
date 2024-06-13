
let a = setInterval(function () {
    let dat = new Date()
    let d = dat.getDate()
    let h = dat.getHours()
    let m = dat.getMinutes()
    let s = dat.getSeconds()
    let hour=document.getElementsByClassName("p1")[0]
    hour.innerHTML=h
    let minute=document.getElementsByClassName("p2")[0]
    minute.innerHTML=m
    let seconds=document.getElementsByClassName("p3")[0]
    seconds.innerHTML=s
   
}, 1000 )

const change=()=>{
    let i=document.getElementById("btn-id")
    i.innerHTML=("click to stop timer")
}



let id=document.getElementById("btn-id")
id.addEventListener('click', change )

// const time=()=>{

//     let o=setInterval(function(){
//         let j=0
//         // let d=new Date()
//         //  sec = d.getSeconds()
//         let k=0
//     // document.getElementById("time").innerHTML=sec
   
//     var s=j+j
//     j++
//         document.getElementById("time").innerHTML=s
//     },1000)
    
// }



const time=()=>{
    console.time("ii")
    let k=document.getElementById("btn-id")
    k.onclick(console.timeEnd("ii"))
}

id.addEventListener('click',time)











