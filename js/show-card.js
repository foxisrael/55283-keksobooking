'use strict';

window.showCard = function (element, className, func) {
  element.classList.remove(className);
  document.addEventListener('keydown', func);
};
