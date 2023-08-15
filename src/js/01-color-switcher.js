const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let colorChangeInterval = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeBodyColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', e => {
  body.style.backgroundColor = getRandomHexColor();
  colorChangeInterval = setInterval(changeBodyColor, 1000);
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
});

stopBtn.addEventListener('click', e => {
  body.style.backgroundColor = 'white';
  clearInterval(colorChangeInterval);
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
});
