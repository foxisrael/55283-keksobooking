'use strict';

window.initializePins = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var dialogClose = document.querySelector('.dialog__close');
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');
  var ACTIVEPIN_CLASS_NAME = 'pin--active';
  var noop = function () {};

  function activatePin(evt, parent, onCardClose) {
    var target = evt.target;
    while (target !== parent) {
      if (target.classList.contains('pin')) {
        removeActivePin();
        window.showCard.show(dialog, deactivatePinByEsc);
        target.classList.add(ACTIVEPIN_CLASS_NAME);
        target.blur();
        onCardClose(target);
        return;
      }
      target = target.parentNode;
    }
  }

  function deactivatePin() {
    removeActivePin();
    window.showCard.hide(dialog, deactivatePinByEsc);
  }

  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove(ACTIVEPIN_CLASS_NAME);
    }
  }

  function deactivatePinByEsc(evt) {
    if (window.utils.isEscKeyCode(evt)) {
      deactivatePin();
    }
  }

  function focusOpenButton(element) {
    element.focus();
  }

  map.addEventListener('click', function (evt) {
    activatePin(evt, map, noop);
  });

  map.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      activatePin(evt, map, focusOpenButton);
    }
  });

  dialogClose.addEventListener('click', function (evt) {
    deactivatePin();
  });

  dialogClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      deactivatePin();
    }
  });

})();
