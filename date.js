
function MainDate(){
    var date = new Date()
    var d = date.getDay()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var dayName = dayNames[d]

    console.log(dayName + ": " + h + ":" + m + ":" + s)
    let dateSpan = document.querySelector("#date")
    dateSpan.innerHTML =  dayName + ": " + h + ":" + m + ":" + s
}
    let span = document.querySelector("#span")
    let div = document.querySelector("#div")
    let NAME = prompt("You should write your name.")
    div.innerHTML = `Hello ${NAME}!  Welcome! 
    <span id="date" style="display: contents;"></span>
    tarihinde Javascript Ilk Odevdesiniz.
    `
setInterval(MainDate, 1000)


    
