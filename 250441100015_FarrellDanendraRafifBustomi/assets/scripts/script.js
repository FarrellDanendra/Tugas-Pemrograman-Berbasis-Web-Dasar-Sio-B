document.getElementById("toggleInfo").addEventListener("click", function () {
  const extra = document.getElementById("extraInfo");
  extra.classList.toggle("hidden");
  this.textContent = extra.classList.contains("hidden")
    ? "Lihat Info Tambahan"
    : "Sembunyikan Info";
});

const music = document.getElementById("bgMusic");
const playPause = document.getElementById("playPause");
const volumeControl = document.getElementById("volumeControl");

playPause.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPause.textContent = "⏸️";
  } else {
    music.pause();
    playPause.textContent = "▶️";
  }
});

volumeControl.addEventListener("input", () => {
  music.volume = volumeControl.value;
});
