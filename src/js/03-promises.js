import Notiflix from 'notiflix';
//DOM omport
const submitButton = document.querySelector('button');
const delayField = document.querySelector('input[name="delay"]');
const stepField = document.querySelector('input[name="step"]');
const amountField = document.querySelector('input[name="amount"]');

//Create promis func
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      }
      else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })
}
//Notiflix 
const generatePromises = event => {
  event.preventDefault();

  let time = Number(delayField.value - stepField.value);

  for (let i = 1; i <= amountField.value; i++) {
    createPromise(i, (time += Number(stepField.value)))
      .then(message => Notiflix.Notify.success(message))
      .catch(error => Notiflix.Notify.failure(error));
  }
};
//Listener for button 
submitButton.addEventListener('click', generatePromises);