// they are used to assign multiple handlers to an event
let a=document.getElementById("btn-id")
a.addEventListener("click", function(){
    alert("1st alert")
})
a.addEventListener("click", function(){
    alert("2nd alert")
})

// agar m esa chahu k mera sirf pehla alert show ho to is k liye m remove event
// listener kru gi, like below:
a.removeEventListener("click", function(){
    alert("1st alert")
}) //lekin esa krny s y remove nhi ho ga because yha jo function lga hua h or vo 
// function jo addEventListener (1st alert) valy pr h vo dono JS different functions
// consider kry ga, is s bachny k liye hm alag function bnaty hn or un functions ko 
// pass krty hn : like this:   

let b=document.getElementById("btn")
const x=()=>{
    alert("this is nemrah")
}
const y=()=>{
    alert("this is imann")
}

b.addEventListener("click", x)
b.addEventListener("click", y)

// now i wanna remove y vala:
b.removeEventListener("click", y)



//  *****************    EVENT OBJECT   ********************
// jab bhi koi event hota h , to browser ek event object bnata h jis k ander
// event ki saaarrriii details hoti hn or phir vo object us handler ko(means function)
// pass kr deta h ; vo event object dekhny k liye hm esy kr skty hn
b.addEventListener("mouseenter", function(e){ //yha zroori nhi k "e" hi likhna h, kuch bhhhhiii likh lo
    console.log("button pr mouse enter hua")
    console.log(e) //object
    console.log(e.target) //yani y event kis cheez ko target kr rha, is case m 
    // vo button ho ga jo target ho rha
    console.log(e.type) //mouseenter
    console.log(e.clientX, e.clientY) 
})

