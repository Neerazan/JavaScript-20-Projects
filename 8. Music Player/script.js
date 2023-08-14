const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Check if playing
let isPlaying = false;

//Play function
function playSong() {
    isPlaying = true;
    music.play();
}

function pauseSong() {
    isPlaying = false;
    music.pause();
}


