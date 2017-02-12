'use strict';

window.setValidationRules = function (element, rules) {
  for (var property in rules) {
    if (rules.hasOwnProperty(property)) {
      element.setAttribute(property, rules[property]);
    }
  }
};
