'use strict';

//Переменные открытия окна
var pins = document.querySelectorAll('.pin');
var dialogs = document.querySelector('.dialog');

pins.forEach(function(pin) {
  pin.addEventListener('click', function() {
    pin.classList.toggle('pin--active');
  });
});

//Переменные формы
var title = document.querySelector('#title');
var price = document.querySelector('#price');
var address = document.querySelector('#address');

//Валидация заголовка
title.addEventListener('click', function() {
  title.required = true;
  title.minlenght >= 30;
  title.maxlenght <= 100;
});

//Валидация стоимости
price.addEventListener('click', function() {
  price.required = true;
  price.minlenght >= 1000;
  price.maxlenght <= 1000000;
});

//Валидация адреса
address.addEventListener('click', function() {
  address.required = true;
});
