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

  function syncValues(element, value) {
    element.value = value;
  }

  function syncValueWithMin(element, value) {
    element.min = value;
  }

  window.synchronizeFields(time, timeout, timeValues, timeValues, syncValues);
  window.synchronizeFields(timeout, time, timeValues, timeValues, syncValues);
  window.synchronizeFields(type, price, typeValues, minPriceValues, syncValueWithMin);
  window.synchronizeFields(roomNumber, capacity, roomNumberValues, capacityValues, syncValues);
  window.synchronizeFields(capacity, roomNumber, capacityValues, roomNumberValues, syncValues);
  window.setValidationRules(title, titleValidation);
  window.setValidationRules(price, priceValidation);
  window.setValidationRules(address, addressValidation);


})();
