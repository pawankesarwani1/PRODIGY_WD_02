let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timer;
let isRunning = false;

function updateDisplay() {
  const display = document.getElementById("display");
  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  let ms = milliseconds.toString().padStart(3, "0");
  display.textContent = `${h}:${m}:${s}.${ms}`;
}

function stopwatch() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}
function start() {
  if (!isRunning) {
    timer = setInterval(stopwatch, 10);
    isRunning = true;
    document.getElementById("runner").classList.remove("paused");
    document.getElementById("runner").classList.add("running");
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("runner").classList.remove("running");
  document.getElementById("runner").classList.add("paused");
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  isRunning = false;
  updateDisplay();
  document.getElementById("laps").innerHTML = '';
  document.getElementById("lap-runners").innerHTML = '';
  document.getElementById("runner").classList.remove("running");
  document.getElementById("runner").classList.add("paused");
}

function lap() {
  if (isRunning) {
    const lapTime = document.getElementById("display").textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
  
  }
}
