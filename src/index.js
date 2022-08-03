var t = document.getElementById("playlist-icon")
var t2 = document.getElementById("playlist")
var s1 = document.getElementById("first")
var s2 = document.getElementById("second")
var s3 = document.getElementById("third")
var s4 = document.getElementById("fourth")
const icon = document.getElementById("pause-icon")
var HasChangeIcon = true;




t.addEventListener("click", transision);
t.addEventListener("click", hide);

function transision() {
    t2.classList.toggle("playlist-transform")
}

function hide() {
    t2.classList.toggle("hide-div")
    s1.classList.toggle("hide")
    s2.classList.toggle("hide")
    s3.classList.toggle("hide")
    s4.classList.toggle("hide")
}

let isShown = true;

icon.addEventListener("click", () => {

    if (isShown){
        icon.classList.replace("fa-play", "fa-pause");
        isShown = false;
    }

    else {
        icon.classList.replace("fa-pause", "fa-play");
        isShown = true;
    }
    
});



//  function changeIcon() {

    
//   console.log(HasChangeIcon)
//     if (HasChangeIcon) {
//         icon.setAttribute("data-icon", "carbon:play-outline-filled");
//         HasChangeIcon = false;
//         console.log(HasChangeIcon);
       
//     } else
//     {
//         console.log(HasChangeIcon);
//         icon.setAttribute("data-icon", "ic:outline-pause-circle-filled");
//         HasChangeIcon = true;
//     }
    
  
// }