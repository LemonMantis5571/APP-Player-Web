var t = document.getElementById("playlist-icon")
var t2 = document.getElementById("playlist")

let playlist_active = false;


// t.addEventListener("click", (e) => {
//     e.stopPropagation();
//     if (playlist_active == false) {
//         t2.classList.add('playlist-transform')
//         playlist_active = true
//         console.log(playlist_active)
//     }

// });
t.addEventListener("click", transision);

function transision() {
    t2.classList.toggle("playlist-transform")
}
