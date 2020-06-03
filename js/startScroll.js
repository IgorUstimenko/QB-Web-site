$(window).resize(function () {
    width = $(window).width();
    if (width >= 991) {
        var myFullpage = new fullpage('#fullpage', {});
    }
});