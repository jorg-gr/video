const video = document.querySelector(".ContainerVideo");

const play = document.querySelector(".ButtonPlay");
const pause = document.querySelector(".ButtonPause");
const backward = document.querySelector(".ButtonBackward");
const forward = document.querySelector(".ButtonForward");

const progress = document.querySelector(".PlayerProgressRange");

// Play
play.addEventListener("click", (event) => {
  video.play();
  play.hidden = true;
  pause.hidden = false;
});
// Pause
pause.addEventListener("click", (event) => {
  video.pause();
  pause.hidden = true;
  play.hidden = false;
});
// Advance 10 Seconds
forward.addEventListener("click", (event) => {
  video.currentTime += 10;
});
// Go Back 10 Seconds
backward.addEventListener("click", (event) => {
  video.currentTime -= 10;
});
// Video
video.addEventListener("loadedmetadata", (event) => {
  progress.max = video.duration;
});
// Update Time progress
video.addEventListener("timeupdate", (event) => {
  progress.value = video.currentTime;
});
// Range Control Progress
progress.addEventListener("input", () => {
  video.currentTime = progress.value;
});
