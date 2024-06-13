// AJAX: (asynchronous java script and xml) is an umbrella term. it was used earlier
// when xml is used to fetch data from netowrk but now-a-days, json and fetch APIs
// are used to fetch data, AJAX ki term aj hi use ki jati h, agar ap y kho k ap ki website
// refresh kiye bagher data fetch kr leti h or interviewer ap s khy k kia ap n AJAX use
// ki h to "yes" hi bolna, esa nhi h k ap XML ko use nhi kr rhy to AJAX use nhi ho rha, 
// AJAX aj bhi use hota h

// javascript can be used to send and retreive data from network
let p=fetch("https://goweather.herokuapp.com/weather/ny")
p.then(response=>{
   
    console.log(response.status)
    console.log(response.ok)
    return (response.json()) //this is also a promise that is resolved in json value
    // this can be response.json, response.text, response.blob, response.formData, 
    // response.arrayBuffer, but we can only use body-reading method among all.
}).then(value=>{
    console.log(value)//final output value
})

// getting response is two stage process:
// Pahly valy .then m "status " and "ok" ki properties hoti hn
// console.log(response.status) s hmy status code milta h, agar status code 200-299
// k drmian aya h to yani k sab theek h, agar 404 ya 500 kuch aya to yani k problem h
// console.log(response.ok) will be "true" if status code is between 200-299
// status and response is liye use kia jata h ta k agar aap ki request bhhtt bri h or 
// response any m der lag rhi h to ap y na smjho k ap ki request gi hi nhi ya koi 
// msla ban gya h bal k status and okm s check kr lo k kia bna h, agar koi error h to
// forn hi action le sko


// response headers and request header
// request headers(yani vo headers jo hm dety hn , yani request k baary m kuch izafi
// information
// to set request headers in fetch: do it like this

// let x=(url, {
//     headers:{
//         Authentication : 'secret'
//     }
// });

//yani url k saath hi options vala portion jo "," (comma) k baad
// start ho rha h vha dena h: and it shows k header ek key h jis ki value ek object
// h yani itself ek key-value pair h 






