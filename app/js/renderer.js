const { ipcRenderer } = require('electron');
const timer = require('./timer');
const data = require('../../data');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let textTimer = document.querySelector('.tempo');
let textTask = document.querySelector('.curso');


window.onload = () => {
    data.getData(textTask.textContent)
        .then(data => {
            textTimer.textContent = data.time;
        });
};

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let imgs = {
    play: 'img/play-button.svg',
    stop: 'img/stop-button.svg'
};
let play = false;

botaoPlay.addEventListener('click', function() {
   if (play) {
       play = false;
       botaoPlay.src = imgs.play;
       timer.stop(textTask.textContent);
   } else {
       play = true;
       botaoPlay.src = imgs.stop;
       timer.start(textTimer);
   }
});