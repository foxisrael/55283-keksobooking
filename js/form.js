'use strict';

//Переменные открытия окна
var pin = document.querySelector('.pin');
var dialog = document.querySelector('.dialog')

pin.addEventListener('click', function() {
  pin.classList.remove('pin--active')
  pin.classList.remove('pin--active')
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
