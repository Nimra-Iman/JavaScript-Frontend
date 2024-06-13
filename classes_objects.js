class RailwayForm{
    submit(){
        alert(this.name + " your form is submitted for train number " + this.trainno)
    }
    cancel(){
        alert(this.name + " your form is cancelled for train number " + this.trainno)
    }
    fill(givenname,trainno){
        this.name=givenname  // “This” keyword refers to an object that is executing
        //  the current piece of code, yani "this" s murad k y cheez ab us specific object
        // ki property ban gi jis k through isy call kia ja rha h
        this.trainno=trainno
    }
}
let harry=new RailwayForm() //jab ek class k multiple objects bnay hu to "new" use krna h
harry.fill("harry",7648) 
harry.submit()

let larry=new RailwayForm()
larry.fill("larry",47783)
larry.submit()
larry.cancel() 


