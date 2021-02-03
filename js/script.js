$(document).ready(function () {
  // DIALOG
  $('.dialog-close').click(function () {
    $('.dialog-body').fadeOut('200', function () {
      $('.dialog').fadeOut('200');
    });
  });

  $('.dialog-open').click(function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('.dialog').fadeIn('200', function () {
      $(target).fadeIn('200');
    });
  });

  //MENU
  $('#nav-toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');

    $('.header-collapse').toggleClass('active');
  });

  // Variáveis
  const nav = $('.header-nav'),
    navHeight = nav.outerHeight(),
    sections = $('.section');

  // Scroll
  $(window).on('scroll', function () {
    const sTop = $(this).scrollTop();

    // fixando header
    if (sTop > navHeight) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }

    // marcando menu scroll
    if (sTop == 0) {
      nav.find('a').removeClass('active');
      nav.find('a[href="#home"]').addClass('active');
    } else {
      sections.each(function () {
        const top = $(this).offset().top - navHeight;

        if (sTop >= top) {
          nav.find('a').removeClass('active');
          nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
      });
    }
  });

  // Navegação
  nav.find('a').on('click', function (e) {
    e.preventDefault();
    $('.header-collapse').removeClass('active');
    $('#nav-toggle').removeClass('active');

    const target = $(this).attr('href');
    if (target == '#home') {
      $('html, body').animate({ scrollTop: 0 }, 700);
    } else {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          700
        );
    }
  });

  // Back top
  $('.back-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 700);
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

// Carousel Portfolio
$('.carousel-portfolio').owlCarousel({
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
  dots: false,
  dotsSpeed: 1000,
  //autoplay: true,
  autoplaySpeed: 1000,
  responsiveRefreshRate: 10,
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
