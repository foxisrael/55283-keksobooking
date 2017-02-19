'use strict';

window.initializeForm = (function () {
  var price = document.querySelector('#price');
  var time = document.querySelector('#time');
  var address = document.querySelector('#address');
  var type = document.querySelector('#type');
  var timeout = document.querySelector('#timeout');
  var title = document.querySelector('#title');
  var roomNumber = document.querySelector('#room_number');
  var capacity = document.querySelector('#capacity');

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

  window.synchronizeFields(time, timeout, ['12', '13', '14'], ['12', '13', '14'], 'value');
  window.synchronizeFields(timeout, time, ['12', '13', '14'], ['12', '13', '14'], 'value');
  window.synchronizeFields(roomNumber, capacity, ['1', '2', '100'], ['не для гостей', '3', '3'], 'value');
  window.synchronizeFields(capacity, roomNumber, ['не для гостей', '3', '3'], ['1', '2', '100'], 'value');
  window.synchronizeFields(type, price, ['Лачуга', 'Квартира', 'Дворец'], ['0', '1000', '10000'], 'min');
  window.setValidationRules(title, titleValidation);
  window.setValidationRules(price, priceValidation);
  window.setValidationRules(address, addressValidation);
})();
