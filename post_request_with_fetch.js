// Json.stringify : javascript object ko string m convert krta h
// json.parse:  valid json string ko javascript object m convert krta h
let options ={
    method: "POST",
    headers:{
        "content-type":"application/json"
    },
    body: JSON.stringify({ //JSON.stringify likhna zruri h q k  When making a POST 
        // request with the fetch API and sending data in the request body, the data
        //  needs to be in JSON format.
        id:"1",
        "name": "nimra",
        "sec-name":"iman"
    })
}
let p=fetch("https://jsonplaceholder.typicode.com/posts",options)
p.then(response=>{
    console.log(response.status)
    console.log(response.ok)   
    return (response.json())
}).then(value=>{
    console.log(value)
})

// the above format is a way to post some data on server and is syntax of fetch API,
// we did the same thing in another way using ASYNC/AWAIT function

const createtodo= async ()=>{
    let options ={
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({ //JSON.stringify likhna zruri h q k  When making a POST 
            // request with the fetch API and sending data in the request body, the data
            //  needs to be in JSON format.
            id:"1",
            "name": "nimra",
            "sec-name":"iman"
        })
    }
    let p= await fetch("https://jsonplaceholder.typicode.com/posts",options) //yani tab
    // tak wait kro jab tak k diye gay url pr data post hony ka promise resolve 
    // na ho jay
    let response= await p.json() //If not awaited, the program might attempt to work 
    // with the response before it's fully available in parsed JSON format.
    return response
}
const mainfunc= async ()=>{
   let todo= await createtodo()
   console.log(todo)
}
mainfunc()




// can do above code as follows an another way: by supling todo
// const createtodo= async (todo)=>{
//     let options ={
//         method: "POST",
//         headers:{
//             "content-type":"application/json"
//         },
//         body: JSON.stringify(todo)
//     }
//     let p= await fetch("https://jsonplaceholder.typicode.com/posts",options) //yani tab
//     // tak wait kro jab tak k diye gay url pr data post hony ka promise resolve 
//     // na ho jay
//     let response= await p.json() //If not awaited, the program might attempt to work 
//     // with the response before it's fully available in parsed JSON format.
//     return response
// }
// const mainfunc= async ()=>{
//     let todo= { //JSON.stringify likhna zruri h q k  When making a POST 
//         // request with the fetch API and sending data in the request body, the data
//         //  needs to be in JSON format.
//         id:"1",
//         "name": "nimra",
//         "sec-name":"iman"
//     }
//    let todo1= await createtodo(todo)
//    console.log(todo1)
// }
// mainfunc()
