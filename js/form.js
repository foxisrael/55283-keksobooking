'use strict';

window.initializeForm = (function () {
  var price = document.querySelector('#price');
  var time = document.querySelector('#time');
  var timeout = document.querySelector('#timeout');
  var type = document.querySelector('#type');
  var roomNumber = document.querySelector('#room_number');
  var capacity = document.querySelector('#capacity');
  var title = document.querySelector('#title');
  var address = document.querySelector('#address');

  var timeValues = ['12', '13', '14'];
  var minPriceValues = ['0', '1000', '10000'];
  var typeValues = ['Лачуга', 'Квартира', 'Дворец'];
  var roomNumberValues = ['1', '2', '100'];
  var capacityValues = ['не для гостей', '3', '3'];

  title.required = true;
  title.minLength = 30;
  title.maxLength = 100;

  price.required = true;
  price.type = 'number';
  price.min = 1000;
  price.max = 1000000;

  address.required = true;

  window.synchronizeFields(time, timeout, timeValues, timeValues, 'value');
  window.synchronizeFields(timeout, time, timeValues, timeValues, 'value');
  window.synchronizeFields(roomNumber, capacity, roomNumberValues, capacityValues, 'value');
  window.synchronizeFields(capacity, roomNumber, capacityValues, roomNumberValues, 'value');
  window.synchronizeFields(type, price, typeValues, minPriceValues, 'min');

})();
