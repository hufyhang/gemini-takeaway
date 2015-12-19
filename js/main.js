'use strict';
(function (window, document, $) {
  var $window = $(window);
  // Change header height on the fly.
  var $header = $('header');
  $header.css('height', $window.innerHeight() - 80 + 'px');

  $window.on('resize', function () {
    $header.css('height', $window.innerHeight() - 80 + 'px');
  });

  // window.onresize = function () {
  //   header.style.height = window.innerHeight + 'px';
  // };

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
      $.scrollTo(target, 400);
    });
  });

  new WOW().init();

  // Parallax Scrolling
  $('#header').parallax('50%', 0.6);
  $('#social-bg').parallax('50%', 0.6);

})(window, document, jQuery);