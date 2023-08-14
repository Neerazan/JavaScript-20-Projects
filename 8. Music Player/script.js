const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

//Music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Kill Em With Kindness',
        artist: 'Selena Gomez'
    },
    {
        name: 'jacinto-2',
        displayName: 'Dusk Till Dawn',
        artist: 'Zayn Malik'
    },
    {
        name: 'jacinto-3',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design'
    }
]

//Check if playing
let isPlaying = false;

//Play function
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

//Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));


// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

let songIndex = 0;

//Previous Song
function prevSong(){
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Next Song
function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//On Load - Select First Song
loadSong(songs[songIndex]);


//Update Progress Bar and Time
function updateProgressBar(event) {
    if (isPlaying) {
        const { duration, currentTime } = event.srcElement;

        //update Progress bar width
        const progressPercent = (currentTime/duration) * 100;
        if(progressPercent){
            progress.style.width = `${progressPercent}%`;
        }

        //Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSecond = Math.floor(duration % 60);
        if(durationSecond < 10){
            durationSecond = `0${durationSecond}`;
        }
        console.log(`${durationMinutes}:${durationSecond}`);
        
        //Delay switching duration Element to adoid NaN
        if(durationSecond) {
            durationEl.textContent = `${durationMinutes}:${durationSecond}`;
        }

        //Calculate display for current
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSecond = Math.floor(currentTime % 60);
        if(currentSecond < 10){
            currentSecond = `0${currentSecond}`;
        }
        console.log(`${currentMinutes}:${currentSecond}`);

        currentTimeEl.textContent = `${currentMinutes}:${currentSecond}`;
    }
}

//Event Listeaners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);