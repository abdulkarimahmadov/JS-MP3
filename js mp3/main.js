const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.querySelector('.progress');
const currentSongTitleElement = document.getElementById('currentSongTitle');
const coverImageElement = document.getElementById('coverImage');
const playlist = ['mp3/ODGG.mp3', 'mp3/Sonuncu Asirim.mp3', 'mp3/Yetdimi.mp3'];
const albumCovers = ['mp3/ODGG.jpg', 'mp3/Sonuncu Asirim.jpg', 'mp3/Yetdimi.jpg'];
let currentSongIndex = 0;

function playSong(index) {
  if (index < 0) {
	currentSongIndex = playlist.length - 1;
  } else if (index >= playlist.length) {
	currentSongIndex = 0;
  } else {
	currentSongIndex = index;
  }

  audioPlayer.src = playlist[currentSongIndex];
  coverImageElement.src = albumCovers[currentSongIndex];
  audioPlayer.play();
  updateSongTitle();
}

function togglePlayPause() {
  if (audioPlayer.paused) {
	audioPlayer.play();
  } else {
	audioPlayer.pause();
  }
}

function nextSong() {
  playSong(currentSongIndex + 1);
}

function prevSong() {
  playSong(currentSongIndex - 1);
}

function updateProgressBar() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateSongTitle() {
  currentSongTitleElement.textContent = `Song ${currentSongIndex + 1}`;
}

audioPlayer.addEventListener('timeupdate', updateProgressBar);
audioPlayer.addEventListener('ended', nextSong);
