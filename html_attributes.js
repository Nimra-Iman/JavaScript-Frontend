// getattribute() : method used to get value of an attribute
let a=document.getElementById("div-id")
console.log(a.getAttribute("class")) //yani "div-id" vala jo element h us ki class bta do


// hasattribute(): kia is element m y attribute lga hua h ya nhi
console.log(a.hasAttribute("class")) //true
console.log(a.hasAttribute("style")) //false


// setattribute(): used to set the value of attribute
console.log(a.setAttribute("hidden", "true")) //hidden attribute ko true kr dia
console.log(a.setAttribute("class","new-div-class")) //elements m ja kr dekho to y new class
// set hui hui ho gi

// removeAttribute()
console.log(a.removeAttribute("hidden"))


// attributes(to get collection of all attributes)
console.log(a.attributes) // yani saary attributes jo us element pr lgy hn jis ki id "div-id" h

// custom_attributes(you can always create your own attributes but make sure that your
// attribute is written with "data-(attribute name without brackets)"    )
console.log(a.dataset) // yani a k ander jitny bhi custom attributes lgy th vo sab show kr do
console.log(a.dataset.game) //"my-attribute"










