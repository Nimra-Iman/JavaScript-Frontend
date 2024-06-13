// in the code of "classes_objects.js" m fill bhary bagher hm doosry methods ko cal kr 
// den to this.name and this.trainno ki jga "undefined" "undefined" show ho ga, hm is 
// ko vesy control kr skty hn msln error handling k zrye ya checks lga kr; lekin hm
// constructor ka use kryn gy, apny kaam ko asaan krny k liye
//     => constructor hr dfa call ho ga jab bhi object ko bnaya jay ga 
class RailwayForm {
    constructor(givenname, trainno,address) {
        console.log("constructor is called...")
        this.name = givenname
        this.trainno = trainno
        this.address=address
    }
    submit() {
        alert(this.name + " your form is submitted for train number " + this.trainno + " and you will go to that address " + this.address)
    }
    cancel() {
        this.trainno=0
        alert(this.name + " your form is cancelled for train number " + this.trainno + " and you will not go to that address " + this.address)
    }
}
let harry = new RailwayForm("harry",7648,"lahore")
// harry.fill("harry",7648) 
harry.submit()
let larry = new RailwayForm("larry",47783,"karachi")
// larry.fill("larry",47783)
larry.submit()
larry.cancel() 
