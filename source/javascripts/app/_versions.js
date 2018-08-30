//= require ../lib/_jquery

;(function () {
  'use strict';

  $(function() {
    $(".versions .version-select").on("change", function() {
      var version = $(this).val();
      var url = '/' + version + '.html' + window.location.hash;
      window.location.replace(url);
    });
  });
})();
