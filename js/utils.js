'use strict';

window.utils = {
  ENTER_CODE: 13,
  ESC_CODE: 27,
  isEnterKeyCode: function (evt) {
    return evt.keyCode === this.ENTER_CODE;
  },
  isEscKeyCode: function (evt) {
    return evt.keyCode === this.ESC_CODE;
  }
};
