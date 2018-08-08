(function( $ ) {
  $(function() {

    $(window).scroll(function(){
      var sticky = $('.top_header'),
          scroll = $(window).scrollTop();

      if (scroll >= 50) sticky.addClass('top');
      else sticky.removeClass('top');
    });

  });
})(jQuery);