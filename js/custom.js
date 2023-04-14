// ************************************************* //
// * +++++++++++++ 01. Owl Carousel ++++++++++++++ * //
// ************************************************* //
$('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

// ************************************************* //
// * +++++++++ 02. Header sticky & navbar ++++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
    if(  $(this).scrollTop()  ) {
    $(".header").addClass("fixed");
    $(".header__top").slideUp();
  } else {
    $(".header").removeClass("fixed");
    $(".header__top").slideDown();
  }
});
$(".navbar-toggler").on('click', function()  {
  $(this).toggleClass("collapsed")
})

// dropdown on hover
$(".dropdown").hover( function() {
  if ($(window).width() > 991) {
    $(this).find(".dropdown-menu").toggleClass("show")
  }
})

// ************************************************* //
// * ++++++++++ 03. Counter Section +++++++++++ * //
// ************************************************* //
jQuery('.count-number').each(function () {
  jQuery(this).prop('Counter',0).animate({
      Counter: jQuery(this).text()
  }, {
    
    //chnage count up speed here
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          jQuery(this).text(Math.ceil(now));
      }
  });
});

// ************************************************* //
// * ++++++++++ 04. Magnific Popup +++++++++++ * //
// ************************************************* //   

$('.popup-youtube').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function(url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      },
      vimeo: {
        index: 'vimeo.com/',
        id: function(url) {
          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});

