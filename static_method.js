// vo methods jo class k ander to hun or unhay hm use bhi kryn lrkin un ko class 
// k object k zrye call na kryn
// static methods are used to implement functions that belong to a class as a whole 
// but not to a particular object
class animal{
    constructor(name){
        this.name=animal.capitalize(name)
    } 
    walk(){
        console.log(`animal ${this.name} is walking`) //ab yha jo name user pass kry ga 
        // us ka first letter mostly small hi ho ga, m esa chati hu k har haal m 
        // pass kiye gay name ka phla letter capital or baki small hon to m static method 
        // is trah s use kru gi, like below
    }
    static capitalize(name){
        return name[0].toUpperCase() + name.slice(1,name.length)
    }
}
let a=new animal("jack")
a.walk()