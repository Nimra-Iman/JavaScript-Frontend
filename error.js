// try _catch
// try k ander kuch likhyn gy or agar error a gya to poora code ruky ga nhi bal
// k catch m likhi hui cheez chly gi or vo bhi koi error k tor pr show nhi 
// ho gi vo ek console.log() statement k tor pr show ho gi
try {
    console.log(nimra)
}
catch (error) {
    console.log(error) //yani nimra ek undefind cheez h is liye error de ga, 
    //error s bachny k liye hm n us ko try k ander likha ta k generated error 
    // valy code ko khraab na kry.
} //agar try m error na hua to catch nhi chly ga

// try_catch don't work on asynchronous means  sheduled code like 
// settimeout. like below:
// try {
//     setTimeout(() => {
//         console.log("in settimeout")
//         console.log(iman)
//     }, 1000)
// }
// catch (err) {
//     console.log(err)
// }

// however: it works like this(on below line of code)
setTimeout(() => {
    try {
        console.log("in try and catch inside ")
        console.log(im)
    }
    catch (err) {
        console.log("ignore error")
    }
}, 2000);


// error object and custom error
try {
    console.log(nimra)
}
catch (error) {
    // console.log(error) //this "error" is an error object
    console.log(error.name) //yha error ka name "reference error" ho ga
    console.log(error.message) 
}

//  throwing custome errors
// throw new Error("this is a custome error") //is trah s error show ho ga red line vala

try{
    throw new ReferenceError("this is reference error")
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}



// "try_catch" and then "finally"
//  finally har haal m chalta h 
// ---> finally ka ek faida y hota h k agar catch m bhi koi error aya to finally vala phir 
// bhi chalta h 
// ---> finally are used for final cleanups, yani y hm use krty hn "to close the file"
// "to exit the loop", "write to log file" etc

try{
    console.log("i am in try")
    console.log(nimra)
}
catch(err){
    console.log("this is an error")
    console.log(nimra)

}
finally{
    console.log("i am in finally")
}

// ---> finally are used inside functions , yani k jab hm return bhi kr den to finally 
// phir bhi chalta h, return s forn phly chalta h 
const fun=()=>{
    try{
        console.log("this is a try")
        console.log(nimra)
        return
    }
    catch(err){
        console.log("this is an error")
        console.log(nimra)
    
    }
    finally{
        console.log("i am in finally")
    }
}
fun()

