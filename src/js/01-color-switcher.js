import throttle from 'lodash.throttle';

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]'); 
const body = document.querySelector("body");

stopBtn.disabled = true;
let idInterval = 0;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function changeBgColor () {
    let color = getRandomHexColor()
    body.style.backgroundColor = color
    console.log(color);
}

function startChangingBgColor () {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    idInterval = setInterval(() => changeBgColor(),1000);
};

function stopChangingBgColor (){
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(idInterval);
};
startBtn.addEventListener("click", startChangingBgColor)
stopBtn.addEventListener("click", stopChangingBgColor)