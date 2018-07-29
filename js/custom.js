/* JAVASCRIPT CODES */
//ON STAGE READY
$( function() {
  // !selectors
  var el_main = {
      win:                $( window ),
      header:             $( '#pageHeader' ),
      logoDesk:           $( '#logoDesktop' ),
      nav:                $( '#in-nav-menu' ),
      navToggle:          $( '.navbar-toggle' ),
      wrapper:            $( '.wrapper' ),
      carousel:           $( '.carousel' ),
      nav_menu:           $( '.nav_menu' ),
      contentheader:      $( '.content-page-header' ),
      videoBtn:           $( '#watch_video' ),
  }

  //scroll

  var posHeader = el_main.header.offset().top;

  el_main.win.on( 'scroll', function( e ) {
      var posScroll = $( this ).scrollTop();

      if ( posScroll > ( posHeader + 25 ) ) {
          el_main.logoDesk.addClass( 'logo-desktop--active' );
          el_main.logoDesk.addClass( 'fadeOut' );
          el_main.nav_menu.addClass( 'nav-menu--active' );
          el_main.contentheader.addClass( 'content-page-header--active' );
      } else {
          el_main.logoDesk.removeClass( 'logo-desktop--active' );
          el_main.logoDesk.removeClass( 'fadeOut' );
          el_main.nav_menu.removeClass( 'nav-menu--active' );
          el_main.contentheader.removeClass( 'content-page-header--active' );
      }

  } );

  //navmenu
//   el_main.navToggle.on('click', function(){
//       el_main.sectionSearch.removeClass('active');
//   });

  //SLIDER HOME
  el_main.carousel.carousel({
      interval: 4000
  });

  //MODAL

    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
        //$('#watch-later').hide();
    });
    console.log($videoSrc);
    $('#myModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
    })
    
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
        //$('#watch-later').show();
    }) 

    /* NAV LINK */
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    // .parents('li').prev()
    // nav-item
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-item').removeClass("active");
                currLink.closest("li").addClass("active");
            }
            else{
                currLink.closest("li").removeClass("active");
            }
        });
    }

} );
