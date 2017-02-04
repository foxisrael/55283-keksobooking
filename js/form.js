'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');

pins.forEach(function(pin) {
  pin.addEventListener('click', function() {
    removeActivePin();
    pin.classList.add('pin--active');
    dialog.classList.remove('invisible');
  });
});

// Добавление события на крестик
dialogClose.addEventListener('click', function() {
  dialog.classList.add('invisible');
  // Удаляем активный пин
  removeActivePin();
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
    type.value = 'Лачуга';
  } else if (price.value < 10000) {
    type.value = 'Квартира';
  } else {
    type.value = 'Дворец';
  }
});

// Изменение стоимости от типа жилья
type.addEventListener('change', function() {
  if (type.value == 'Лачуга') {
    price.value = 0;
  } else if (type.value == 'Квартира') {
    price.value = 1000;
  } else if (type.value == 'Дворец') {
    price.value = 10000;
  }
});

// Изменение кол-во гостей от кол-во комнат
roomNumber.addEventListener('change', function() {
  if (roomNumber.value == '1 комната') {
    capacity.value = 'не для гостей';
  } else {
    capacity.value = 'для 3 гостей';
  }
});

// Изменение кол-во комнат от кол-во гостей
capacity.addEventListener('change', function() {
  if (capacity.value == 'не для гостей') {
    roomNumber.value = '1 комната';
  } else {
    roomNumber.value = '2 комнаты';
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
