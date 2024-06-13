//   ****************  question 1
// let arr=[]
// for(let i=0;i<5;i++){
//     let a=prompt("enter a value")
//     arr.push(a)
// }
// console.log(arr)

// Question 2
// let arr=[]
// for(let i=0;i<3;i++){
//     let a=prompt("enter a value")
//     arr.push(a)
// }
// alert(arr) 

// // let b=promp("enter another value")
// do{
//     var b=prompt("enter another value")
//     arr.push(b)
// }
// while(b!=0)
// if(b==0){
//     console.log(arr)
// }




// question 3
// let arr=[200,300,76,23]
// let new_array=arr.filter((value)=>{
//     return ((value%10==0))
// })
// console.log(new_array)


// question 4
// let arr=[2,3,4,5]
// let new_array=arr.map((value)=>{
//     return value*value
// }
// )
// console.log(new_array)

// question 5 
// let arr=[1,2,3,4,5]
// let num= arr.length
// let final_array=arr.reverse()
// // [5,4,3,2,1]
// let fact=final_array.reduce((value1,value2)=>{
//     return value1*value2
// }
// )
// console.log(fact)





// // problem
// let random_num=Math.floor(Math.random()*101)
// console.log(random_num)
// let input
// input=Number.parseInt(input)
// let check=0
// while(random_num!=input){
//     if(random_num>input){

//         console.log("your have entered a smaller number, enter some greater")
//         input= prompt("enter a number")
//         check++
//     }
//     else if(random_num<input){

//         console.log("your have entered a larger number, enetr some smaller")
//         input= prompt("enter a number")
//         check++
//     }
// }
// if(random_num==input){
//     console.log("congratulations , you win in ", check, "attempts")     
// }



// question 1
// let age=prompt("enter your age")
// age=Number.parseInt(age)
// alert("you " + (age>18? " can drive": "cannot drive") )


// question2
// let age=prompt("enter your age")
// age=Number.parseInt(age)
// alert("you " + (age>18? " can drive": "cannot drive") )
// let watch_again_prompt=confirm("you do want to watch prompt again?")
// while(watch_again_prompt==true){
//     age=prompt("enter your age")
//     alert("you " + (age>18? " can drive": "cannot drive") )
//     watch_again_prompt=confirm("you do want to watch prompt again?")
// }



// question3
// let age = prompt("enter your age")
// age = Number.parseInt(age)
// if (age >= 18) {
//     alert("yes, you can drive")
// }
// else if (age < 0) {
//     console.error("enter a positive value")
//      age = prompt("enter your age")
//     age = Number.parseInt(age)
//     if (age >= 18) {
//         alert("yes, you can drive")
//     }
//     else {
//         alert("you cannot drive")
//     }

// }
// else {
//     alert("you cannot drive")
// }




// question4(jha pr bhi ho vha s google pr chly jao agar user n value 4 s bri daali h)

// let a=prompt("enter a value")
// a=Number.parseInt(a)
// if(a>4){
//     location.href  =("https://google.com")
// }




// <!-- question 5 -->

// <!-- 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script>
//         let color=prompt("enter a color")
//         document.body.style.background=color
//     </script>
// </body>
// </html> --></head>




// guess the number
// let x = Math.floor(Math.random() * 10)
// console.log(x)
// count = -1
// var value
// do {
//     value = prompt("enter a value")
//     value = Number.parseInt(value)
//     count++
// }

// while (value != x)

// console.log("won in", count)







