// in order to change the class of an element
let a=document.getElementById("my-id")
a.className="red dark"

// if i want k m is m s specifically "dark" class hta du to is k liye "classlist" use hota
console.log(a.classList) //saari classes jo "a" pr lgi hu gi

a.classList.remove("red") //yani red vali class ko remove kr do
a.classList.add("yellow") //yani yellow vali class ko a m add kr do
// agar esy hi htana lgana chla rhy to "toggle" ko use krty hn

a.classList.toggle("red") //yani agar red class h to hta do , agar nhi h to lga do
a.classList.toggle("red") 
// toggle can be used k agar hidden lga h to hta do agar nhi lga to lga do

console.log(a.classList.contains("red")) //return true if a m "red" class lgi ho gi, otherwise false



