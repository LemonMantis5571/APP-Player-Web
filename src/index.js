// music controllers
const playButton = document.querySelector('#playbutton');
const fowardButton = document.querySelector('#fowardButton');
const backwardButton = document.querySelector('#backwardButton');
const img = document.querySelector('#artistPicture');
const audio = document.querySelector('#musicPlayer');
const songName = document.querySelector('#songName');
const bandName = document.querySelector('#bandName');
const songQuote = document.querySelector('#quote');
const footer = document.querySelector('.footer');
const slider = document.querySelector('#durationController');

// playlist div
const playlist = document.querySelector('#playlist');
const playlistButton = document.querySelector('#playlist-icon');


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
    {
        songName: "Vapors",
        band: 'Another Now',
        fileName: 'anothernow',
        quote: "Walls closing in to form a cage"
    },
    {
        songName: 'Dark Beach',
        band: 'Pastel Ghost',
        fileName: 'pastelghost',
        quote: "Hold me while I'm dreaming"
    }

];

let songIndex = 0;
let isPlaying = false;
let updateSliderTime;
let isShown = false;

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

const togglePlaylist = () => {
    if (isShown) {
        playlist.classList.replace('block', 'hidden');
        isShown = false;
        return;
    }

    isShown = true;
    playlist.classList.replace('hidden', 'block');


};

playlistButton.addEventListener('click', () => {
    togglePlaylist();
})

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


const skipDuration = () => {
    const skipTime = (slider.value / 100) * audio.duration;
    audio.currentTime = skipTime;
};

const updateSlider = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    slider.value = progress;
}

const resetSlider = () => {
    slider.value = 0;
}

slider.addEventListener('change', () => {
    skipDuration();
});

audio.addEventListener('ended', () => {
    clearInterval(updateSliderTime);
    resetSlider();
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

playlist.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('li')) {
        const songId = target.id;
        console.log(songId);
        pauseSong();
        loadSong(songs[songId - 1]);
    }
});


function loadSong(song) {

    audio.src = `assets/${song.fileName}.mp3`;
    img.src = `imgs/${song.fileName}.webp`;
    songName.innerHTML = `${song.songName}`;
    bandName.innerHTML = `${song.band}`;
    songQuote.innerHTML = `${song.quote}`;

    updateSliderTime = setInterval(updateSlider, 1000);
}

loadSong(songs[songIndex]);