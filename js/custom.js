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
// * +++++++++++++ 02. Header sticky & navbar ++++++++++++++ * //
// ************************************************* //

    $(window).on('scroll', function() {
       if($(this).scrollTop() > 200 ) {
       $(".header").addClass("fixed-top");
       $(".header-top").slideUp();
      } else {
       $(".header").removeClass("fixed-top");
       $(".header-top").slideDown();
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


