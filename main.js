$(document).ready(function() {

    $toTop = $("#to_top");
    $btnTopOrder = $('#btnTopOrder');
    scrollAction($toTop, 4);
    scrollAction($btnTopOrder, 8);

    $toTop.click(function() {
        $("html, body").stop().animate({ scrollTop: 0 }, '500', 'swing');
    });

});