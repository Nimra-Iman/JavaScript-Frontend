// they are key-value pairs separated by semicolon
// jab ap server ko request bhejty ho to server http k response msg m hi http header
// pr "set cookie" k zrye cookie bhejta h or vo cookie ap k browser m save ho jati h 
// next time jab apka browser request bhejta h to vo cookie bhi saath bhejta h or server
// ap ko identify kr leta h

// ek page pr ek s ziada cookie ho skty hn

// console.log(document.cookie) //page pr jitny bhi cookie hn vo sab show ho jaty hn
// vesy is page pr koi cookie nhi h, m phly cookie dalu gi: like below
document.cookie="1st_cookie=nimra_1" //this is a set call
document.cookie="name2=nimra_2"//this is also a set call //yhan m n jab 2nd cookie write ki
//to esa nhi ho ga pichli cookie hat jay gi bal k pichli vali k ander hi y vali bhi add ho jay gi
// y cookie ki khasiat h k write krny s pichla vala nhi hatta, lekin agar two cookies
// hn or dono ki key same hn to phly vali cookie ki value update ho jay gi : like i did 
// below;
document.cookie="1st_cookie=nimra_3" //this is another ser call




// encodeURIfunction   and decodeURIfunction:
// agar aap user s mango cookie ki key and value to ap us ko cookie m set kr skty ho like
// below:
// let key=prompt("enter your key")
// let value=prompt("enter your value")
// document.cookie=`${key}=${value}`

// ab masla y ata h k agar user end ";" pr ya "=" pr kr de 
// to system usy cookie ki keyvalue nhi smjh sky ga(do it on console to understand), is
// liye hm encodeURIfunction ka use kryn gy, jo special cases vali key ya value ko encode
// kr k show klry ga or phir us ko decode krny k liye hm decodeURIfunction ka use kryn gy

let key2=prompt("enter your key")
let value2=prompt("enter your value")
document.cookie=`${encodeURIComponent(key2)}=${encodeURIComponent(value2)}`
// for decoding-> write on console: decodeURIcomponent("encodedvalue likhni h yha ") 




document.cookie="naam=reroro ; doosra_naam==iman" //is trah likhny s two cookies set nhi
// hon gi bal k naam=reroro to set ho jay gi lekin doosra_naam==iman ko ignore kr dia jay
// ga , semicolon(;) k baad jo kuch bhi ho ga vo options hon gy, ap path ka option
// use kr skty ho, aap expires ka option use krty ho , like below:
document.cookie="naam=reroro ; path=/a; expire=Tue 23 Jan 2023 03:18:22 GMT" //today is 
// 22 jan 2023, kal jab m y is time oprn kru gi to y vali cookie expire ho chuki ho gi
// jis path pr hm n cookie enable ki h, sirf usi paath pr enable ho gi

console.log(document.cookie) 
//  *************** NOTE  
// THE NAME=VALUE pair after encodeURIcomponent shoukd not exceed 4kb
// number of cookies per domain limited to only 20 (exact number is browser dependent) 
// e.g codewithharry website is also a domain


