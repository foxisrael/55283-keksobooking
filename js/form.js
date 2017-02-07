'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
var map = document.querySelector('.tokyo__pin-map');
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

//Добавление события на родителя
map.addEventListener('click', function (evt) {
  eventHandler(evt);
});

map.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    eventHandler(evt);
  }
});

// Делегирование
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

// Проверка на нажатие Enter
function isEnterEvent(evt) {
  return evt.keyCode === ENTER_KEY_CODE;
}

// Проверка на нажатие Esc
function isEscEvent(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    removeActivePin();
    hideDialog();
  }
}

// Удаление у всех pin--active, показываем окно и добавляем к текущему pin--active
function activatePin(activePin) {
  removeActivePin();
  showDialog();
  activePin.classList.add('pin--active');
}

// Проверка / Cкрыть окно
function showDialog() {
  dialog.classList.remove('invisible');
  document.addEventListener('keydown', isEscEvent);
}

function hideDialog() {
  dialog.classList.add('invisible');
  document.removeEventListener('keydown', isEscEvent);
}

// Закрыть окно по клику
dialogClose.addEventListener('click', function (evt) {
  hideDialog();
  removeActivePin();
});

// Закрыть окно по нажатию кнопки
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

// Объявление переменных формы
var price = document.querySelector('#price'); //Стоимость
var time = document.querySelector('#time'); //Время заезда
var timeOut = document.querySelector('#timeout'); //Время выезда
var type = document.querySelector('#type'); //Тип жилья
var roomNumber = document.querySelector('#room_number'); //Кол-во комнат
var capacity = document.querySelector('#capacity'); //Кол-во мест

// Синхронизация времени заезда и выезда
time.addEventListener('change', function() {
  timeOut.value = time.value;
});

timeout.addEventListener('change', function() {
  time.value = timeOut.value;
});

// Изменение типа жилья от стоимости
 price.addEventListener('change', function() {
  if (price.value < 1000) {
    type.value = 0;
  } else if (price.value < 10000) {
    type.value = 1000;
  } else {
    type.value = 10000;
  }
});

// Изменение стоимости от типа жилья
type.addEventListener('change', function() {
  if (type.value == 0) {
    price.value = 0;
  } else if (type.value == 1000) {
    price.value = 1000;
  } else if (type.value == 10000) {
    price.value = 10000;
  }
});

// Изменение кол-во гостей от кол-во комнат
roomNumber.addEventListener('change', function() {
  if (roomNumber.value > 1) {
    capacity.value = 3;
  } else {
    capacity.value = 0;
  }
});

// Изменение кол-во комнат от кол-во гостей
capacity.addEventListener('change', function() {
  if (capacity.value <= 0) {
    roomNumber.value = 1;
  } else {
    roomNumber.value = 2;
  }
});

//Проверка правильности введенных данных
var Title = document.querySelector('#title');
var Price = document.querySelector('#price');
var Address = document.querySelector('#address');

Title.required = true;
Title.minLength = 30;
Title.maxLength = 100;

Price.required = true;
Price.type = 'number';
Price.min = 1000;
Price.max = 1000000;

Address.required = true;
