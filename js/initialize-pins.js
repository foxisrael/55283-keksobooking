'use strict';

window.initializePins = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var dialogClose = document.querySelector('.dialog__close');

  map.addEventListener('click', function (evt) {
    window.togglePins.activatePin(evt, map);
  });

  map.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      window.togglePins.activatePin(evt, map);
    }
  });

  dialogClose.addEventListener('click', function (evt) {
    window.togglePins.deactivatePin();
  });

  dialogClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      window.togglePins.deactivatePin();
    }
  });
})();
