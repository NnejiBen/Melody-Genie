// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".mobile-nav-link").forEach(
    n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//MEDIA PLAYER

let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let playBtn = document.getElementById("play");




// Songs
const songs = ['A Thousand Miles', 'Ordinary Day', 'Pretty Baby'];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
}

audio.onloadedmetadata = function() {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

function playPause() {
    if (playBtn.classList.contains("fa-pause")) {
        audio.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
    } else {
        audio.play();
        playBtn.classList.add("fa-pause");
        playBtn.classList.remove("fa-play");
    }
}

if (audio.play()) {
    setInterval(()=> {
        progress.value = audio.currentTime;
    },500);
}

progress.onchange = function() {
    audio.play();
    audio.currentTime = progress.value;
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
}

// Previous song
function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }

  // Next song
function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
