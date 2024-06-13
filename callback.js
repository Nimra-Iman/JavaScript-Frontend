// callbacks: yani function ko ek argument k tor pr pass krna


//  below is callback style of asynchronous programming
function loadscript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    document.body.append(script)
    script.onload = (function () {
        console.log("link appended")
        callback(null, src); // yani y function tab chly ga jab script load ho ga
    })
    script.onerror = (function () { //yani agar scr load na ho to y chal pry
        callback(new Error("error occured"))
        console.log("there is an error in loading script")
    })
}
const sec_fun = (error, src) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("loaded " + src)
}
loadscript("https://cdn.jdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", sec_fun)



// disdavantages of callbacks:
// 1- callback m hm poora function pkraty hn or poora function pkrana bht harmful ho
// skta h, code likhna bhi mushkil hota h
// 2- agar hm esy kryn k ek callback chlai or phir agar vo load ho gi or arror na aya
// to koi doosri callback den gy jo k koi doosra action perform kr rhi ho gi, phir jab
// vo doosri call back load ho gi or error na aya to teesri callback load ho gi jo k
// koi teesra function perform kr rhi ho gi, isi trah chalta jay ga or code ko
// manage krna bhhhttt difficult ho jay ga, is ko "callback hell" or "pyramid of doom"
// bolty hn












//   practice example

// function time(){
//     let a=setTimeout(function(){
//         alert("OK")
//     },2000)
// }
// function tttt(callback) {
//     callback()
// }
// tttt(time)






function handleEvent(event, callback) {
    event()
    callback()
}
function c() {
    alert("great")
}
function e() {
    let a = document.getElementById("btn-id")
    a.onclick = c
}

handleEvent(e, c)






function processArray(array, callback) {
    // array()
    callback(array())
}

function a() {
    return [1, 2, 3, 4]
}
function double(arr) {
    arr.forEach(element => {
        console.log(element * element)
    });
}
processArray(a, double)









