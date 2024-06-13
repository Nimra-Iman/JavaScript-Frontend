
// in order to change the color of card title to red
console.log(document.getElementsByClassName("card-title")[0].style.color="red")

console.log(document.getElementsByTagName("h1")[0].style.color="red")

// querySelector and querySelectorAll
let ctitle=document.querySelectorAll(".card-title")
console.log(ctitle) //all elements with class name card-title

console.log(ctitle[0].style.color="green")
console.log(ctitle[1].style.color="red")
console.log(ctitle[2].style.color="blue")

let title=document.querySelectorAll(".card-title")
console.log(title) 



let titled=document.querySelector(".card-title")
console.log(titled.style.color="cyan") // yani ji nin elements ki bhi class card-title h to
// un m s sirf phly vala ek element de do
// querySelectorAll(".card-title")[0]=== querySelector(".card-title") but query selector
// is efficient than this querySelectorAll(".card-title")[0]













