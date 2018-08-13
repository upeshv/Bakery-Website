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
      arrows:true,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
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

    var accordionClone = $('.navigation_bar').clone();
    $( ".mobile_nav" ).append(accordionClone);

    $('#header_toggle').click(function() {
      $(this).toggleClass('open', 1000);
      $('.navigation_bar').toggleClass('open');
      $('body').toggleClass('open', 1000);
    });   

    var val1 = parseInt($('.ready_time .val1').text());
    var val2 = parseInt($('.ready_time .val2').text());
    var val3 = val1+val2;
    $('.ready_time .val3').text(val3);
  });
})(jQuery);