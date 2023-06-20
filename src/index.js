const playButton = document.querySelector('#playbutton');
const fowardButton = document.querySelector('#fowardButton');
const backwardButton = document.querySelector('#backwardButton');
const img = document.querySelector('#artistPicture');
const audio = document.querySelector('#musicPlayer');
const songName = document.querySelector('#songName');
const bandName = document.querySelector('#bandName');
const songQuote = document.querySelector('#quote');

const songs = [
    {
        songName: 'Lovesick Girls',
        band: 'Blackpink',
        fileName: 'blackpink',
        quote: 'We are still looking for love'
    },
    {
        songName: "Can't Control Myself",
        band: 'Taeyeon',
        fileName: 'taeyeon',
        quote: "It's Too late"
    },
];

let songIndex = 0;
let isPlaying = false;

loadSong(songs[songIndex]);

const fowardSong = () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
    } else {

        songIndex = 0;
    }
};

const backwardSong = () => {
    if (songIndex > 0) {
        songIndex--;
    } else {
        songIndex = songs.length - 1;
    }
};

function loadSong(song) {
    audio.src = `../src/assets/${song.fileName}.mp3`;
    img.src = `../src/imgs/${song.fileName}.webp`;
    songName.innerHTML = `${song.songName}`;
    bandName.innerHTML = `${song.band}`;
    songQuote.innerHTML = `${song.quote}`;

}



const pauseSong = () => {
    playButton.classList.replace("fa-pause", "fa-play");
    isPlaying = false;
    audio.pause();
}

const playSong = () => {
    playButton.classList.replace("fa-play", "fa-pause");
    isPlaying = true;
    audio.play();
}

playButton.addEventListener('click', () => {

    if (!isPlaying) {
        playSong();
        return;
    }

    pauseSong();
});

fowardButton.addEventListener('click', () => {
    pauseSong();
    fowardSong();
    loadSong(songs[songIndex]);
});

backwardButton.addEventListener('click', () => {
    pauseSong();
    backwardSong();
    loadSong(songs[songIndex]);
});

