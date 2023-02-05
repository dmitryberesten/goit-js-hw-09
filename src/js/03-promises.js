import Notiflix from 'notiflix';

// пошук елементів
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');

// функція для створення обіцянки
function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

// додавання слухача події для кнопки
btnCreatePromise.addEventListener('click', e => {
  e.preventDefault(); // відміна оновлення сторінки

  let firstDelay = Number(delay.value); // конвертація затримки в ЧИСЛО
  let delayStep = Number(step.value); // конвертація кроку в ЧИСЛО

  // цикл для перебору кількості введень
  for (let i = 0; i < amount.value; i += 1) {

    // Передача: номера промісу, першу затримку, введену користувачем, і крок.
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        // відображення повідомленя-успіху користувачеві з бібліотеки Notiflix
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        // відображення повідомленя-помилки користувачеві з бібліотеки Notiflix
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

// Діма Берестень