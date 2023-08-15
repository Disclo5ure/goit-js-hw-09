import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const startBtn = document.getElementsByTagName('button')[0];

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();
  startBtn.setAttribute('disabled', '');
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  let firstDelay = delay.value;
  let delayStep = step.value;
  let promiseAmount = amount.value;
  for (let i = 0; i < promiseAmount; i++) {
    let promiseDelay = parseInt(firstDelay) + parseInt(delayStep) * i;
    createPromise(i + 1, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    if (i === promiseAmount - 1)
      setTimeout(() => startBtn.removeAttribute('disabled'), promiseDelay);
  }
});
