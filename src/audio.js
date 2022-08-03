const playbutton = document.getElementById("play-button")
const fowardbutton = document.getElementById("foward-button")
const backwardbutton = document.getElementById("backward-button")
const audio = document.getElementById("audio")
const progress = document.getElementById("play-button")

let Isplaying = false;
// Titulos

const songs = ['blackpink']

let songIndex = 0;

loadSong(songs[songIndex])


function loadSong(song) {
    audio.src = `assets/${song}.mp3`;
}

function playSong() {
    audio.play();
    Isplaying = true;
}

function pauseSong(){
    audio.pause();
    Isplaying = false;
}

playbutton.addEventListener('click', () =>{
    if(Isplaying == false){
        playSong();
    }
    else{
        pauseSong();
        
    }
})