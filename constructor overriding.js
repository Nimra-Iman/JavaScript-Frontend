class Employee {
    constructor() {
       console.log(" parent constructor is here...")
    }
}
class Programmer extends Employee {
    constructor(){
        super() 
        console.log("child's constructor is here")
    } // agar ap child m super vala constructor use nhi krty bal k child ka apna ek constructor 
    // bnaty ho to error ay ga vo khy ga k super constructior ko har haal m call krna h
    // child class m agar ap alag ek constructor bna lety ho or super ko call kr lety ho
    // to us k baad ap izafi kuch baty child valy constructor m add kr skty ho apni
    // zrurt k mutabiq,,,,,  or ek sab s important baat ***********"this" ko use krny 
    // s phly ap ko super() ko call krna hota h, vrna error ata h***********
    requeatCoffee() {
        console.log(`he got coffee`)
    }
}
// let e = new Employee("larry")
let p = new Programmer() //hm n Programmer m constructor bnaya bhi nhi tha lekin 
// phir bhi constructor a gya, esa is liye hua k hm chahy constructor na bhi bnay 
// lekin phir bhi JS khud hi ek is trah ka constructor child m bna de ga: like below
// constructor(... args){
//     super(... args) // arguments bhi automatically a jaty hn of course
// } exact y cheez programmer class m khud hi a jay gi
p.requeatCoffee()
