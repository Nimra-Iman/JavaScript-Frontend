// they are higher order array methods
// map is used when we want to make a new array and forEach is used jab ham n existing
// array k elemnts pr hi koi task perform krna hota h, forEach s hamesha kuch return krny 
// pr "undefined" show hota h but map s hm return krva skty
arr = [22, 33, 1, 5]
let new_array = arr.map((value, index, array) => {
    console.log(value, index, array)
    return (value * value)
})
console.log(new_array)

// map and forEach dono hi by default 3 cheezy le skty hn, phli cheez array items ki 
// value, doosri index or teesri poori ki poori array


//    ***********************  filter
arra = [22, 55, 77, 9, 1, 4]
let new_filtered_array = arra.filter((value) => {
    return value < 10
})
console.log(new_filtered_array)


//    *********************  reduce
arr3 = [2, 3, 1, 4, 6, 1]
let new_reduced_array=arr3.reduce((h1,h2)=>{
    return (h1+h2)
})
console.log(new_reduced_array)  //17

//  can also be done like that:

arr_another = [2, 3, 1, 4, 6, 1]
let sum_unique=(h1,h2)=>{
    return(h1+h2)
}
let new_reduced_array_another=arr3.reduce((sum_unique))
console.log(new_reduced_array_another)


