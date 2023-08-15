import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const picker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const today = new Date();
let selectedDate;

const convertMs = ms => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const addLeadingZero = str => str.padStart(2, '0');

const changeTimeUI = timeLeft => {
  const timeLeftSeparated = convertMs(timeLeft);
  for (i in timeLeftSeparated) {
    timeLeftSeparated[i] = addLeadingZero(timeLeftSeparated[i].toString());
  }
  days.textContent = timeLeftSeparated.days;
  hours.textContent = timeLeftSeparated.hours;
  minutes.textContent = timeLeftSeparated.minutes;
  seconds.textContent = timeLeftSeparated.seconds;
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < today) {
      Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', '');
    } else {
      startBtn.removeAttribute('disabled');
      selectedDate = selectedDates[0];
    }
  },
};

startBtn.addEventListener('click', e => {
  startBtn.setAttribute('disabled', '');
  let timeLeft = selectedDate.getTime() - today.getTime();
  changeTimeUI(timeLeft);
  const timer = setInterval(() => {
    timeLeft -= 1000;
    if (timeLeft < 0) {
      changeTimeUI(0);
      clearInterval(timer);
    } else changeTimeUI(timeLeft);
  }, 1000);
});

flatpickr(picker, options);
