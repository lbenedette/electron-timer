const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let textTimer = document.querySelector('.tempo');

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
       timer.stop();
   } else {
       play = true;
       botaoPlay.src = imgs.stop;
       timer.start(textTimer);
   }
});