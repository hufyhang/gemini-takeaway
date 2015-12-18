'use strict';
(function (window, document, $) {
  // Change header height on the fly.
  var header = document.getElementById('header');
  header.style.height = window.innerHeight + 'px';

  window.onresize = function () {
    header.style.height = window.innerHeight + 'px';
  };

  // Set target=_blank for each external anchor.
  var anchors = document.getElementsByTagName('a');
  anchors = Array.prototype.slice.call(anchors);
  anchors.forEach(function (anchor) {
    if (anchor.getAttribute('rel') === 'external') {
      anchor.setAttribute('target', '_blank');
    }
  });

  // Register goto-btn events.
  var btns = $('.goto-btn');
  btns.each(function () {
    var target = $(this).attr('data-target');
    target = $('#' + target);
    $(this).on('click', function () {
      $.scrollTo(target, 500);
    });
  });

})(window, document, jQuery);