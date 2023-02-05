// пошук елементів
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.disabled = true; // початковий стан кнопки: вимкнена
let colorInterval = null; // таймер для зміни кольору

// функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// додаємо слухача подій для кнопки СТАРТ
btnStart.addEventListener('click', () => {
  btnStart.disabled = true; // деактивація кнопки СТАРТ
  btnStop.disabled = false; // активація кнопки СТОП

  // таймер для зміни кольору
  colorInterval = setInterval(() => {

    // покраска фону у випаковий колір
    document.body.style.background = getRandomHexColor();
  }, 1000); // зміна кольору 1 раз на секунду
});

// додаємо слухача подій для кнопки СТОП
btnStop.addEventListener('click', () => {

  // очистка таймеру для зміни кольору
  clearInterval(colorInterval);

  btnStart.disabled = false; // активація кнопки СТАРТ
  btnStop.disabled = true; // деактивація кнопки СТОП
});

// Діма Берестень
