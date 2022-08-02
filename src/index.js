var t = document.getElementById("playlist-icon")
var t2 = document.getElementById("playlist")
var s1 = document.getElementById("first")
var s2 = document.getElementById("second")
var s3 = document.getElementById("third")
var s4 = document.getElementById("fourth")

t.addEventListener("click", transision);

function transision() {
    t2.classList.toggle("playlist-transform")
    s1.classList.toggle("hide")
    s2.classList.toggle("hide")
    s3.classList.toggle("hide")
    s4.classList.toggle("hide")
}
