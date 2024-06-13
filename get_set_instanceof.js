// ******** getters and setters
// const person={
//     fname:"nimra",
//     lname:"iman"
// }
// console.log(`${person.fname} ${person.lname}`) //akser esa ho ga k hmy person ka fulname
// // chahye ho ga to hmy baar baar y likhna pry ga is liye behter h k is cheez ka ek method 
// // bna do, like below:

// const person={
//     fname:"nimra",
//     lname:"iman",
//     fullname(){
//         return `${person.fname} ${person.lname}`
//     }
// }
// console.log(person.fullname()) //ab hr jga hm is ko call kr skty but problem is that k y
// sirf readonly h, hm is ko update nhi kr skty, is liye getters and setters use kiye 
// jaty hn 
// GETTERS => to access property
// SETTERS => to update them

// now we update above code like this:
const person={
    fname:"nimra",
    lname:"iman",
    get fullname(){
        return `${person.fname} ${person.lname}`
    },
    set fullname(value){
       let parts=value.split(" ")
        this.fname=parts[0]
        this.lname=parts[1]
    }
}
person.fullname= "iman nimra"
console.log(person.fullname) //now the name is updated because we have updated it via set.

// %%%%%%%%%%  another example  %%%%%%%%%%%

class fullname{
    constructor(name){
        this._name=name
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName
    }
}
let p=new fullname("nimra")
console.log(p.name) //nimra
p.name="iman (new name)"
console.log(p.name) //iman(new name)




// // ******* instance of operator  ******
// class animal{
//    constructor(name){
//     this.name=name
//    } 
//    walk(){
//     console.log(`${this.name} is walking`)
//    }
// }
// class childs extends animal{
//     talk(){
//         console.log(`${this.name} is talking`)
//     }
// }
// let a=new animal("nimra")
// let c=new childs("children")
// c.walk()
// console.log(c instanceof animal) //true
// console.log(a instanceof animal) //yani kia "a" "animal" class ko koi object h ya nhi, is
// // case m is ka answer true ay ga 
// // instanceof returns true if an object belongs to a class or any other class inheriting
// // from it.
// console.log(a instanceof childs)  //false



