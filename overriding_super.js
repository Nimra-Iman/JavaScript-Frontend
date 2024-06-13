// // METHOD OVERRIDING
// class Employee {
//     constructor(name) {
//         this.name = name
//     }
//     login() {
//         console.log(`${this.name} is loggedin`)
//     }
//     logout() {
//         console.log(`${this.name} is logged out`)
//     }
//     leaverequest(leaves) {
//         console.log(`${this.name} got ${leaves}`)
//     }
// }
// class Programmer extends Employee {
//     requeatCoffee() {
//         console.log(`${this.name} got coffee`)
//     }
//     leaverequest(leaves) {
//         console.log(`${this.name} getsssssssss ${leaves + 1}`)
//     }
// }
// let e = new Employee("larry")
// let p = new Programmer("marry")
// e.login()
// p.leaverequest(2) // yhan getsssssssss vala chaly ga yani child class vala, this is
// // called method overriding 


// SUPER KEYWORD
//     ==> agar m n overriding ki h or parent class m mojod function k code ko
//   m child class m as it is le jau, or phir m y bhi chahun k parent class ki us class
// k code m ki gai changes child m bhi reflect hun, esa nhi ho ga k m simple copy paste
// bhi kru or changes bhi reflect hon saath k saath, to esa to possible nhi na,,,, m 
// kuch esa kru gi k parent class valy method k ander valy code copy krny ki bijay m 
// poori class ko hi kisi trah call kr lu, is trah uper parent m kiye gay changes 
// saath hi child m bhi a jayn gy

class Employee {
    constructor(name) {
        this.name = name
    }
    login() {
        console.log(`${this.name} is loggedin`)
    }
    logout() {
        console.log(`${this.name} is logged out`)
    }
    leaverequest(leaves) {
        console.log(this.name + " got " + (leaves))
    }
}
class Programmer extends Employee {
    requeatCoffee() {
        console.log(`${this.name} got coffee`)
    }
    leaverequest(leaves) {
        super.leaverequest(leaves+1)
    }
}
let e = new Employee("larry")
let p = new Programmer("marry")
e.login()
e.leaverequest(2)
p.leaverequest(2) 