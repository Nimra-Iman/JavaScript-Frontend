// matches, closest and contains

// matches: to check if element matches the specific css selector,yani kia y element
// is class s match krta h ya nhi 
let eleme= document.getElementById("heading1") 
console.log(eleme.matches(".heading1-class"))
// ------------ OR -------------
let elementtt= document.body.firstElementChild
console.log(elementtt)
console.log(elementtt.matches(".heading1-class"))

       
// closest:
// maan lo k koi element h or y check krna h k given CSS selector us element k 
// ancestors m h ya nhi
// check kro k jo span element h us k ansectors m "heading1-class" name s koi element
//  h ya nhi

let sp1=document.getElementById("span-id")
console.log(sp1.closest(".heading1-class")) 
console.log(sp1.closest("#span-id")) //is case m y span khud hi return ho jay ga, vo 
// check kry ga k kia y element "span vala" is css selector jo k is case m 
//  #span-id h us ko match krta h ya nhi, agar nhi to us k ancestors m check kry ga,
// agar vha bhi na mila to us k ancestors m phir us k ancestors m and so on


   
// contains
// returns true if element b is inside of element a  
// or when element a==element b
let elem= document.getElementById("heading1") 
let sp=document.getElementById("span-id")
console.log(elem.contains(sp))  //true
console.log(sp.contains(sp)) //true






