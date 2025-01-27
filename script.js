document.addEventListener('keydown', (event) => { if (!'abcdefghijklmnñopqrstuvwxyz '.includes(event.key.toLowerCase())) return; start() });
document.addEventListener('click', start);

var asked = 0;

function prompt(text, func) {
  window.prompt_func = func;

  element = document.createElement('div');

  element.style.zIndex = 150;
  element.style.position = 'absolute';
  element.style.left = 0;
  element.style.top = 0;

  element.id = 'notification';

  element.innerHTML = `
  <label><p><b style='font-size:20px !important;'>Kontrazeinua: </b></p><div style='display:flex;
  box-shadow: 0 3px 10px 0px rgba(0, 0, 0, .5);border-radius:15px;'><input type='password' /><button onclick='value =  document.querySelector("input").value;element.remove();window.prompt_func(value)'>Joan</button></div></label>
  `;

  document.body.appendChild(element)
}

function start(event = NaN) {
  if (asked) return;
  asked = 1;
  setTimeout(function() {
    prompt('Pasahitza', (response) => {
      if (response.toLowerCase() === 'posdata') {
        document.querySelector('div:has(img)').remove();
        document.querySelector('video').play();
      }
    })
  }, Math.random() * 3000);
}
