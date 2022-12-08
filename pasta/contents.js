const $song = document.querySelector('#song');
const $playSong = document.querySelector('#play-song');

const $pasta = document.querySelector('#pasta');
const $button1 = document.querySelector('#button1');

const $makePasta = document.querySelector('#make-pasta');
const $button2 = document.querySelector('#button2');

const $makePasta2 = document.querySelector('#make-pasta2');
const $button3 = document.querySelector('#button3');

const $stop = document.querySelector('#stop');

const $audio = document.querySelectorAll('audio');

const masterPasta = (e, i) => {
  $song.volume = 0;
  e.load();
  e.play();
  setTimeout(() => {
    $song.volume = 0.5;
  }, i);
}

$audio.forEach(e => e.volume = 0.5);

$playSong.addEventListener('mousedown', () => {
  $song.load();
  $song.play();
});

$stop.addEventListener('mousedown', () => {
  $audio.forEach(e => e.pause());
});

$button1.addEventListener('mousedown', () => {
  masterPasta($pasta, 600)
});

$button2.addEventListener('mousedown', () => {
  masterPasta($makePasta, 1900);
});

$button3.addEventListener('mousedown', () => {
  masterPasta($makePasta2, 2200);
});
