// a typical way to insert new element :
let a=document.getElementById("heading-id")

// a.innerHTML = a.innerHTML + ' <h2> this is data via tyical insertion <h2>'


//                  OTHER WAYS 
// createElement (this is very convinient becacause hm loops ka use kr skty, if we want k 
// hmy 10 elements or add krny hn to hm createElement k zrye aram s kr skty via loops  )
let b=document.createElement("p")
b.innerHTML=" this is data added via createElement and append "
a.append(b) //append at end of node but inside node 


let c=document.createElement("p")
c.innerHTML=" this is data added via createElement and prepend "
a.prepend(c)  //at beginning of node but inide node yani heading-id valy div k ander hi ay ga


let d=document.createElement("p")
d.innerHTML=" this is data added via createElement and before "
a.before(d) //at start and node s baher yani heading-id valy div s forn baher print ho ga 
// 



let e=document.createElement("p")
e.innerHTML=" this is data added via createElement and after "
a.after(e) //at end but and s baher yani heading-id valy div s forn baher print ho ga




// replacewith(yani poory div ko hi replace kr dena kisi s )(replace nodes with given nodes)
// but first of all we have to create that element that will replace previous one
// let div=document.createElement("div")
// a.replaceWith(div) //ab heading-id vala div replace ho kr simple y vala div a gya 


// beforeEnd, afterEnd, beforeBegin, afterBegin
a.insertAdjacentHTML('afterbegin',"<p> this is data via afterbegin </p>")
a.insertAdjacentHTML('beforebegin',"<p> this is data via beforebegin </p>")
a.insertAdjacentHTML('beforeEnd',"<p> this is data via beforeEnd </p>")
a.insertAdjacentHTML('afterEnd',"<p> this is data via afterEnd </p>")


// .remove() (in order to remove a node)
// let n=document.createElement("p")
// a.before(n)
// n.innerHTML="this is data via before"
// n.remove() //poora node hi remove ho jay ga
  