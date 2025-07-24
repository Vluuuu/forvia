const musicFrame = document.getElementById('music-frame');

function toggleMusic() {
  const audio = musicFrame.contentWindow.document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
