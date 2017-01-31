'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');

(function initPinClicks() {
  // Добавление класса каждому пину
  for (var i = 0; i < pins.length; i++) {
    pins[i].addEventListener('click', function (pin) {
      return function () {
        removeActivePin();
        pin.classList.add('pin--active');
        dialog.classList.remove('invisible');
      };
    }(pins[i])
    );
  }
})();

// Добавление события на крестик
dialogClose.addEventListener('click', function () {
  dialog.classList.add('invisible');
  удаляем активный пин
  removeActivePin();
});

function removeActivePin() {
  for (var i = 0; i < pins.length; i++) {
    pins[i].classList.remove('pin--active');
  }
}

//Объявление переменных формы
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
