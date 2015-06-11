(function($){
  $(function(){
        var navbar = $('nav');
        var fabUp = $('.floated-icon');
        navbar_top = navbar.offset().top;
        $(window).resize(function(){
          navbar_top = navbar.offset().top;
        });
        console.log('nav-top' + navbar_top);
        if(navbar_top == 0) {
          navbar.addClass('fixed');
          $('#tag-banner').addClass('nav-fixed');
        }
        $(window).on('scroll', function(){
          if($(window).scrollTop() >= navbar_top ) {
            navbar.addClass('fixed');
            $('#tag-banner').addClass('nav-fixed');
                    fabUp.removeClass('hide');
          } else {
            navbar.removeClass('fixed');
                    $('#tag-banner').removeClass('nav-fixed');
                    fabUp.addClass('hide');
          }
        });

  }); // end of document ready
})(jQuery); // end of jQuery name space
