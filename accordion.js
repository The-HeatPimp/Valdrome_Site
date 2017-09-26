;(function ($) {
    'use strict';
    $(document).ready(function () {
        var headingSize = 30;

        var topPos = [];
        //generate stylesheet and positioning
        $('.cPanel-group').each(function () {

            var panelCounter = 0;
            var self = this;
            topPos[self.id] = 0;
            $(this).find(".cPanel").each(function () {
                $(this).css("top", (panelCounter * headingSize) + "px");
                panelCounter++;
                //positioning
            });
            $('html > head').append($('<style>' +
                '#' + self.id + ' .cPanel-collapse.opened { height:' + (panelCounter - 1) * 30 + 'px; }' +
                '#' + self.id + ' { height:' + (panelCounter) * headingSize + 'px; }' +
                '</style>'));
            //body height

        });


        $('.cAccordion .cPanel-heading').on("click", function (e) {
            var collapser = $(e.target).closest(".cPanel").find(".cPanel-collapse");
            var isOpened = $(collapser).hasClass("opened");
            var groupId =  $(e.target).closest(".cPanel-group").attr('id');
            if (isOpened) {
                console.log("closing panel");
                $(collapser).removeClass("opened");
                $(e.target).closest(".cPanel").css("top",topPos[groupId]+"px");
                $(e.target).closest(".cPanel").find("i").removeClass("rotated");


            } else {
                console.log("opening panel");
                $(e.target).closest(".cPanel-group").children(".cPanel").each(function () {
                    console.log('loop');
                    if ($(this).children(".cPanel-collapse").hasClass("opened")) {
                        $(this).children(".cPanel-collapse").removeClass("opened");
                        $(this).children(".cPanel").css("top",topPos[groupId]+"px");
                        $(this).children(".cPanel").find("i").removeClass("rotated");

                    }
                });
                $(collapser).addClass("opened");
                // repositioning
                topPos[groupId] = parseInt(($(e.target).closest(".cPanel").attr("data-pos"))-1) * headingSize;
                console.log(topPos);
                $(e.target).closest(".cPanel").css("top", "0px");
                $(e.target).closest(".cPanel").find("i").addClass("rotated");

            }
        });

    });
})
(jQuery);