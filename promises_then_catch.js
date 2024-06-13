// promises are used for parallel execution
let p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("in promise 1 and i am fulfilled") yha mostly kuch nhi likhty 
        // sab hi .then() ya .catch() m likhty hn
    }, 3000);
    resolve(432)
})
console.log(p1)
//ab esa nhi ho ga k p1 phly chaly phir 3 second k baad p2 chaly bal k y dono parallel chly gy
let p2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        // console.log("in promise 2 and i am rejected")
    },3000)
    reject(new Error("an error occured"))     
})
         
console.log(p2)

// consumer functions: .then, .catch
p1.then(value=>{
    console.log(value)
})

p1.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );

p2.catch(error=>{
    console.log(error) //yani hm n error ko handle kr dia
})



