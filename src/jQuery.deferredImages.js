(function (window, document, $, undefined) {
  'use strict';

  $.fn.extend({
    deferredImages: function (options) {

      var defaults = {
        done : function () {},
        fail : function () {}
      };
      var settings = $.extend(defaults, options);
      var promises = [];

      this.each(function () {
        var $img = $(this);

        var deferred = $.Deferred();

        $('<img/>').attr('src', $img.attr('src'))
          .on('load', function () {
            deferred.resolve(this);
          })
          .on('error', function () {
            deferred.reject(this);
          });

        promises.push(deferred);
      });

      $.when.apply(null, promises).then(settings.done, settings.fail);
      return this;

    }
  });

}(this, this.document, this.jQuery));
