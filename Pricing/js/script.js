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

let PricingTablePrivate = document.querySelectorAll(".pricing-table-private");
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");

yearly.addEventListener("click", (e) => {
  e.preventDefault();

  monthly.style.color = "#8d8fb4";
  monthly.style.backgroundColor = "#fff";
  yearly.style.color = "#fff";
  yearly.style.backgroundColor = "#080a3c";

  for (let i = 0; i < PricingTablePrivate.length; i++) {
    PricingTablePrivate[i].classList.add("active");
  }
});
monthly.addEventListener("click", (e) => {
  e.preventDefault();

  yearly.style.color = "#8d8fb4";
  yearly.style.backgroundColor = "#fff";
  monthly.style.color = "#fff";
  monthly.style.backgroundColor = "#080a3c";

  for (let i = 0; i < PricingTablePrivate.length; i++) {
    PricingTablePrivate[i].classList.remove("active");
  }
});


const accordion = document.getElementsByClassName('accordion-item');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click',function (e) {
    e.preventDefault();
    this.classList.toggle('active')
  })  
}