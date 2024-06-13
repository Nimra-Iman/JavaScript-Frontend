function average(x, y) {
    return ((x + y) / 2)
}
a = 5
b = 4
m = 8
n = 44
console.log("average of a and b=", average(a, b))
console.log("average of m and n=", average(m, n))
console.log("average of a and b=", average(a, b))


// arrow function
const sum = (p, q) => {
    return (p + q)
}
console.log("sum =", sum(2, 3))

// function without arguments
const hello = () => {
    console.log("hey, i am nimra")
}
hello()

//can also do like that 
const hii = () => {
    console.log("hey, i am nimra")
    return ("returnnnn")
}
let v = hii()
console.log(v)



