// setinterval: jab hm n baar baar ek specific interval k baad JS ko execute krna ho
// settimeout: jab hm JS k execute hony k ek specific interval k baad us ko print 
// krvana chahty hn 

let a=setTimeout (function(){
     alert("i am inside settimeout")

}, 2000 ) //yani execute hony k 2000ms means 2s k baad alert generate ho

clearTimeout(a) //esa krny s m SETTIMEOUT k execution ko stop kr rhi hu, ab 5s k
// baad koi alert generate nhi ho ga

//settimeout kr k hm function to bnaty hi hn, but hm function k arguments bhi de skty
// like below:
const sum=(a,b)=>{
    alert("sum of a and b=" + (a+b))
}
setTimeout(sum, 5000, 2,4) // yani 5000ms and (2,4) are arguments of function sum


// setinterval has similar syntax as of settimeout but difference y h k setinterval
// interval complete hony k baad baar baar show kry ga 
let b=setInterval(function(){
    alert("i am inside setinterval")
}, 2000) //yani hr 2s k baad alert generate kro
clearInterval(b) // b ki execution stop kr de ga

