// JS k ander jo kuch bhi h sab kuch "window" k ander h, "window" ek global object h
// even console.log bhi window k ander hi h, DOM,BOM bhi window k ander h
console.log(window)
window.console.log() //we can also write this because sab kuch window k ander hi present h
window.alert("everything of js is in window") //etc

//  *******************  DOM (document oject model)
// poory html paga ka ek JS object bna dia jata h jis ko document bolty hn

console.log(document) //google pr ja kr console open kro to saaaarrrriiii HTML show ho gi
// or us saari ko ek JS ky object k tor pr shoe kia jay ga
console.log(document.body)


//   ****************  BOM(browser object model)
// kuch additional information jo browser side pr provide ki jati h 
// e.g confirm, prompt, alert etc


// host environment hamesha browser nhi hota ; agar koi phone hi JS ko run kr rha h to 
// host environment y phone ho ga  


 
