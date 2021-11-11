

  $('.myby').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
    }
})






// Button hover

// const btn = document.querySelector('.btn-strax1');
// btn.onmousemove = function (e) {
//   const x = e.pageX - btn.offsetLeft;
//   const y = e.pageY - btn.offsetTop;

//   btn.style.setProperty('--x', x + 'px');
//   btn.style.setProperty('--y', y + 'px');
// }

// const bt = document.querySelector('.btn-strax2');
// bt.onmousemove = function (e) {
//   const x = e.pageX - bt.offsetLeft;
//   const y = e.pageY - bt.offsetTop;

//   bt.style.setProperty('--x', x + 'px');
//   bt.style.setProperty('--y', y + 'px');
// }

// const b = document.querySelector('.btn-strax3');
// b.onmousemove = function (e) {
//   const x = e.pageX - b.offsetLeft;
//   const y = e.pageY - b.offsetTop;

//   b.style.setProperty('--x', x + 'px');
//   b.style.setProperty('--y', y + 'px');
// }

const aze = document.querySelector('.ui-clk');
aze.onmousemove = function (e) {
  const x = e.pageX - aze.offsetLeft;
  const y = e.pageY - aze.offsetTop;

  aze.style.setProperty('--x', x + 'px');
  aze.style.setProperty('--y', y + 'px');

}

// Digital-MArketings button
// const marketings = document.querySelector('.marketing-clk');
// marketings.onmousemove = function (e) {
//   const x = e.pageX - marketings.offsetLeft;
//   const y = e.pageY - marketings.offsetTop;

//   marketings.style.setProperty('--x', x + 'px');
//   marketings.style.setProperty('--y', y + 'px');
// }

///Service images



// let Cards = document.getElementById('cards');
// let screenPosition = document.querySelector(".custom-cards");
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > window.innerHeight - 100) {
//     screenPosition.classList.add("show");
//   }
// });








let UXDesign = document.getElementById("UX-Design");
let screenPosition = document.querySelector(".ui-custom-image");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight - 100) {
    screenPosition.classList.add("active");
  }
});



let Marketing = document.getElementById("marketings");
let ctrlPosition = document.querySelector(".marketing-image");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 800) {
    ctrlPosition.classList.add("show");
  }
});


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
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



// $(document).ready(function () {
//   $(".counter").counterUp({
//     delay:10,
//     time:1200
//   })
// })





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





const accordion = document.getElementsByClassName('accordion-item');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click',function (e) {
    e.preventDefault();
    this.classList.toggle('active')
  })  
}



window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 100) {
    document.querySelector(".navbar-area").classList.add("active"); 
   } 
   else {
      document.querySelector(".navbar-area").classList.remove("active");
    }
});






$('.counter').counterUp({
  delay: 10,
  time: 1000
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