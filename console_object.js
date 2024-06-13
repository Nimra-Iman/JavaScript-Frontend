console.log(console) //list of all methods of console
console.error("this is an error") //to show error, (in red color)
console.clear()  //y chalany s sara console clear ho jay ga or uper likh kr ay ga "cosole was cleared"
console.table(obj_name) //y kisi bhi object ki key_values ko tabular form m show krti h
    //  e.g:
    // let obj={
    //     a:1, b:2,c:3
    // }
    // console.table(obj)
console.warn("hey! this is last warning that don't smoke") // show warning in yellow color
console.info("this is very important") //console.log() and console.info() are almost same

console.time("p1") //time count start kro
console.timeEnd("p1") // y ap ko btata h k ek process comlete hony m kitna time lga, ab in 
// dono lines m ap ko btayn gy k line 13 s line 14 k beech m kitn time lga 


//   ********************   concept clearing (vip question for interview)
// if i want k "forloop" ko chalny m or while loop ko chalny m kitna time lga 

console.time("forloop")
 for(let i=0;i<100000;i++){
    
 }
 console.timeEnd("forloop")

 console.time("whileloop")
 let b=0
 while(b<100000){
    b++
 }
 
 console.timeEnd("whileloop")


