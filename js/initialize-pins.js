'use strict';

window.initializePins = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var dialogClose = document.querySelector('.dialog__close');
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');
  var ACTIVE_PIN_CLASS_NAME = 'pin--active';
  var DIALOG_VISIBILITY_CLASS_NAME = 'invisible';

  function activatePin(evt, parent, onCardClose) {
    var target = evt.target;

    while (target !== parent) {
      if (target.classList.contains('pin')) {
        removeActivePin();
        window.showCard(dialog, DIALOG_VISIBILITY_CLASS_NAME, deactivatePinByEsc);
        target.classList.add(ACTIVE_PIN_CLASS_NAME);
        target.blur();
        if (typeof onCardClose === 'function') {
          onCardClose(target);
        }
        return;
      }
      target = target.parentNode;
    }
  }

  function deactivatePin() {
    removeActivePin();
    hideDialog();
  }

  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove(ACTIVE_PIN_CLASS_NAME);
    }
  }

  function hideDialog() {
    dialog.classList.add(DIALOG_VISIBILITY_CLASS_NAME);
    document.removeEventListener('keydown', deactivatePinByEsc);
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
