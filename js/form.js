'use strict';

//Переменные открытия окна
var pins = document.querySelectorAll('.pin');
var dialogs = document.querySelector('.dialog');

pins.forEach(function(pin) {
  pin.addEventListener('click', function() {
    pin.classList.toggle('pin--active');
  });
});





var price = document.querySelector('#price'); //Стоимость
var time = document.querySelector('#time'); //Время заезда
var timeout = document.querySelector('#timeout'); //Время выезда
var type = document.querySelector('#type'); //Тип жилья
var roomNumber = document.querySelector('#room_number'); //Кол-во комнат
var capacity = document.querySelector('#capacity'); //Кол-во мест

// Синхронизация времени заезда и выезда
syncTime(time, timeout);
syncTime(timeout, time);

function syncTime(select1, select2) {
  select1.addEventListener('change', function() {
    select2.value = select1.value;
  });
}

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



roomNumber.addEventListener('change', function() {
  if (roomNumber.value >= '2') {
    capacity.value = 'для 3 гостей';
  } else {
    capacity.value = 'не для гостей';
  }
});
