let submit = document.getElementById("sub")
submit.onclick = (e) => {
    e.preventDefault()
    let a = document.getElementById("exampleInputEmail1").value
    console.log(a)

    let sec = a * 60000
    let stop = document.getElementById("stop-btn")
    let snooz_sec = document.getElementById("snooze-btn")
    let audio = new Audio('alarm.mp3')
    setTimeout(() => {
        audio.play()
        stop.onclick = () => {
            audio.pause()
        }
    }, sec);


   
    snooz_sec.onclick = () => {
        audio.pause()
        snooz_sec = 5000
        setTimeout(() => {
            let audio = new Audio('alarm.mp3')
            audio.play()
            stop.onclick=()=>{
                audio.pause()
            }
        }, snooz_sec);
    }
}
