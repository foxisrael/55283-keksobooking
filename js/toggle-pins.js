'use strict';

window.togglePins = (function () {
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');

  var DIALOG_VISIBILITY_CLASS_NAME = 'invisible';
  var ACTIVE_PIN_CLASS_NAME = 'pin--active';

  function deactivatePinByEsc(evt) {
    if (window.utils.isEscKeyCode(evt)) {
      deactivatePin();
    }
  }

  function activatePin(evt, map) {
    var target = evt.target;
    while (target !== map) {
      if (target.classList.contains('pin')) {
        removeActivePin();
        showDialog();
        target.classList.add(ACTIVE_PIN_CLASS_NAME);
        return;
      }
      target = target.parentNode;
    }
  }

  function deactivatePin() {
    removeActivePin();
    hideDialog();
  }

  function showDialog() {
    dialog.classList.remove(DIALOG_VISIBILITY_CLASS_NAME);
    document.addEventListener('keydown', deactivatePinByEsc);
  }

  function hideDialog() {
    dialog.classList.add(DIALOG_VISIBILITY_CLASS_NAME);
    document.removeEventListener('keydown', deactivatePinByEsc);
  }

  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove(ACTIVE_PIN_CLASS_NAME);
    }
  }

  return {
    activatePin: activatePin,
    deactivatePin: deactivatePin
  };

})();
