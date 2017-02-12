'use strict';

var price = document.querySelector('#price');
var time = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');
var type = document.querySelector('#type');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
var title = document.querySelector('#title');
var address = document.querySelector('#address');

var timeValues = ['12', '13', '14'];
var minpriceValues = ['0', '1000', '10000'];
var typeValues = ['Лачуга', 'Квартира', 'Дворец'];
var roomNumberValues = ['1', '2', '100'];
var capacityValues = ['не для гостей', '3', '3'];

var titleValidation = {
  required: true,
  minLength: 30,
  maxLength: 100
};
var priceValidation = {
  required: true,
  min: 1000,
  max: 1000000
};
var addressValidation = {
  required: true
};


window.setValidationRules(title, titleValidation);
window.setValidationRules(price, priceValidation);
window.setValidationRules(address, addressValidation);

window.synchronizeFields(time, timeout, timeValues, timeValues, 'value');
window.synchronizeFields(timeout, time, timeValues, timeValues, 'value');

window.synchronizeFields(roomNumber, capacity, roomNumberValues, capacityValues, 'value');
window.synchronizeFields(capacity, roomNumber, capacityValues, roomNumberValues, 'value');

window.synchronizeFields(type, price, typeValues, minpriceValues, 'min');
window.synchronizeFields(price, type, typeValues, minpriceValues, 'min');
