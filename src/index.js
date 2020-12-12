import refs from './refs.js';
import colors from './colors.js';

let timerBlink;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

function onStart() {
  refs.start.setAttribute('disabled', 'true');
  timerBlink = setInterval(colorChange, 1000);
}
function colorChange() {
  let backColor = 'background-color:' + colors[randomIntegerFromInterval(0, 5)];
  refs.body.setAttribute('style', backColor);
}

function onStop() {
  refs.start.removeAttribute('disabled');
  clearInterval(timerBlink);
}
