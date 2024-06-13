let jokes_array  =  ["I ordered a chicken and an egg from Amazon. I'll let you know.",
"What month is the shortest of the year? May, it only has three letters.",
"What did the snail who was riding on the turtle's back say? Wheeeee!",
"I was going to tell a time traveling joke, but you guys didn't like it.",
"What do you call a lazy kangaroo? A pouch potato.",
"I used to run a dating service for chickens, but I was struggling to make hens meet.",
"Why do we tell actors to break a leg? Because every play has a cast.",
"What does a pig put on dry skin? Oinkment.",
"What do you call it when a snowman throws a tantrum? A meltdown.",
"My uncle named his dogs Timex and Rolex. They're his watch dogs."]

let rand=Math.floor(Math.random() * jokes_array.length )
let x=(jokes_array[rand])
let p=(document.getElementsByTagName("div")[0].firstElementChild)
console.log(p.innerHTML=x)

let clr=document.getElementById("heading_id")
console.log(clr.style.color="red")
console.log(clr.style.background="black")







