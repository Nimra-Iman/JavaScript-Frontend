// agar ek class animal vali h or doosri monkey ki h , m chahta hu k monkey ki class m
// animal ki bhi qualities hun or monkey ki apini bhi kuch izafi qualities hun, ap esa
// kr skty ho k animal vali class ka sara code copy paste kr k monkey m daal do lekin
// phir jab ap animal m changes kro gy to vo changes monkey vali class m nhi hon gy, is 
// ka ek disadvantage y bhi h k line ofcode ziada ho jata h ; hm esa 
// chahty hn k animal vali class k changes monkey ki class m bhi ho jay automatically, is
// liye hm inheritance ko use krty hn 
class Animal{
    constructor(name, color){
        this.name=name
        this.color=color
    }
    barking(){
        console.log(`${this.name} is barkling`)
    }
    sleeping(){
        console.log(`${this.name} is sleeping`)
    }
}
class monkey extends Animal{
    eating(){
        console.log(`${this.name} is eating banana `)
    }
}
let ani=new Animal("lion","red")
let mon=new monkey("monkey","brown")
ani.barking()
mon.eating()
