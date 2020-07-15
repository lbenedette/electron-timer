const { ipcRenderer } = require('electron');
const moment = require('moment');

let seconds;
let clock;

const secondsToTime = (seconds) => {
  return moment()
    .startOf('day')
    .seconds(seconds)
    .format("HH:mm:ss");
}

module.exports = {
  start(element) {
    seconds = moment.duration(element.textContent).asSeconds();

    clearInterval(clock);
    clock = setInterval(() => {
      seconds++;
      element.textContent = secondsToTime(seconds);
    }, 1000)
  },
  stop(task) {
    clearInterval(clock);
    console.log('oi?');
    ipcRenderer.send('stop-task', task, secondsToTime(seconds));
  }
}