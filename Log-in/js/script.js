// Load start

$(window).on('load', function() {
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: true,
        });
        wow.init();
    }
  });
  $(window).on('load', function() {
    $('.loading').fadeOut();
  });
  
  //Load end