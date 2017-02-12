'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
var map = document.querySelector('.tokyo__pin-map');
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

map.addEventListener('click', function (evt) {
  eventHandler(evt);
  togglePressed();
});

map.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    eventHandler(evt);
    togglePressed();
  }
});

function eventHandler(evt) {
  var target = evt.target;
  while (target !== map) {
    if (target.classList.contains('pin')) {
      activatePin(target);
      return;
    }
    target = target.parentNode;
  }
}

function isEnterEvent(evt) {
  return evt.keyCode === ENTER_KEY_CODE;
}

function isEscEvent(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    removeActivePin();
    hideDialog();
  }
}

function activatePin(activePin) {
  removeActivePin();
  showDialog();
  var pressed = (activePin.getAttribute('aria-pressed') === 'true');
  activePin.setAttribute('aria-pressed', !pressed);
  activePin.classList.add('pin--active');
}

function showDialog() {
  dialog.classList.remove('invisible');
  document.addEventListener('keydown', isEscEvent);
}

function hideDialog() {
  dialog.classList.add('invisible');
  document.removeEventListener('keydown', isEscEvent);
}

dialogClose.addEventListener('click', function (evt) {
  hideDialog();
  removeActivePin();
});

dialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    hideDialog();
    removeActivePin();
  }
});

function removeActivePin() {
  for (var i = 0; i < pins.length; i++) {
    pins[i].classList.remove('pin--active');
  }
}
