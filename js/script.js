$(document).ready(function () {
  //MENU
  $('#nav-toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');

    $('.header-collapse').toggleClass('active');
  });

  // Carousel Principal
  $('#carousel-principal').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 0,
    nav: true,
    navSpeed: 1000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    dots: true,
    dotsSpeed: 1000,
    //autoplay: true,
    autoplaySpeed: 1000,
    responsiveRefreshRate: 10,
  });
});

// Carousel Testemunhas
$('#carousel-testemunhas').owlCarousel({
  items: 1,
  loop: true,
  margin: 40,
  nav: false,
  navSpeed: 1000,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  dots: true,
  dotsSpeed: 1000,
  //autoplay: true,
  autoplaySpeed: 1000,
  responsiveRefreshRate: 10,
  responsive: {
    980: {
      items: 2,
    },
    1280: {
      items: 2,
      nav: true,
    },
  },
});

// Portfolio
$('.portfolio-nav li a').click(function (e) {
  e.preventDefault();
  $('.portfolio-nav li a').removeClass('active');
  $(this).addClass('active');

  $('.portfolio').removeClass('visible');
  if (this.id == 'all') {
    $('.portfolio').addClass('visible');
  } else {
    $('.portfolio.' + this.id).addClass('visible');
  }
});
