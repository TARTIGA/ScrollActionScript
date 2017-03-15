function scrollAction(elem, multy) {
    $(window).scroll(function() {
        //debug
        // console.log("scrolled");
        // console.log("scrollTop() = " + $(this).scrollTop());
        // console.log("window.height = " + $(window).height());
        if (($(this).scrollTop() * multy) > $(window).height()) {
            elem.addClass("active");
            // console.log("elem class=active id = " + elem.attr('id'));
        } else {
            elem.removeClass("active");
        };

    });
};