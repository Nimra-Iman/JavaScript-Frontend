// loadscript code via promises
function loadscript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script")
        script.src = src
        document.body.append(script)
        script.onload = () => {
            resolve("first link appendid")
        }
        script.onerror = () => {
            reject("cannot append")
        }
    })
}
let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

function load(sr) {
    return new Promise(function (resolve, reject) {
        let s = document.createElement("script")
        s.src = sr
        document.body.append(s)
        s.onload = () => {
            resolve("2nd link appendid")
        }
        s.onerror = () => {
            reject("cannot append")
        }
    })
}
p1.then(value => {
    console.log(value)
    return load("https://getbootstrap.com/docs/5.3/getting-started/introduction/")
}).then(value => {
    console.log(value)
}).catch(error => {
    console.log(new Error("second link not appendid"))
})
p1.catch(error => {
    console.log(new Error("1st lionk not appendid, sorry an error occured!"))
})
