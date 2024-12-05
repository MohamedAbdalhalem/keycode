var container = document.querySelector(".container")
var press = document.querySelector(".press")
var code = document.querySelectorAll(".code")
var info = document.querySelector(".info")
var key = document.querySelectorAll(".key")
var loca = document.querySelector(".loca")
var cod = document.querySelector("#cod")
document.addEventListener("keydown", function (e) {
    console.log(e)
    info.style.display = "block"
    container.style.display = "block"
    press.style.display = "none";
    for (var i = 0; i < code.length; i++){
        code[i].innerHTML = e.keyCode;
    }
    for (var i = 0; i < key.length; i++){
        key[i].innerHTML = e.key
    }
    if (e.location === 0) {
        loca.innerHTML="General keys"
    } else if (e.location === 1) {
        loca.innerHTML ="Left-side modifier keys"
    } else if (e.location === 2) {
        loca.innerHTML = "Right-side modifier keys"
    } else if (e / this.location === 3) {
        loca.innerHTML = "Numpad"
    }
    cod.innerHTML =e.code
})