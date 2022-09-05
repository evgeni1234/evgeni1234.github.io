$(document).ready(function () {

    var show = true;
    var countbox = ".statistics";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 450 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.statistics_number').css('opacity', '1');
            $('.statistics_number').spincrement({
                thousandSeparator: "",
                duration: 4200
            });

            show = false;
        }
    });

});
