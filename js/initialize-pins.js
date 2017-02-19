'use strict';

window.initializePins = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var dialogClose = document.querySelector('.dialog__close');
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');
  var PIN_ACTIVE_CLASS_NAME = 'pin--active';
  var DIALOG_CLASS_NAME = 'invisible';

  function activatePin(evt, parent, onCardClose) {
    var target = evt.target;

    while (target !== parent) {
      if (target.classList.contains('pin')) {
        removeActivePin();
        window.showCard(dialog, DIALOG_CLASS_NAME, deactivatePinByEsc);
        target.classList.add(PIN_ACTIVE_CLASS_NAME);
        target.blur();
        if (typeof onCardClose === 'function') {
          onCardClose(target);
        }
        return;
      }
      target = target.parentNode;
    }
  }

  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove(PIN_ACTIVE_CLASS_NAME);
    }
  }

  function deactivatePin() {
    removeActivePin();
    hideDialog();
  }

  function deactivatePinByEsc(evt) {
    if (window.utils.isEscKeyCode(evt)) {
      deactivatePin();
    }
  }

  function hideDialog() {
    dialog.classList.add(DIALOG_CLASS_NAME);
    document.removeEventListener('keydown', deactivatePinByEsc);
  }

  function focusOpenButton(element) {
    element.focus();
  }

  map.addEventListener('click', function (evt) {
    activatePin(evt, map);
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
