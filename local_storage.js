//cookie s save kia gya data hr baar request bhejny pr server k paas jay ga lekin
// local storage vala data hr dfa nhi jay ga or y local storage vala data mojood rhy ga
// chahy ap page ko refresh kro ya chahy browser ko restart kro

// go to inspect then console vali baar m hi application k name s h ek , us ko select kro
// phir local storage pr jao, filhal vo khali ho ga q k hm n abhi kuch enter nhi kia
// local storage is also a like a "key-value" pairs 


// here are some methods of local storage:
localStorage.setItem("name","nimra")

console.log(localStorage.getItem("name")) //we will get value of that key 

localStorage.setItem("naam","imaan")


let key=prompt("enter key")
let value=prompt("enter value")
localStorage.setItem(key,value)
console.log(` ${key} is the key of ${localStorage.getItem(key)} `)

localStorage.removeItem("naama") // "naama" is a key here

// localStorage.clear() => clear all localstorage
// localstorage m values ko update kr skty hn agar aap ek naam rkho or values different
// kr do to phli vali update ho jay gi

localStorage.length //loca storage ki length btata h or is ko function ki trah run krny 
// ki zroort nhi h
localStorage.key(0) //yani zero index vali key ki value de do or jab is trah hm koi esa
// index pass kr den jo exist hi nhi krta hmary local storage m to output null ay gi

localStorage.one=1 //y use nhi hota ziada but valid h is ka matlab y h k one k ander 1
// store ho gya

// ******************** NOTE
// both key and values must be string in localstorage
