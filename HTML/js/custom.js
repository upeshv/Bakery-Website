(function( $ ) {
  $(function() {

    $(window).scroll(function(){
      var sticky = $('.top_header'),
          scroll = $(window).scrollTop();

      if (scroll >= 50) sticky.addClass('top');
      else sticky.removeClass('top');
    });

    $('.smallcakes_slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.pancakes_inner_block').slick({
      dots: true,
      arrows:false,
      vertical: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  });
})(jQuery);