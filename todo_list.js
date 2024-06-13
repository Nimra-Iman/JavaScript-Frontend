// let times=prompt("how many todo's you wanna add?")
// times=Number.parseInt(times)
let a = document.getElementById("btn-id1")
a.onclick = () => {
    let times = prompt("how many todo's you wanna add?")
    times = Number.parseInt(times)
    let output=""
    for (let i = 1; i<=times;i++) {
        let value = prompt("enter your work")
        localStorage.setItem(i, value) 
       output+=`${i}:${value}<br>` //Concatenate the output for each iteration
    }
    let p=document.getElementById("parag")
    p.innerHTML=output
    }
    let b = document.getElementById("btn-id2")
    b.onclick = () => {
        let key1 = prompt("enter your work number to remove todo")
        localStorage.removeItem(`${key1}`)
        
    }
    let c = document.getElementById("btn-id3")
    c.onclick = () => {
        let key2 = prompt("enter your work number to access todo")
        console.log(localStorage.getItem(key2))
}





























// let times=prompt("how many todo's you wanna add?")
// times=Number.parseInt(times)
// let a=document.getElementById("btn-id1")
// a.onclick=()=>{
//     for(let i=0;i<times;i++){
//     let value=prompt("enter your work")
//     localStorage.setItem(i,value)
// }}
// let b=document.getElementById("btn-id2")
// b.onclick=()=>{
//     let key1=prompt("enter your work number to remove todo")
//     localStorage.removeItem(`${key1}`)
// }
// let c=document.getElementById("btn-id3")
// c.onclick=()=>{
//     let key2=prompt("enter your work number to access todo")
//     console.log(localStorage.getItem(key2))
// }

