const operation = () => {
    let num = prompt("how many task you wanna add?")
    num = Number.parseInt(num)
    let i=1
    while(true){
    let value = prompt("enter your task")
        localStorage.setItem(i,value)
        i++
    }
}
let b = document.getElementById("btn")
b.onclick = operation
