const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener("click", () => timerId = setInterval(changeColor, 1000));

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false
    stopBtn.disabled = true        
});

function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor()
    startBtn.disabled = true
    stopBtn.disabled = false
}