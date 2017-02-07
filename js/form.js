'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
var map = document.querySelector('.tokyo__pin-map');
var price = document.querySelector('#price');
var time = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');
var type = document.querySelector('#type');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
var Title = document.querySelector('#title');
var Price = document.querySelector('#price');
var Address = document.querySelector('#address');
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

map.addEventListener('click', function (evt) {
  eventHandler(evt);
});

map.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    eventHandler(evt);
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

time.addEventListener('change', function () {
  timeOut.value = time.value;
});

timeOut.addEventListener('change', function () {
  time.value = timeOut.value;
});

price.addEventListener('change', function () {
  if (price.value < 1000) {
    type.value = 0;
  } else if (price.value < 10000) {
    type.value = 1000;
  } else {
    type.value = 10000;
  }
});

type.addEventListener('change', function () {
  if (type.value === 0) {
    price.value = 0;
  } else if (type.value === 1000) {
    price.value = 1000;
  } else if (type.value === 10000) {
    price.value = 10000;
  }
});

roomNumber.addEventListener('change', function () {
  if (roomNumber.value > 1) {
    capacity.value = 3;
  } else {
    capacity.value = 0;
  }
});

capacity.addEventListener('change', function () {
  if (capacity.value <= 0) {
    roomNumber.value = 1;
  } else {
    roomNumber.value = 2;
  }
});

Title.required = true;
Title.minLength = 30;
Title.maxLength = 100;

Price.required = true;
Price.type = 'number';
Price.min = 1000;
Price.max = 1000000;

Address.required = true;
