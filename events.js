// koi bhi kaam krna ek event h, mouse s kuch click krna ek event h
// mouse ko move krna ek event h, keyboeard s kuch tyoe krna ek event h and so on

let a=document.getElementsByClassName("btn-class")[0]
a.onclick = ()=>{
    let b=document.getElementById("p-id")
    b.innerHTML="hey! i am a secret"
}
