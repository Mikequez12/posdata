document.addEventListener('keydown', (event) => { if (!'abcdefghijklmnñopqrstuvwxyz '.includes(event.key.toLowerCase())) return; start() });
document.addEventListener('click', start);

var asked = 0;

function start(event = NaN) {
  if (asked) return;
  asked = 1;
  setTimeout(function() {
    if (prompt('Pasahitza').toLowerCase() === 'ejemplo') {
      document.querySelector('div:has(img)').remove();
      document.querySelector('video').play();
    }
  }, Math.random() * 3000);
}