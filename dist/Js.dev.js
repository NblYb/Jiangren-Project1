"use strict";

var current_box = document.getElementsByClassName('main_container')[0];

var add_animation = function add_animation(ith_title) {
  current_box.classList.add("move_".concat(ith_title));
  var t = setTimeout(function () {
    for (var i = 0; i < 4; i++) {
      current_box.classList.remove("move_".concat(i));
      clearTimeout(t);

      if (ith_title === 0) {
        current_box.setAttribute('style', 'left: 0');
      } else if (ith_title === 1) {
        current_box.setAttribute('style', 'left:-100%');
      } else if (ith_title === 2) {
        current_box.setAttribute('style', 'left:-200%');
      } else if (ith_title === 3) {
        current_box.setAttribute('style', 'left:-300%');
      }
    }
  }, 1500);
};