//                 asynchronous actions
// the actions that are initiated now but complete later e.g: setinterval (yani  k
// like down below : )

console.log("start")
let a=setTimeout(() => {
    console.log("in setinterval")
}, 3000);
console.log("end") //phly start chla phir jab set interval pr aya to initiate to ho
// gya but background m throw kr dia k jab time poora ho ga tab complete kr den gy,
// ohir time poora hony s phly end chla phir setinterval chla 




console.log("start2")
let x=setTimeout(() => {
    console.log("in setinterval")
}, 6000);
console.log("end2")




//              synchronous actions
// actions that initiate and finish one by one
console.log("i")
console.log("am")
console.log("nimra")
let b=prompt("this is prompt") //phly i chla phir am chla phir nimra phir this is prompt
// chla, yani one by one chla


