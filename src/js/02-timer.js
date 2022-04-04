import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';




const startButton = document.querySelector('button[data-start]');
const timer = document.querySelector('div.timer');
const field = document.querySelectorAll('div.field');
const value = document.querySelectorAll('span.value');
const label = document.querySelectorAll('span.label');
const daysField = document.querySelector('span[data-days]');
const hoursField = document.querySelector('span[data-hours]');
const minutesField = document.querySelector('span[data-minutes]');
const secondsField = document.querySelector('span[data-seconds]');
let choosenDate;

startButton.disabled = true;

timer.style.display = 'flex';
timer.style.marginTop = '30px';

field.forEach(el => {
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.alignItems = 'center';
  el.style.paddingRight = '15px';
});

value.forEach(el => {
  el.style.fontSize = '45px';
});

label.forEach(el => {
  el.style.textTransform = 'uppercase';
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    choosenDate = selectedDates[0];
    if (selectedDates[0] <= new Date()) {
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = fieldValue => {
  if (fieldValue.length === 1) { return fieldValue.padStart(2, '0'); }
  else {return fieldValue}
};

const startCountdown = () => {
  let timerId = setInterval(() => {
    const timeArray = convertMs(choosenDate - new Date());
    secondsField.textContent = addLeadingZero(String(timeArray.seconds));
    minutesField.textContent = addLeadingZero(String(timeArray.minutes));
    hoursField.textContent = addLeadingZero(String(timeArray.hours));
    daysField.textContent = addLeadingZero(String(timeArray.days));
  }, 1000);
};

startButton.addEventListener('click', startCountdown);


// function addLeadingZero(number) {
//     string = number.toString();
//     if (string.length === 1) {return string.padStart(2, '0')}
//     else {return string}
// }
// function couting() {
//   idInterval = setInterval(() => {
//   const timeArray = convertMs(choosenDate - new Date());
//   secondsField.textContent = addLeadingZero(timeArray.seconds);
//   minutesField.textContent = addLeadingZero(timeArray.minutes);
//   hoursField.textContent = addLeadingZero(timeArray.hours);
//   daysField.textContent = addLeadingZero(timeArray.days);}
//   ,1000)
// }