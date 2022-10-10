// rotate animation 
const musicPlate = document.querySelector('.music-plate');
const playbtn = document.querySelector('#play-btn');
const nextbtn = document.querySelector('#next-btn');
const prevbtn = document.querySelector('#prev-btn');
const title = document.querySelector('#title');
const singer = document.querySelector('#singer');
const audio = document.querySelector('#audio');
const cover = document.querySelector('#cover');
const progress = document.querySelector('#progress');


// song titles, singers ( in a array)
const songs = ['Mistletoe', 'Snowman', 'HappyBirthday'];
const artists = ['Justin Bieber', 'Sia', 'Unknown'];




// keep track of songs 
let songIndex = 2;

// Intitial load song info
loadSong(songs[songIndex], artists[songIndex]);
// update song details
function loadSong(song, artist){
    title.innerHTML = song;
    singer.innerHTML = artist;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`; 
}
function pausesong(){
    musicPlate.classList.remove('play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause-circle');
    playbtn.querySelector('i.fas').classList.add('fa-play-circle');

    audio.pause();
}
function playsong(){
    musicPlate.classList.add('play');
    playbtn.querySelector('i.fas').classList.remove('fa-play-circle');
    playbtn.querySelector('i.fas').classList.add('fa-pause-circle');

    audio.play();
}

playbtn.addEventListener('click', () => {
    const isplaying = musicPlate.classList.contains('play');

    if(isplaying){
        pausesong();
    }
    else{
        playsong();
    }
}) 

function prevSong(){
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex], artists[songIndex]);
    playsong();
}
function nextSong(){
    songIndex++;

    if (songIndex > songs.length -1){
        songIndex = 0;
    }

    loadSong(songs[songIndex], artists[songIndex]);
    playsong();

}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
// change song event
prevbtn.addEventListener('click', prevSong);
nextbtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);