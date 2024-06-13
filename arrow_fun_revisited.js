let a = () => console.log("hello"); console.log("h1") //can also be written but readibilioty reduces
a()

let b = (name) => console.log("hello ", name)
b("nimra")

let c = name => console.log("hello ", name) //also possible, but jab ek s ziada parameters 
// pass krny hn to bracket lgana zruri h
c("nimra")

let c1= nama=>{
    console.log(nama)
    console.log("ok")
}
c1("harry")

let d = (name, age) => console.log("hello ", name, "age: ", age) //also possible, but jab ek s ziada parameters 
// pass krny hn to bracket lgana zruri h
d("nimra", 20)

let e = {
    name: "nimra",
    role: "developer",
    exp: 20,
    show: function () {
        console.log(`the name is ${this.name} and role is ${this.role}`) //"this" s murad
        //  yhan y vala "e" name ka object h
        setTimeout(function () {
            console.log(`the name is ${this.name} and role is ${this.role}`) // yhan pr
            // "this" s murad y "e" object nhi h q k ap n function k ander ek or function 
            // bna dia, yhan pr "this" s murad window object h, like below
            console.log(this)
        }, 2000);
    }
}
e.show()

// 1- agar ap n kisi object k ander function key word ko use kr k function bnaya to "this" 
//      vo object ho ga, e.g : in aobe code "show" function m "this" object h
// 2- alone, "this" will be global object, e.g: settimeout k ander lga this
// 3- kisi event k ander "this" us element ko refer kry ga jis n us ko receive kia h


// agar uper valy function ki hi dubara baat kryn to hmy settimeout m "function" keyword 
// lga kr ${this.name} m "nimra" laany m msla tha, this.name m kuch aya hi nhi q k of course
// yhan to "this" ek window object tha,,,, is msly ko hal krny k 2 solutions hn
// 1- phla y k ap function keyword ko use na kro bal k "arrow" function ko use kr lo; like
// below:


let f = {
    name: "nimra",
    role: "developer",
    exp: 20,
    show: function () {
        setTimeout(()=> {
            console.log(`the name is ${this.name} and role is ${this.role}`) // yhan pr
            // "this" s murad y "e" object nhi h q k ap n function k ander ek or function 
            // bna dia, yhan pr "this" s murad window object h, like below
            console.log(this)
        }, 2000);
    }
}
f.show()

// 2- or doosra solution is trah s h, y solution purana h
let g = {
    name: "nimra",
    role: "developer",
    exp: 20,
    show: function () {
        let that=this
        setTimeout(()=> {
            console.log(`the name is ${that.name} and role is ${that.role}`) // yhan pr
            // "this" s murad y "e" object nhi h q k ap n function k ander ek or function 
            // bna dia, yhan pr "this" s murad window object h, like below
            
        }, 2000);
    }
}
g.show()