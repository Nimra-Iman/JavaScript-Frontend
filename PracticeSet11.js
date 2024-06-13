class complex{
    // constructor(real,imaginary){
    //     this._real=real
    //     this._imaginary=imaginary
    // }
    // 2+3i
    input(){
       let num1= prompt("enter number")
        let part1=num1.split("+")
       
        this._real =part1[0]
        this._real=Number.parseInt(this._real)
        this._imaginary =part1[1]
        this._imaginary=Number.parseInt(this._imaginary)

        let num2=prompt("enter another number")
        let part2=num2.split("+")
        this.real =part2[0]
        this.real=Number.parseInt(this.real)
        this.imaginary =part2[1]
        this.imaginary=Number.parseInt(this.imaginary)
    } 
    get number(){
        console.log("the first real aprt you entered is " + this._real)
        console.log("the first imaginary aprt you entered is " + this._imaginary)

    }
    add(){
        console.log(this._real + this.real,"+",this._imaginary + this.imaginary,"i" )
        
    }
}
let c=new complex()
c.input()
c.number
c.add()




// //  last question
// class complex{
//     constructor(compl){
//         this.compl=compl
//     }
//     get gets(){
//         return (this.compl)
//     }
//     set setter(newCompl){
//         this.compl=newCompl
//     }

// }
// let c=new complex("1+1i")
// console.log(c.gets)
// c.setter = ("2+2i")
// console.log(c.gets) 

