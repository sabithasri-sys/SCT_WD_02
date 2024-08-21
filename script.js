let startTime, updatedTime, difference, tInterval, running = false;
let lapCounter = 1;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lap-list');

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function pauseTimer() {
    if (running) {
        running = false;
        clearInterval(tInterval);
    }
}

function resetTimer() {
    running = false;
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    lapList.innerHTML = '';
    lapCounter = 1;
}

function recordLap() {
    if (running) {
        const lapTime = display.innerHTML;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
