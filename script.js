;(function ($) {
    'use strict';
    $.fn.descendantOf = function(element) {
        element = $(element)[0];
        var current = this;
        var body    = document.body;
        while (current && current !== element && current !== document.body) {
            current = $(current).parent()[0];
        }
        if (typeof(current) === "undefined" || typeof(current) === "null") {
            return false;
        } else if (current === element) {
            return true;
        } else if (current === document.body) {
            return false;
        }
    };
    $(document).click(function(e) {
        if($("#bs-example-navbar-collapse-1").hasClass("in")) {
          if(!$(e.target).descendantOf("#header")) {
              $('.navbar-toggle').click();
          }
        }
    });


    $(document).ready(function() {
        $('#accordion').on('show.bs.collapse', function (e) {
            console.log('Event fired on #' + e.target.id);
            $('.toper').removeClass("toper");
            $('#' + e.target.id).closest('.panel').addClass("toper");
        }).on('hide.bs.collapse', function (e) {
            $('.toper').removeClass("toper");
        });
    });

})
(jQuery);