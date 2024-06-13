// used very less as compared to local storage and has same methods as that of local 
// storage but :
// 1- session storage exist within the same browser tab, new tab m new sessions hon gy
// another tab with same page will have diiferent storage
// 2- page refresh krny pr rhy gi but tab close kr di to khatam ho jay gi


// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name") //saary methods localstorage valy hi

// agar hm n ek hi zheez two tabs m open ki h or hm chahtyn hn k ek local 
//  storage m ki gai changes dono tabs m show hn to hm is trah kryn gy
window.onstorage=(e)=>{
    alert("changed")
    console.log(e)
}
