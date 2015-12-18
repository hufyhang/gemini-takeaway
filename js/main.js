'use strict';
(function (window, document) {
  var header = document.getElementById('header');
  header.style.height = window.innerHeight + 'px';

  window.onresize = function () {
    header.style.height = window.innerHeight + 'px';
  };
})(window, document);