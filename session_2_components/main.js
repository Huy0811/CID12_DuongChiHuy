let seconds = 0;
let timeInterval = null;

document.getElementById("btnStart").addEventListener("click", () => {
  timeInterval = setInterval(() => {
    seconds++;
    const time = formatSecond(seconds);
    document.getElementById("time").innerHTML = time;
  }, 1000);
});

document.getElementById("btnPause").addEventListener("click", () => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});

document.getElementById("btnStop").addEventListener("click", () => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
  seconds = 0;
  document.getElementById("time").innerHTML = formatSecond(seconds);
});

function formatSecond(second) {
  const m = Math.floor(second / 60);
  const s = second % 60;
  return m + " : " + s;
}
