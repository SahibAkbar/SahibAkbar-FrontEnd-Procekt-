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

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 100) {
      document.querySelector(".navbar-area").classList.add("active"); 
     } 
     else {
        document.querySelector(".navbar-area").classList.remove("active");
      }
  });





  $('.myby').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})



$('.counter').counterUp({
  delay: 10,
  time: 1000,
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  dots:true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});


let Top = document.querySelector(".go-top")

window.addEventListener("scroll",(e) =>{
  if (window.pageYOffset > 500) {
    Top.classList.add("active");
  } else {
    Top.classList.remove("active");
  }
});
Top.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});